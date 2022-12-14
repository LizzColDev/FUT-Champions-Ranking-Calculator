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
let currentTotal = 0;
let gamesLoose = 0;
let gamesWin = 0;

btnWin.addEventListener('click', ()=>{
    if(games>0){
        currentTotal += 4
        gamesWin +=1
        printMessage()
        ranges.forEach(range => range.partWin -=1)
    }
    else{
        alert('No hay mas partidos disponibles para jugar')
        messGame()
    }    
})

btnLoose.addEventListener('click', ()=>{
    if(games>0){
        currentTotal += 1
        gamesLoose +=1
        printMessage()
    }
    else{
        alert('No hay mas partidos disponibles para jugar')
        messGame()
    }    
})

btnRefreshs.addEventListener("click", () => location.reload());

const showRangeWin = () =>{
    let arrRange = [];
    ranges.filter(range => {
        if(range.ptoMin<=currentTotal){
            let nameRange = document.createElement('h3')
            nameRange.innerText = `Alcanzaste el rango ${range.range}`
            arrRange.push(nameRange)
            containGames.insertAdjacentElement('afterbegin', arrRange[0])
    }
}
)}

const messGame = ()=> {
    containGames.innerText = ""
    btnWin.setAttribute("disabled", "disabled")
    btnLoose.setAttribute("disabled", "disabled")
    console.log(ranges, 'ranges messgame')
    if(ranges.partWin <= 0){
        console.log(ranges, 'dentro del if ranges')
    }
    ranges.reduce(range =>{

            containerRange = document.createElement('div')
            containerRange.className="contain-message"
            let message = document.createElement('p')
            if(currentTotal <= range.ptoMin ){
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
}

function printMessage(){
    games -=1
    spanPoints.innerText = currentTotal
    containGames.innerText = ""
    ranges.forEach(range =>{
        let containerRange = document.createElement('div')
        containerRange.className="contain-message"
        let nameRange = document.createElement('h3')
        let message = document.createElement('p')
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