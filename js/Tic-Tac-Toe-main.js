
/*----- constants -----*/

const X = "X"
const O = "O"
const resetButton = document.querySelector("reset");
const results = document.getElementById("results");
const activePlayer = document.getElementById("activePlayer");

/*----- app's state (variables) -----*/

let box1status, box2status, box3status, box4status, box5status, box6status, box7status, box8status, box9status;
let boardState = [box1status, box2status, box3status, box4status, box5status, box6status, box7status, box8status, box9status];


/*----- cached element references -----*/

const gameboard = document.getElementById("gameboard");

const box1 = document.getElementById("button1");
const box2 = document.getElementById("button2");
const box3 = document.getElementById("button3");
const box4 = document.getElementById("button4");
const box5 = document.getElementById("button5");
const box6 = document.getElementById("button6");
const box7 = document.getElementById("button7");
const box8 = document.getElementById("button8");
const box9 = document.getElementById("button9");

/*----- event listeners -----*/

// gameboard.addEventListener("click", handleClick);
box1.addEventListener("click", handleClick);
box2.addEventListener("click", handleClick);
box3.addEventListener("click", handleClick);
box4.addEventListener("click", handleClick);
box5.addEventListener("click", handleClick);
box6.addEventListener("click", handleClick);
box7.addEventListener("click", handleClick);
box8.addEventListener("click", handleClick);
box9.addEventListener("click", handleClick);


/*----- functions -----*/
function gameStart() {
    player = 1;
    getActivePlayer()
    results.innerText = "Who will win?";
}

// Interactive game functions
function handleClick(evt) {
    if (player === 1 && evt.target === box1 && box1status === undefined) {
        box1.innerHTML = "X";
        box1status = X;
        winCheck();
        player = 2;

    } else if (player === 1 && evt.target === box2 && box2status === undefined) {
        box2.innerHTML = "X";
        box2status = X;
        winCheck();
        player = 2;

    } else if (player === 1 && evt.target === box3 && box3status === undefined) {
        box3.innerHTML = "X";
        box3status = X;
        winCheck();
        player = 2;


    } else if (player === 1 && evt.target === box4 && box4status === undefined) {
        box4.innerHTML = "X";
        box4status = X;
        winCheck();
        player = 2;

    } else if (player === 1 && evt.target === box5 && box5status === undefined) {
        box5.innerHTML = "X";
        box5status = X;
        winCheck();
        player = 2;

    } else if (player === 1 && evt.target === box6 && box6status === undefined) {
        box6.innerHTML = "X";
        box6status = X;
        winCheck();
        player = 2;

    } else if (player === 1 && evt.target === box7 && box7status === undefined) {
        box7.innerHTML = "X";
        box7status = X;
        winCheck();
        player = 2;

    } else if (player === 1 && evt.target === box8 && box8status === undefined) {
        box8.innerHTML = "X";
        box8status = X;
        winCheck();
        player = 2;

    } else if (player === 1 && evt.target === box9 && box9status === undefined) {
        box9.innerHTML = "X";
        box9status = X;
        winCheck();
        player = 2;

    } else if (player === 2 && evt.target === box1 && box1status === undefined) {
        box1.innerHTML = "O";
        box1status = O;
        winCheck();
        player = 1;

    } else if (player === 2 && evt.target === box2 && box2status === undefined) {
        box2.innerHTML = "O";
        box2status = O;
        winCheck();
        player = 1;

    } else if (player === 2 && evt.target === box3 && box3status === undefined) {
        box3.innerHTML = "O";
        box3status = O;
        winCheck();
        player = 1;

    } else if (player === 2 && evt.target === box4 && box4status === undefined) {
        box4.innerHTML = "O";
        box4status = O;
        winCheck();
        player = 1;

    } else if (player === 2 && evt.target === box5 && box5status === undefined) {
        box5.innerHTML = "O";
        box5status = O;
        winCheck();
        player = 1;

    } else if (player === 2 && evt.target === box6 && box6status === undefined) {
        box6.innerHTML = "O";
        box6status = O;
        winCheck();
        player = 1;

    } else if (player === 2 && evt.target === box7 && box7status === undefined) {
        box7.innerHTML = "O";
        box7status = O;
        winCheck();
        player = 1;

    } else if (player === 2 && evt.target === box8 && box8status === undefined) {
        box8.innerHTML = "O";
        box8status = O;
        winCheck();
        player = 1;

    } else if (player === 2 && evt.target === box9 && box9status === undefined) {
        box9.innerHTML = "O";
        box9status = O;
        winCheck();
        player = 1;
    }
    getActivePlayer()
}


// UPDATE GAME STATUS
function gameStatus() {
    boardState = [box1status, box2status, box3status, box4status, box5status, box6status, box7status, box8status, box9status]
}


//Active player function
function getActivePlayer() {
    if (player === 1) {
        activePlayer.innerHTML = "Current player is X";
    } else if (player === 2) {
        activePlayer.innerHTML = "Current player is O"
    }
}


// WIN CONDITION CHECK
function winCheck() {
    gameStatus();
    if (box1status === X && box2status === X && box3status === X) {
        results.innerText = "Player 1 Wins!";
    } else if (box1status === O && box2status === O && box3status === O) {
        results.innerText = "Player 2 Wins!";

    } else if (box4status === X && box5status === X && box6status === X) {
        results.innerText = "Player 1 Wins!";
    } else if (box4status === O && box5status === O && box6status === O) {
        results.innerText = "Player 2 Wins!";

    } else if (box7status === X && box8status === X && box9status === X) {
        results.innerText = "Player 1 Wins!";
    } else if (box7status === O && box8status === O && box9status === O) {
        results.innerText = "Player 2 Wins!";

    } else if (box1status === X && box4status === X && box7status === X) {
        results.innerText = "Player 1 Wins!";
    } else if (box1status === O && box4status === O && box7status === O) {
        results.innerText = "Player 2 Wins!";

    } else if (box2status === X && box5status === X && box8status === X) {
        results.innerText = "Player 1 Wins!";
    } else if (box2status === O && box5status === O && box8status === O) {
        results.innerText = "Player 2 Wins!";

    } else if (box3status === X && box6status === X && box9status === X) {
        results.innerText = "Player 1 Wins!";
    } else if (box3status === O && box6status === O && box9status === O) {
        results.innerText = "Player 2 Wins!";


    } else if (box1status === X && box5status === X && box9status === X) {
        results.innerText = "Player 1 Wins!";
    } else if (box1status === O && box5status === O && box9status === O) {
        results.innerText = "Player 2 Wins!";

    } else if (box3status === X && box5status === X && box7status === X) {
        results.innerText = "Player 1 Wins!";
    } else if (box3status === O && box5status === O && box7status === O) {
        results.innerText = "Player 2 Wins!";
    } else if (!boardState.includes(undefined)) {
        results.innerText = "You're both too clever";
    }
}

// RESET BUTTON FUNCTIONALITY
reset.onclick = function () {
    resetGame();
}
// RESET GAME FUNCTION
function resetGame() {
    box1status = undefined;
    box2status = undefined;
    box3status = undefined;
    box4status = undefined;
    box5status = undefined;
    box6status = undefined;
    box7status = undefined;
    box8status = undefined;
    box9status = undefined;
    player = 1;
    box1.innerHTML = "";
    box2.innerHTML = "";
    box3.innerHTML = "";
    box4.innerHTML = "";
    box5.innerHTML = "";
    box6.innerHTML = "";
    box7.innerHTML = "";
    box8.innerHTML = "";
    box9.innerHTML = "";
    results.innerText = "";
    gameStatus();
    gameStart();
}


gameStart();