let computerscore=0,playerscore=0;
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
function playerSelection(){
    let choice = prompt("enter your choise 'Rock','Paper,'Scissor'");
    return choice.toUpperCase();
}
function compare(computer, player){
    if(computer == "ROCK" && player == "PAPER"){
        playerscore++;
        return "You WIN! Paper beats Rock";
        
    }
    else if(computer == "PAPER" && player == "ROCK"){
        computerscore++;
        return "You LOSE! Paper beats Rock";
        
    }
    else if(computer == "SCISSOR" && player == "PAPER"){
        computerscore++;
        return "You LOSE! scissor beats paper";
        
    }
    else if(computer == "SCISSOR" && player == "ROCK"){
        playerscore++;
        return "You WIN! rock beats scissor";
        
    }
    else if(computer == "PAPER" && player == "SCISSOR"){
        playerscore++;
        return "You WIN! scissor beats paper";
        
    }
    else if(computer == "ROCK" && player == "SCISSOR"){
        computerscore++;
        return "You LOSE! rock beats scissor";
        
    }
    else if(computer == "ROCK" && player == "ROCK"){
        return "It's a tie";
    }
    else if(computer == "PAPER" && player == "PAPER"){
        return "It's a tie";
    }
    else if(computer == "SCISSOR" && player == "SCISSOR"){
        return "It's a tie";
    }
}
function playGame(){
for(let i=1;i<=5;i++){
    console.log(computerscore);
    console.log(playerscore);
    compare(getComputerChoice(),playerSelection());
    console.log(getComputerChoice());
}
    if(computerscore > playerscore){
        window.alert("computer win");
    }
    else{
        window.alert("player win");
    }
}
playGame();