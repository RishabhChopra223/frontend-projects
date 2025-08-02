let btn = document.getElementById("btn");
let dice = document.getElementsByClassName("dice");
let l = document.getElementById("l1");

function generateNo(){
  for(d of dice){
    d.classList.remove("invisible");
  }
  let randomNo= Math.floor(Math.random()*6)+1;
  l.innerText=`dice shows value ${randomNo}`;
  for(let i=randomNo;i<6;i++){
    dice[i].classList.add("invisible");
  }
}

btn.addEventListener("click",generateNo);





