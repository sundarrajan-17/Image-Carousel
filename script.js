const imgs=document.getElementById("images");
const leftbtn=document.getElementById("left-btn");
const rightbtn=document.getElementById("right-btn");

const image=document.querySelectorAll("#images img");

let index=0;
let interval=setInterval(run,2500);

function run(){
    index++;
    changeimage();
}

function changeimage(){
    if(index>image.length-1){
        index=0;
    }else if(index<0){
        index=image.length-1;
    }

    imgs.style.transform=`translateX(${-index * 800}px)`;
}
function resetInterval(){
    clearInterval(interval);
    interval=setInterval(run,2500);
}
rightbtn.addEventListener('click' ,()=>{
    index++;
    changeimage();
    resetInterval();
})
leftbtn.addEventListener('click',() =>{
    index--;
    changeimage();
    resetInterval();
})
