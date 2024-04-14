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
console.log(getComputerChoice());
function playerSelection(){
    let choice = prompt("enter your choise 'Rock','Paper,'Scissor'");
    return choice.toUpperCase();
}
function compare(computer, player){
    if(computer == "ROCK" && player == "PAPER"){
        return "You WIN! Paper beats Rock";
    }
    else if(computer == "PAPER" && player == "ROCK"){
        return "You LOSE! Paper beats Rock";
    }
    else if(computer == "SCISSOR" && player == "PAPER"){
        return "You LOSE! scissor beats paper";
    }
    else if(computer == "SCISSOR" && player == "ROCK"){
        return "You WIN! rock beats scissor";
    }
    else if(computer == "PAPER" && player == "SCISSOR"){
        return "You WIN! scissor beats paper";
    }
    else if(computer == "ROCK" && player == "SCISSOR"){
        return "You LOSE! rock beats scissor";
    }
}
let result = compare(getComputerChoice(),playerSelection());
window.alert(result);