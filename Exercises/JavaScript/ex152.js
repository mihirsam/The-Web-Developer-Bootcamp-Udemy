console.log("JS connected !");
var flag = 0, blinkCount = 0, imgCount = 3;

var colors = ["#0af5fa", "#0ab1fa", "#0a3efa", "#560afa", "#b70afa", "#fa0ad9", "#fa0a65", "#fa0a1e", "#fa5e0a", "#facc0a", "#cbfa0a", "#69fa0a", "#0afa1b", "#0afa77", "#0afae5", "#0a8efa"];

function blink()
{
  if(blinkCount==15)
  {
    blinkCount = 0;
    blink();
  }

  else
  {
    var h1 = document.querySelectorAll("h1");
    var img = document.querySelectorAll("img");

    h1[0].style.color = colors[blinkCount];
    h1[1].style.color = colors[blinkCount];
    img[imgCount].style.background = colors[blinkCount];
    blinkCount++;
  }
}

function firstClick()
{
  if(flag == 0)
  {
    var h1 = document.querySelectorAll("h1");
    h1[1].textContent = "You Choose Bulbasaur";
    flag++;
    imgCount = 0;
    setInterval(blink, 200);
  }
}

function secondClick()
{
  if(flag == 0)
  {
    var h1 = document.querySelectorAll("h1");
    h1[1].textContent = "You Choose Charmander";
    flag++;
    imgCount = 1;
    setInterval(blink, 200);
  }
}

function thirdClick()
{
  if(flag == 0)
  {
    var h1 = document.querySelectorAll("h1");
    h1[1].textContent = "You Choose Squirtle";
    flag++;
    imgCount = 2;
    setInterval(blink, 200);
  }
}

setInterval(blink, 100);
var img = document.querySelectorAll("img");
img[0].addEventListener("click", firstClick);
img[1].addEventListener("click", secondClick);
img[2].addEventListener("click", thirdClick);
