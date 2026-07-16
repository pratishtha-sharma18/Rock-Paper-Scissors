let scoreOfComp = 0;
let scoreOfPlayer = 0;
let chance = document.querySelectorAll(".choices");
let final = document.querySelector("#yourMove");
let scoreP = document.querySelector("#playerScore");
let scoreC = document.querySelector("#compScore");

chance.forEach(element => {
    element.addEventListener("click", () => {
        const userChoice = element.getAttribute("id");
        game(userChoice);
    })
})

function game(userChoice) {
    let compChoice = ["rock", "paper", "scissors"];
    let genratedNo = Math.floor(Math.random() * 3);
    let ans = compChoice[genratedNo];
    if (ans === "rock") {
        if (userChoice === "paper") {
            final.innerText = `You have won ${userChoice} beats ${ans}`;
            scoreOfPlayer++;
            scoreP.innerText = scoreOfPlayer;
        }
        if (userChoice === "rock") {
            final.innerText = "Draw";
        }
        if (userChoice === "scissors") {
            final.innerText = `You lost ${ans} beats ${userChoice}`;;
            scoreOfComp++
            scoreC.innerText = scoreOfComp;
        }
    }
    else if (ans === "paper") {
        if (userChoice === "paper") {
            final.innerText = "Draw";
        }
        if (userChoice === "rock") {
            final.innerText = `You lost ${ans} beats ${userChoice}`;
            scoreOfComp++;
            scoreC.innerText = scoreOfComp;
        }
        if (userChoice === "scissors") {
            final.innerText = `You have won ${userChoice} beats ${ans}`;
            scoreOfPlayer++;
            scoreP.innerText = scoreOfPlayer;
        }
    }
    else if (ans === "scissors") {
        if (userChoice === "paper") {
            final.innerText = `You lost ${ans} beats ${userChoice}`;;
            scoreOfComp++;
            scoreC.innerText = scoreOfComp;
        }
        if (userChoice === "rock") {
            final.innerText = `You have won ${userChoice} beats ${ans}`;;
            scoreOfPlayer++;
            scoreP.innerText = scoreOfPlayer;
        }
        if (userChoice === "scissors") {
            final.innerText = "Draw";
        }
    }
}