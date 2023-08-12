function btn()
{
var num1=Math.random();
num1=(num1*6);
num1=Math.floor(num1)+1;

var num2=Math.random();
num2=(num2*6);
num2=Math.floor(num2)+1;

var str1="images/dice"+num1+".png";
var str2="images/dice"+num2+".png";

document.querySelectorAll("img")[0].setAttribute("src",str1);
document.querySelectorAll("img")[1].setAttribute("src",str2);

if(num1>num2)
document.querySelector("h1").innerHTML="Player 1 WINS!!";
else if(num1<num2)
document.querySelector("h1").innerHTML="Player 2 WINS!!";
else
document.querySelector("h1").innerHTML="DRAW!!";
}

function reset()
{
    document.querySelectorAll("img")[0].setAttribute("src","images/dice6.png");
    document.querySelectorAll("img")[1].setAttribute("src","images/dice6.png");
    document.querySelector("h1").innerHTML="THE DICEE GAME";
}