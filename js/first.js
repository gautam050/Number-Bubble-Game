
function makeBubble(){

let clutter=" "

for (let i = 1; i<61; i++) {
    let rn=Math.floor(Math.random()*10)
   clutter +=` <div class="bubble">${rn}</div>`    
} 
document.querySelector(".pbtm").innerHTML=clutter

}
let timer=60;
function runTimer(){
    
// call on every sec so now will be updated
    let timerstp= setInterval(
    () =>{
    if(timer > 0){
        timer--
        document.querySelector("#timerval").textContent=timer
    }else{
        clearInterval(timerstp)
        document.querySelector(".pbtm").innerHTML=`<h1> Game Over</h1>`
    
    }},1000); 
}

let hitrn=0;
function getNewHit(){
    hitrn= Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent=hitrn

}

let score=0
function incscore(){
   
    score = score+10;
    document.querySelector("#scoreval").textContent=score

}

document.querySelector(".pbtm").addEventListener("click",function(details){
    let clickedNum =Number(details.target.textContent);
    if(clickedNum === hitrn){
        incscore();
        makeBubble();
        getNewHit();
        
    }
})


runTimer();
makeBubble();
getNewHit();



