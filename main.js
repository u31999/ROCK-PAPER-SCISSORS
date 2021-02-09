// select the main refernce
const option = document.querySelector('.icon');
const play = document.querySelector("#button");

//result variables
let com = 0;
let player = 0;
// add the listener which start the game

play.addEventListener('play', play.onclick = btn);

// assign the value of player choice in to playerOption
    function playerChoice(e){
        playerOption = "";
        if(e.target.classList.contains('rock')){
            playerOption = "rock";
        } else if(e.target.classList.contains('paper')){
            playerOption = "paper";
        }else if(e.target.classList.contains('scissor')){
            playerOption = "scissor";
        }else{
            return;
        }
        comChoice();
        compare(playerOption);
    }

//the com jouce randomly
function comChoice(){
    const choiceRandom = Math.floor(Math.random() * 3);
    if(choiceRandom == 0){
        comOption = "rock";
    }else if(choiceRandom == 1){
        comOption = "paper";
    }else{
        comOption = "scissor";
    }
}

// compare player vs com joucis
// if a player win give him one point if it lose give com one point print the result assign its value
function compare(){
    const spanResult = document.querySelector('.result');
    spanResult.setAttribute('style', 'white-space: pre; text-align: center;');
    if(playerOption === "rock" && comOption === "paper"){
        document.getElementById('round-info').textContent = "Paper beat Rock\r\nyou lose";
        com += 1;
    }else if(playerOption === "rock" && comOption === "scissor"){
        document.getElementById('round-info').textContent = "Rock beat Scissor\r\nyou win";
        player += 1;
    }else if(playerOption === "paper" && comOption === "scissor"){
        document.getElementById('round-info').textContent = "Scissor beat paper\r\nyou lose";
        com += 1;
    } else if(playerOption === "paper" && comOption === "rock"){
        document.getElementById('round-info').textContent = "Paper beat Rock\r\nyou win";
        player += 1;
    }else if(playerOption === "scissor" && comOption === "paper"){
        document.getElementById('round-info').textContent = "Scissor beat Paper\r\nyou win";
        player += 1;
    }else if(playerOption === "scissor" && comOption === "rock"){
        document.getElementById('round-info').textContent = "Rock beat Scissor\r\nyou lose";
        com += 1;
    }else if(playerOption.length === comOption.length){
        document.getElementById('round-info').textContent = "Its DROW";
        player += 1;
        com += 1;
    }else{
        return;
    }
    result(player, com);
}   

// button to start the game
function btn(){
    // change button text
    play.textContent = "RESET";

    //on click reset the game
    play.addEventListener('reset', play.onclick = () => {
        if(play.textContent == "RESET"){
            location.reload();
        }
    });

    option.addEventListener('rock', onclick = playerChoice);


} 

// funcion displa the result
function result(){
       document.getElementById('p-score').textContent = player;
       document.getElementById('c-score').textContent = com;
}