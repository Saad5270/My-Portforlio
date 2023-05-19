let textSect= document.getElementById('textSect');

let boldBtn= document.getElementById('boldBtn');
let italicBtn= document.getElementById('italicBtn');
let centerBtn= document.getElementById('centerBtn');
let rightBtn= document.getElementById('rightBtn');
let leftBtn= document.getElementById('leftBtn');
let justifyBtn= document.getElementById('justifyBtn');
let colorArea= document.getElementById('colorArea');
let backcolorArea= document.getElementById('backcolorArea');
let highlightcolorArea= document.getElementById('highlightcolorArea');



let boldBool= false;
function boldEvent(){
   
    if(boldBool){
        textSect.style.fontWeight= '500';
        boldBool= false;

    }
    else{
        textSect.style.fontWeight= 'bold';
        boldBool= true; 

    }

}
let italicBool= false;
function italicEvent(){
   
    if(italicBool){
        textSect.style.fontStyle= 'normal';
        italicBool= false;

    }
    else{
        textSect.style.fontStyle= 'italic';
        italicBool= true; 

    }

}

let centerBool= false;
function centerEvent(){

    if(centerBool){
        textSect.style.textAlign= 'left';
        centerBool= false;

    }
    else{
        textSect.style.textAlign= 'center';
        centerBool= true; 

    }

}

let rightBool= false;
function rightEvent(){

    if(rightBool){
        textSect.style.textAlign= 'left';
        rightBool= false;

    }
    else{
        textSect.style.textAlign= 'right';
        rightBool= true; 

    }

}

let leftBool= false;
function leftEvent(){

    if(leftBool){
        textSect.style.textAlign= 'left';
        leftBool= false;

    }
    else{
        textSect.style.textAlign= 'left';
        leftBool= true; 

    }

}

let justifyBool= false;
function justifyEvent(){

    if(justifyBool){
        textSect.style.textAlign= 'left';
        justifyBool= false;

    }
    else{
        textSect.style.textAlign= 'justify';
        justifyBool= true; 

    }

}

let underBool= false; 
function underlineEvent(){
    if(underBool){
        textSect.style.textDecoration= 'underline';
        underBool= false;
    }
    else{
        textSect.style.textDecoration= 'none';
        underBool=true;
    }
    

}

let divBool= false; 

function colorDiv(){
    if(divBool){
        colorArea.style.display= 'flex';
        backcolorArea.style.display= 'none';
        highlightcolorArea.style.display= 'none';
        divBool= false;
    }
    else{
        colorArea.style.display= 'none';
        divBool= true;
    }
}


function colorChg(color){   
    textSect.style.color= color;
    
    
}

function backColorDiv(){
    if(divBool){
        backcolorArea.style.display= 'flex';
        colorArea.style.display= 'none';
        highlightcolorArea.style.display= 'none';
        divBool= false;
    }
    else{
        backcolorArea.style.display= 'none';
        divBool= true;
    }
}

function backColorChg(color){
    textSect.style.backgroundColor= color;
    
}

function highlightColorDiv(){
    if(divBool){
        highlightcolorArea.style.display= 'flex';
        backcolorArea.style.display= 'none';
        colorArea.style.display= 'none';
        divBool= false;
    }
    else{
        highlightcolorArea.style.display= 'none';
        divBool= true;
    }
}

function highlightColorChg(color){

    textSect.innerHTML = '<span style="background-color: '+ color +';">' + textSect.innerText + '</span>';

//     if(color==='1'){
//         let clPickerHighlight=document.getElementById('clPickerHighlight');
//         let newColor= clPickerHighlight.value;
//         textSect.innerHTML = '<span style="background-color: '+ newColor +';">' + textSect.innerText + '</span>';
        
//     }
//     else{
//         textSect.innerHTML = '<span style="background-color: '+ color +';">' + textSect.innerText + '</span>';
//   }
}
    

function reset(){
    textSect.style.fontWeight= '500';
    textSect.style.fontStyle= 'normal';
    textSect.style.textAlign= 'left';
    textSect.style.textDecoration= 'none';
    backcolorArea.style.display= 'none';
    highlightcolorArea.style.display= 'none';
    colorArea.style.display= 'none';
    textSect.style.color= 'black';
    textSect.style.backgroundColor= 'white';
    textSect.innerHTML = '<span>' + textSect.innerText + '</span>';

}