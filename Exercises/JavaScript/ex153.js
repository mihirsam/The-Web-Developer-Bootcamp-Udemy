var colors = ["#0af5fa", "#0ab1fa", "#0a3efa", "#560afa", "#b70afa", "#fa0ad9", "#fa0a65", "#fa0a1e", "#fa5e0a", "#facc0a", "#cbfa0a", "#69fa0a", "#0afa1b", "#0afa77", "#0afae5", "#0a8efa"];

var flag=0, blinkCount=0;

function blink()
{
  if(blinkCount==15)
  {
    blinkCount = 0;
    blink();
  }

  else
  {
    var h1 = document.querySelector("h1");
    var body = document.querySelector("body");

    h1.style.color = colors[blinkCount];
    body.style.background = colors[blinkCount];
    blinkCount++;
  }
}

var button = document.querySelector("button");
button.addEventListener("click", blink);
