// Your code goes here

//define objects
const busImg = document.querySelector(".intro img")
const logo = document.querySelector(".logo-heading")
const hback = document.querySelector(".main-navigation")
const textish =document.querySelectorAll(".text-content *")
const body = document.querySelector(`body`)
const welcome = document.querySelector(`.intro h2`)
const intro = document.querySelector(`.intro`)

//some functions I looked up for fun
const randcolor = function(){return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);}

//Events
//mouseover
busImg.addEventListener("mouseover", ()=>{
    busImg.style.filter ="invert()"
})
busImg.addEventListener("mouseleave", ()=>{
    busImg.style.filter ="none";
    console.log("Activated moveleave");
} )
    //click preventing propogation
intro.addEventListener("click",(()=>{
    intro.style.backgroundColor = `red`;
    event.stopPropagation();
}))
body.addEventListener(`click`,(()=>{
    body.style.background =`yellow`;
    

}))   
//keydown
document.addEventListener("keydown", ()=> {
logo.style.color = "yellow";
console.log("Activated keydown");
})
document.addEventListener("keyup",()=>{
    logo.style.background = "black";
console.log("Activated Keyup");
} )
//wheel
document.addEventListener("wheel",()=>{
    hback.style.filter = "opacity(70)";
    hback.style.backgroundColor= randcolor();
    console.log("Activated wheel")
})
// `drag / drop`
document.addEventListener("drag",()=>{
    busImg.style.transform ="scale(2)";
})
document.addEventListener("dragend",()=>{
    busImg.style.transform = "scale(1)";
})
//copy
body.addEventListener(`copy`,()=>{
    busImg.style.transform = "scale(.75)";
    console.log("Activated copy")
})

//offline
window.addEventListener(`offline`,(() =>{
    busImg.style.border= `black solid 1px`;
    console.log(`The network is offline`);
}))

//resize
window.addEventListener(`resize`,(()=>{
  logo.style.border = `black solid 1px`;
  console.log(`window resized`)  
}))
// 	`scroll`
window.addEventListener(`scroll`,(()=>{

    busImg.style.border = `${randcolor()} solid 5px`;
    console.log("scroll!")
}))
// `contextmenu` 
   body.addEventListener(`contextmenu`, ()=>{
    alert(`I see you!`);
    console.log("Activated contextmenu")
    });
    //console.log(el)
//  `dblclick`
busImg.addEventListener(`dblclick`, ()=>{
    busImg.style.transform= `scale(.75)`;
    console.log("Activated Clicky")
})
