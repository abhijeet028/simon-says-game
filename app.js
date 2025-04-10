let gameSequence = [];
let userSequence = [];
let btns = ['yellow', 'red', 'purple', 'green'];

let started = false;
let level = 0;
let highestScore=0;

let userColor;

let h2 = document.querySelector('h2');

document.addEventListener('keypress', function () {
    if (started == false) {
        console.log('game started');
        started = true;
        levelUp();

    }
});

function levelUp() {
    userSequence=[];
    level++;
    h2.innerText = `level ${level}`;
    let randIndex = Math.floor(Math.random() * 3);//0 --> 3
    let randColor = btns[randIndex];
    gameSequence.push(randColor);
    console.log(gameSequence);
    let randBtn = document.querySelector(`.${randColor}`);
    btnFlash(randBtn);
}

function btnFlash(btn) {
    btn.classList.add('flash');
    setTimeout(function () {
        btn.classList.remove('flash');
    }, 250);
}

function userFlash(btn) {
    btn.classList.add('userFlash');
    setTimeout(function () {
        btn.classList.remove('userFlash');
    }, 250);
}

// function btnPress() {
//     let btn=this;
//     userFlash(btn);
//     userColor=btn.getAttribute('id');
//     userSequence.push(userColor);
// }

let allBtns = document.querySelectorAll('.btn');
for (btn of allBtns) {
    btn.addEventListener('click', function() {
        let btn=this;
        console.log(btn);m 
        userFlash(btn);
        userColor=btn.getAttribute('id');
        userSequence.push(userColor);
        checkAns(userSequence.length-1);
    });
}

function checkAns(indx){
    
    if(userSequence[indx]===gameSequence[indx])
    {
        if(userSequence.length==gameSequence.length)
            setTimeout(levelUp,1000);
    }
    else
    {
        if(level>highestScore){
            highestScore=level;
        }
        h2.innerHTML=`game over!!<br>current score : ${level}<br>highest score : ${highestScore}<br>press any key to start again`;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor='black';
        },250);
        reset();
    }
}
function reset(){
    gameSequence=[];
    userSequence=[];
    level=0;
    started=false;
}

