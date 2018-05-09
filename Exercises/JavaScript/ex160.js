var colors = ["rgb(250, 250, 0)", "rgb(250, 250, 250)", "rgb(20, 250, 0)", "rgb(150, 150, 100)", "rgb(100, 150, 220)", "rgb(50, 50, 150)", "rgb(2,20,100)", "rgb(250, 0, 250)", "rgb(250, 0, 100)","rgb(250, 250, 0)", "rgb(0,0,0)"];

var colorTile = document.querySelectorAll(".colorTile");
var pickedColor = colors[5];
var rgbDisplay = document.querySelector("#rgbDisplay");
var h1 = document.querySelectorAll("h1");

rgbDisplay.textContent = pickedColor;

for(var i=0; i<colorTile.length; i++)
{
  colorTile[i].style.backgroundColor = colors[i];

  colorTile[i].addEventListener("click", function()
  {
    if(pickedColor === this.style.backgroundColor)
    {
      h1[1].textContent = "Correct";
    }

    else{
      h1[1].textContent = "Incorrect";
    }
  });
}
