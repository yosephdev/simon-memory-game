let game = {
    currentGame: [],
    score: 0,
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"]
}

function newGame() {    
    game.score = 0; 
    game.currentGame = [];   
}

module.exports = {game, newGame};