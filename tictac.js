let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("music.mp3");
const winbox = document.querySelector('.win');
const drawbox = document.querySelector('.draw');


let turn = "X";
let count = 1;
function changeTurn()
{   
    if(turn === 'X')
    turn = 'O';
    else turn = 'X';

    count++;
}
document.querySelector('.turntext').innerText = turn;
let boxes = document.querySelectorAll('.boxes');

for(let box of boxes)
{
    box.addEventListener('click' , () => {
        console.log(turn);
        console.log("working!!!");
        audioTurn.play();
        box.innerText = turn;
        let iswin = winning();
        if(iswin === 0)
        { 
            let p;
            if(turn === 'X') p = 1;
            else p = 2;
          document.querySelector('.win h1').innerText = `Player ${p} WON!!!`;
          winbox.style.display = 'flex';
            
        }else
        {
        changeTurn();
        document.querySelector('.turntext').innerText = turn;
        }
        if(count === 10)
        {
            drawbox.style.display = "flex";
        }
    })
}

function winning()
{   
    
    
    if(boxes[0].innerText != '' && boxes[0].innerText === boxes[1].innerText && boxes[1].innerText === boxes[2].innerText)
    return 0;
    if(boxes[0].innerText != '' && boxes[0].innerText === boxes[3].innerText && boxes[3].innerText === boxes[6].innerText)
    return 0;
    if(boxes[0].innerText != '' && boxes[4].innerText === boxes[0].innerText && boxes[4].innerText === boxes[8].innerText)
    return 0;
    if(boxes[2].innerText != '' && boxes[2].innerText === boxes[5].innerText && boxes[5].innerText === boxes[8].innerText)
    return 0;
    if(boxes[2].innerText != '' && boxes[2].innerText === boxes[4].innerText && boxes[6].innerText === boxes[2].innerText)
    return 0;
    if(boxes[8].innerText != '' && boxes[8].innerText === boxes[7].innerText && boxes[6].innerText === boxes[7].innerText)
    return 0;
    if(boxes[1].innerText != '' && boxes[1].innerText === boxes[7].innerText && boxes[7].innerText === boxes[4].innerText)
    return 0;
    if(boxes[3].innerText != '' && boxes[3].innerText === boxes[4].innerText && boxes[4].innerText === boxes[5].innerText)
    return 0;
}
function reset()
{
    for(let box of boxes)
    {
        box.innerText = "";
    }
    drawbox.style.display = 'none';
    winbox.style.display = 'none';
    turn = "X";
    document.querySelector('.turntext').innerText = turn;
    count = 1;

}

const buttons = document.querySelectorAll('.button-30');

for(let button of buttons)
{
    button.addEventListener('click' , reset);
    

}