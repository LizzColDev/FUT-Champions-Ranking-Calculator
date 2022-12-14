# FUT-Champions-Ranking-Calculator

### Features

This is a repository created with Vanilla JavaScript, HTML and CSS.
In this project the scores obtained in 10 games played will be counted, if you win a game you will add 4 points, if you lose a game you will add one point, according to the pending games, the program tells you if it is possible or not to reach a specific rank and how many games you need to win to reach that rank. 
The highest rank you can reach is number 7, and depending on the rank you reach, you win a prize, and at the end of the 10 games the program tells you what rank you reached and what prize you won.

|  RANK |POINT NEEDED | REWARDS  |
| ------------ | ------------ | ------------ |
|  VII | 4 |  2 non-transferable premium Jumbo Gold Envelopes. |
| VI  | 12  | 2 Gold Player Envelopes + 1 Premium Jumbo Gold Envelope + 400 Ranking points.  |
| V (from here we are classified) | 20  |  2 Unique Gold Envelopes + 1 Small Envelope of Top Gold Players + Qualification to the finals. |
|IV   | 26  | 2 Megasacks + 1 Unique gold envelope + Qualification to the finals.  |
| III  |32  | 1 Premium jumbo gold players envelope + 2 Unique gold envelopes + 2 small top gold players envelopes + Qualification to the finals.  |
| II  |  36 | 1 unique mega envelope + 1 envelope of top gold players + 2 small envelopes of unique gold players + qualification to the finals.  |
|I   | 40  | 1 Jumbo envelope of unique players + 1 Envelope of unique players + 1 Megasachet + Qualification to the finals.  |

# 💻 
### Tecnologies:
##### HTML
##### CSS
##### JAVASCRIPT

### Documentation

An Array called ranges where the information of the ranges, the points and matches required to reach it.

Event that listens for the click on the "win" button, with the condition that the variable games is greater than 0, which for each game won, will add 4 points to the variable "currentTotal", will subtract 1 point to the variable "games", will add a point to the variable "gamesWin" and will add the text of the node "spanPoint".