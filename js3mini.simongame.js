let gameseq=[];
let userseq=[];

let btns=["red","yellow" ,"blue","purple"];
 
let started=false;
let level=0;
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(started==false){
        h2.innerText="Game is started";
        started=true;
        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
    btn.classList.remove("gameflash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
    btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userseq=[];
    level++;
    h3.innerText=`Level:${level}`;

    let randIdx=(Math.floor(Math.random()*4));
    let randColor= btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    gameflash(randbtn);
}

function checkAns(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
           setTimeout(levelup,1000);
        }
    }
    else{
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },500)
        h2.innerText=`Your score is:${level}`;
        h3.innerText="Gameover! press any key to start again.";
        reset();
    }
}

function btnpress(){
  let btn=this;
  userflash(btn);

 userColor=btn.getAttribute("id");
 userseq.push(userColor);
 checkAns(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset (){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}