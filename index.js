var randomNumber1=Math.floor(Math.random()*6)+1;
var imagename1="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src", imagename1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var imagename2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", imagename2);

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 wins";
} else if (randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 wins";
} else if (randomNumber1==randomNumber2){
  document.querySelector("h1").innerHTML="Draw";
}
