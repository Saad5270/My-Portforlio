
let arrColors= ['#bea9de', '#9c6feb', '#bff5cc', '#c8f0ee', '#e7e5fa', '#fbe4de', '#fee1d3', '#009f71', '#5f51fe', '#8852fe',
'#5f51fe','#8852fe', '#ff0088', '#ff2e00', '#3c3c1f', '#140062', '#421b65', '#6b0144', '#740000', '#d7fe02', '#bea9de', '#2b0099', '#7b8cde', 
'#e4026f'];

let color= document.getElementById('color');
let box = document.getElementById('box');

function changeColor(){
    
    let ranNum= Math.floor(Math.random() * 25);
    
    if(ranNum<arrColors.length){
        color.innerText= arrColors[ranNum];

    }

    box.style.background= arrColors[ranNum]
    
}