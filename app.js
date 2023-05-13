
let navDiv= document.getElementById('navDiv');
let smallNav= document.getElementById('smallNav');
let mainIntro= document.getElementById('mainIntro');

let visibleNav= () =>{
    if(navDiv.style.display==='block'){
       navDiv.style.display= 'none';
       smallNav.className= 'fa-solid fa-bars';
    }
    else{
        navDiv.style.display= 'block';
        smallNav.className= 'fa-solid fa-xmark';
        mainIntro.style.marginTop= 0;

    }

}
