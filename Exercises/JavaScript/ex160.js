function getRandomColor()
{
  var arr = [];
  var r=0, g=0, b=0;
  var temp;

  for(var i=0; i<6; i++)
  {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);

    arr[i] = "rgb("+r+", "+g+", "+b+")";
  }

  return arr;
}

function pickColor(colors)
{
  var num = Math.floor(Math.random() * colors.length);
  return num;
}

function newGame()
{
  var colors = getRandomColor();
  var colorTile = document.querySelectorAll(".colorTile");
  var pickedColor = colors[pickColor(colors)];
  console.log(pickedColor);
  console.log(colors)
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

        for(var j=0; j<colorTile.length; j++)
        {
          colorTile[j].style.backgroundColor = this.style.backgroundColor;
        }

      }

      else{
        h1[1].textContent = "Incorrect";
        console.log(this.style.backgroundColor);
        this.style.backgroundColor = "black";
      }
    });
  }
}

newGame();

var button = document.querySelectorAll("button");
button[0].addEventListener("click", function(){
  var h1 = document.querySelectorAll("h1");
  h1[1].textContent = "Click On Tile"
  newGame();
});
