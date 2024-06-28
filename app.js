let gameSep = [];
let userSep = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if(started == false) {
        console.log("game started.");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp() {
    userSep = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);

    gameSep.push(randColor);
    console.log(gameSep);

    gameFlash(randBtn);
}

function checkAns(idx) {
    
    if(userSep[idx] === gameSep[idx]){
        if(userSep.length == gameSep.length) {
            setTimeout(levelUp, 1000);
        } 
    } else {
        
        h2.innerHTML = `Game Over.. Your score <b>${level}</b><br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red"; 
        
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);

        resetGame();
    }
}

function btnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);

    userSep.push(userColor);
    // console.log(userSep);

    checkAns(userSep.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function resetGame() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}