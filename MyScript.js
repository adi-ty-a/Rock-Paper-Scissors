let computerscore=0,playerscore=0,rounds =5,round=0;
function getComputerChoice(){
    let num = Math.floor((Math.random()*3)+1);
    if(num == 1){
        return "ROCK";
    }
    else if(num==2){
        return "PAPER";
    }
    else{
        return "SCISSOR";
    }
}

const roundcompare = document.querySelector('#compare');
function compare(computer, player){
    if(computer == "ROCK" && player == "PAPER"){
        playerscore++;
        roundcompare.textContent= "You WIN! Paper beats Rock";
    }
    else if(computer == "PAPER" && player == "ROCK"){
        computerscore++;
        roundcompare.textContent= "You LOSE! Paper beats Rock";
    }
    else if(computer == "SCISSOR" && player == "PAPER"){
        computerscore++;
        roundcompare.textContent= "You LOSE! scissor beats paper";
    }
    else if(computer == "SCISSOR" && player == "ROCK"){
        playerscore++;
        roundcompare.textContent= "You WIN! rock beats scissor";
    }
    else if(computer == "PAPER" && player == "SCISSOR"){
        playerscore++;
        roundcompare.textContent= "You WIN! scissor beats paper";
    }
    else if(computer == "ROCK" && player == "SCISSOR"){
        computerscore++;
        roundcompare.textContent= "You LOSE! rock beats scissor";
    }
    else {
        return "tie";
    }
}

function playGame(playerchoice){

    //comparing and giving result..
    console.log(compare(getComputerChoice(),playerchoice));

    // score of the computer and player ...
    console.log(computerscore);
    console.log(playerscore);
    }
 // taking player choice

let paper = document.querySelector("#paper");
paper.addEventListener("click", (element)=>{
    playGame("PAPER");
    });
let rock = document.querySelector("#rock");
rock.addEventListener("click", (element)=>{
    playGame("ROCK");
    });
let scissor = document.querySelector("#scissor");
scissor.addEventListener("click", (element)=>{
    playGame("SCISSOR");
    });
//scoreboard 
const winner = document.querySelector('#winner');
const displayround = document.querySelector('#round');
document.addEventListener('click', ()=> {
    const score = document.querySelector("#score");
    score.textContent ='Computer Score =' + computerscore +"| Your score = " + playerscore;   
    round++;
    displayround.textContent="round " + round;
    if(round==5){
        if(computerscore > playerscore){
            winner.textContent ='COMPUTER WINS!'
        }
        else{
            winner.textContent ='YOU WIN!'
        }
        } 
})



