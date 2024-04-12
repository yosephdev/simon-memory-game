let game = {
    currentGame: [],
    score: 0,
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"]
}

function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    showScore();
    addTurn();
}

function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

function lightsOn(circ) {
    let button = document.getElementById(circ);
    button.classList.remove("circle");
    button.classList.add(circ + "light");
    setTimeout(function () {
        button.classList.remove(circ + "light");
    }, 400);
}


module.exports = { game, newGame, showScore, addTurn, lightsOn };