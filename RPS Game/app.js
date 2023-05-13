
let userGenerated= document.getElementById('userGenerated');
let compGenerated= document.getElementById('compGenerated');
let winTie= document.getElementById('winTie');

let arrIcon= ['fa-solid fa-hand-scissors', 'fa-solid fa-hand-back-fist', 'fa-solid fa-hand'];

function scissor(){
    userGenerated.className= arrIcon[0];
    return userGenerated.className;
}

function rock(){
    userGenerated.className= arrIcon[1];
    return userGenerated.className;
}
function paper(){
    userGenerated.className= arrIcon[2];
    return userGenerated.className;
}

let counter = 0;
function startGame(){
    let ranNum= Math.floor(Math.random()*3);
    compGenerated.className= arrIcon[ranNum];
    
    let points= document.getElementById('points');
    
    if (compGenerated.className === userGenerated.className) {
        winTie.className= "tie"
        winTie.innerText= "It's a tie!";
    } 
     
    else if((compGenerated.className === arrIcon[0] && userGenerated.className === arrIcon[1]) ||
    (compGenerated.className === arrIcon[1] && userGenerated.className === arrIcon[2]) ||
    (compGenerated.className === arrIcon[2] && userGenerated.className === arrIcon[0])){
        
        winTie.className= "win"
        winTie.innerText= "You Win!";
        counter++;
        points.innerText= counter;
    }
    else{
        winTie.className= "lose"
        winTie.innerText= "You Lose!";
        counter--;
        points.innerText= counter;
    }





}