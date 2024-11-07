let game = {
    currentGame: [],
    score: 0,
    playerMoves: [],
    turnNumber: 0,
    lastButton: "",
    turnInProgress: false,
    choices: ["button1", "button2", "button3", "button4"],
    gameState: "stopped"
};

function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    game.gameState = "started";

    for (let circle of document.getElementsByClassName("circle")) {
        if (circle.getAttribute("data-listener") !== "true") {
            circle.addEventListener("click", (e) => {
                if (game.currentGame.length > 0 && !game.turnInProgress) {
                    let move = e.target.getAttribute("id");
                    game.lastButton = move;
                    game.playerMoves.push(move);
                    lightsOn(move);
                    playerTurn();
                }
            });
            circle.setAttribute("data-listener", "true");
        }
    }

    addTurn();
    showScore();
    alert("Welcome to the Game! Click the circles to play.");
}

function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[Math.floor(Math.random() * 4)]);
    showTurns();
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

function lightsOn(circ) {
    let button = document.getElementById(circ);
    button.className = "";
    button.classList.add("light");
    setTimeout(function () {
        button.classList.remove("light");
    }, 400);
}


function showTurns() {
    game.turnInProgress = true;
    game.turnNumber = 0;
    let turns = setInterval(function () {
        lightsOn(game.currentGame[game.turnNumber]);
        game.turnNumber++;
        if (game.turnNumber >= game.currentGame.length) {
            clearInterval(turns);
            game.turnInProgress = false;
        }
    }, 800);
}

function playerTurn() {
    let i = game.playerMoves.length - 1;
    if (game.currentGame[i] === game.playerMoves[i]) {
        if (game.currentGame.length === game.playerMoves.length) {
            game.score++;
            showScore();
            addTurn();
        }
    } else {
        document.getElementById(game.playerMoves[i]).classList.add("wrong");
        setTimeout(() => {
            document.getElementById(game.playerMoves[i]).classList.remove("wrong");
        }, 400);
        
        alert("Oops! That's not correct. Let's start over.");
        newGame();
    }
}

function resetGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    game.gameState = "stopped";
    showScore();
    alert("Game has been reset! Click to start a new game.");
}

module.exports = { game, newGame, showScore, addTurn, lightsOn, showTurns, playerTurn, resetGame };