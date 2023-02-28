let rockbtn = document.getElementById("game-options__rock");
let paperbtn = document.getElementById("game-options__paper");
let scissorbtn = document.getElementById("game-options__scissor");
let reloadbtn = document.getElementById("game-reload");
let gameresult = document.getElementById("game-result__display");
let playerscores = document.getElementById("playerscore");
let computerscores = document.getElementById("computerscore");
let displayplayerchoices = document.querySelector(".display-player__choices");
let displaycomputerchoices = document.querySelector(".display-computer__choices");
let playeroptions = [rockbtn,paperbtn,scissorbtn];
let options = ["rock","paper","scissor"];
let arrayofimages = ["./assets/rock.png","./assets/paper.png","./assets/scissor.png"];

let playerscore = 0,computerscore = 0;

playeroptions.forEach(Option => {
    Option.addEventListener("click", function (e){
        const randomnumber = Math.floor(Math.random()*3);
        const computerchoice = options[randomnumber];
        const playerchoice = options[Option.value];
        console.log(Option.value);
        console.log(computerchoice);
        console.log(arrayofimages[randomnumber]);
        displayplayerchoices.innerHTML = `<img src="${arrayofimages[Option.value]}" alt="">`
        displaycomputerchoices.innerHTML = `<img src="${arrayofimages[randomnumber]}" alt="">`
        winner(playerchoice,computerchoice);
    });
});

function winner (player,computer){
    player = player.toLowerCase();
    computer = computer.toLowerCase();

    if (player === computer) {
        gameresult.innerText = "Tie";
    }
    else {
    if (player == "rock") {
        if (computer == "paper") {
            gameresult.textContent = "computer won";
            computerscore++;
            computerscores.textContent = computerscore; 
        }
        else{
            gameresult.textContent = "player Won"
            playerscore++;
            playerscores.textContent = playerscore;
        }
    }
        if (player == "paper") {
            if (computer == "scissor") {
                gameresult.textContent = "computer won";
                computerscore++;
                computerscores.textContent = computerscore;
            }
            else {
                gameresult.textContent = "player won";
                playerscore++;
                playerscores.textContent = playerscore;
            }
        }
        if (player == "scissor") {
            if (computer == "rock") {
                gameresult.textContent = "computer won";
                computerscore++;
                computerscores.textContent = computerscore;
            }
            else {
                gameresult.textContent = "player won";
                playerscore++;
                playerscores.textContent = playerscore;
            }
        }
    }
    if (playerscore == 5) {
        gameresult.textContent = "player won";
        playerscore = 0;
        computerscore = 0;
        playerscores.textContent = 0;
        computerscores.textContent = 0;
        alert("player won");
    }
    if (computerscore == 5) {
        gameresult.textContent = "computer won";
        playerscore = 0;
        computerscore = 0;
        playerscores.textContent = 0;
        computerscores.textContent = 0;
        alert("computer won");
    }
};


reloadbtn.addEventListener("click", ()=>{
    gameresult.innerHTML = "";
    computerscore = 0;
    playerscore = 0;
    playerscores.textContent = 0;
    computerscores.textContent = 0;
})