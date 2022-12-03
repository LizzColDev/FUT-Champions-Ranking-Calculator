const btnWin =document.querySelector('.btnWin')
const btnLoose =document.querySelector('.btnLoose')
const btnRefreshs =document.querySelector('.btnRefreshs')
const spanPoints = document.querySelector('#value')
const containGames = document.querySelector('#containGames')


let ranges = [
    {
        range: 1,
        ptoMin: 40,
        partWin: 10,
        gameForLoose:  0
    },
    {
        range: 2,
        ptoMin: 36,
        partWin: 9,
        gameForLoose:  1
    },
    {
        range: 3,
        ptoMin: 32,
        partWin: 8,
        gameForLoose:  2
    },
    {
        range: 4,
        ptoMin: 26,
        partWin: 6,
        gameForLoose:  4
    },
    {
        range: 5,
        ptoMin: 20,
        partWin: 4,
        gameForLoose:  6
    },
    {
        range: 6,
        ptoMin: 12,
        partWin: 1,
        gameForLoose:  9
    },
    {
        range: 7,
        ptoMin: 4,
        partWin: 0,
        gameForLoose:  10
    }
];

let games = 10;
let currentPoint =0;
let currentTotal = 0;
let gamesLoose = 0;
let gamesWin = 0;
let containNodes = []

btnWin.addEventListener('click', ()=>{
    if(games>0){
        currentTotal += 4
        games -=1
        gamesWin +=1
        spanPoints.innerText = currentTotal
        deleteNode()
            ranges.forEach(range =>{
                let containerRange = document.createElement('div')
                let nameRange = document.createElement('h3')
                let message = document.createElement('p')
                containerRange.className="contain-message"
                range.partWin -=1
                nameRange.innerText = `Rango ${range.range}`

                    if(gamesLoose > range.gameForLoose ){
                        message.innerText = `Ya perdiste ${gamesLoose} partidos, no tienes opciones de llegar a este rango`
                        message.className = 'messageLooseRange'
                    }
                    else if(currentTotal>=range.ptoMin){
                        message.innerText = `Alcanzaste este rango, felicitaciones`
                        message.className = 'messageWinRange'
                    } 
                    else{
                        message.innerText = `Tienes ${currentTotal} puntos, te quedan ${games} partidos por jugar y debes ganar ${range.partWin} partidos mas para llegar a este rango`
                    }         
                    containerRange.append(nameRange, message)
                    containGames.append(containerRange)   
    })
    }
    else{
        
        alert('No hay mas partidos disponibles para jugar')
        messGame()
    }    
    })


btnLoose.addEventListener('click', ()=>{
    if(games>0){
        currentTotal += 1
        games -=1
        gamesLoose +=1
        spanPoints.innerText = currentTotal
        deleteNode()
            ranges.forEach(range =>{

                containerRange = document.createElement('div')
                containerRange.className="contain-message"
                let nameRange = document.createElement('h3')
                let message = document.createElement('p')
                // range.partWin -=1
                    nameRange.innerText = `Rango ${range.range}`
                    if(gamesLoose > range.gameForLoose ){
                        message.innerText = `Ya perdiste ${gamesLoose} partidos, no tienes opciones de llegar a este rango`
                        message.className = 'messageLooseRange'
                    }
                    else if(currentTotal>=range.ptoMin){
                        message.innerText = `Alcanzaste este rango, felicitaciones`
                        message.className = 'messageWinRange'
                    } 
                    else{
                        message.innerText = `Tienes ${currentTotal} puntos, te quedan ${games} partidos por jugar y debes ganar ${range.partWin} partidos mas para llegar a este rango`
                    }            
                    containerRange.append(nameRange, message)
                    containGames.append(containerRange)  
    })
    }
    else{
        alert('No hay mas partidos disponibles para jugar')
        messGame()

    }    
})

btnRefreshs.addEventListener("click", function (){
    location.reload();
})

const showRangeWin = () =>{
    let arrRange = [];
    ranges.filter(range => {
        console.log('ranges en show parra', range)
        if(range.ptoMin<=currentTotal){
            let nameRange = document.createElement('h3')
            nameRange.innerText = `Alcanzaste el rango ${range.range}`
            arrRange.push(nameRange)
            console.log(arrRange, 'no se donde estoy')
            containGames.insertAdjacentElement('afterbegin', arrRange[0])
    }
}
    )}
const messGame = ()=> {
    deleteNode()
    btnWin.setAttribute("disabled", "disabled")
    btnLoose.setAttribute("disabled", "disabled")
    ranges.reduce(range =>{
        range.partWin
        console.log(range, 'ranges en messgame')

            containerRange = document.createElement('div')
            containerRange.className="contain-message"
            let message = document.createElement('p')
            if(gamesLoose === 0 ){
                message.innerText = `Ganaste ${gamesWin} partidos, te ganaste el premio mayor.
                                        Felicitaciones!`
                message.className = 'messageWinRange'
            }else if(gamesLoose <= 5 || gamesLoose < 10){
                message.innerText = `Ganaste ${gamesWin} partidos,
                                    felicitaciones! Clasificaste a la Champion`
                message.className = 'messageLooseRange'
            }else{
                message.innerText = `Ganaste ${gamesWin} partidos,
                                    no te desanimes`
                message.className = 'messageLooseRange'
            }            
            containerRange.appendChild(message)
            containGames.removeAttribute('id')

            showRangeWin()
            containGames.append(containerRange)  

    })
    console.log(currentTotal, 'currentTotal en el else')

}


const deleteNode =() => {

const allContainer = document.querySelectorAll(".contain-message");
console.log(allContainer)
allContainer.forEach(message => {containGames.removeChild(message)})
}