var colorList = ["#F00000", "#BD0035", "#AE0044", "#9C0056", "#8B0067", "#6A006C", "#460071", "#2A0076", "#000080", "#003073", "#004A65", "#00584C", "#008000", "#4EAD00", "#8BBC00", "#B9D000", "#F7EB00", "#F5B000", "#F48400", "#F36300","#F24A00", "#F13700", "#F11F00", "#F11100"];


function getRandomColor(mode)
{
  var arr = [];
  var r=0, g=0, b=0;

  for(var i=0; i<mode; i++)
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

var pickedColor = '';
var colorTile = document.querySelectorAll(".colorTile");
var button = document.querySelectorAll("button");
var em = document.querySelectorAll("em");
var h1 = document.querySelectorAll("h1");
var mode = 6, colorCount = 0, indexCount = 0;
var indexList = [];
var body = document.querySelector("body");

function newGame()
{
  var colors = getRandomColor(mode);
  pickedColor = colors[pickColor(colors)];
  console.log(pickedColor);
  console.log(colors);

  var rgbDisplay = document.querySelector("#rgbDisplay");

  rgbDisplay.textContent = pickedColor;
  for(var i=0; i<colorTile.length; i++)
  {
    colorTile[i].style.backgroundColor = colors[i];
    colorTile[i].addEventListener("click", function()
    {
      console.log(pickedColor);
      if(pickedColor === this.style.backgroundColor)
      {
        h1[1].textContent = "Correct";
        em[0].textContent = "Play Again?";

        if(mode == 3)
        {
          for(var j=0; j<3; j++)
          {
            colorTile[j].style.backgroundColor = this.style.backgroundColor;
          }
        }

        else
        {
          for(var j=0; j<colorTile.length; j++)
          {
            colorTile[j].style.backgroundColor = this.style.backgroundColor;
          }
        }
      }

      else{
        h1[1].textContent = "Incorrect";
        //indexList[indexCount] = i;
        //indexCount++;
      }
    });
  }
}

function colorCycle()
{
  if(colorCount == colorList.length)
  {
    colorCount = 0;
  }
  else
  {
    body.style.backgroundColor = colorList[colorCount];
    em[0].style.color = colorList[colorCount];
    em[1].style.color = colorList[colorCount];
    em[2].style.color = colorList[colorCount];

    for(var i=0; i<indexList.length; i++)
    {
      colorTile[indexList[i]].style.backgroundColor = colorList[colorCount];
    }
    colorCount++;
  }
}

newGame();

button[0].addEventListener("click", function(){
  h1[1].textContent = "Click On Tile";
  em[0].textContent = "New Game";
  indexList = []
  indexCount = 0;

  if(mode == 3)
  {
    for(var j=3; j<colorTile.length; j++)
    {
      indexList[indexCount] = j;
      indexCount++;
    }
  }

  newGame();
});

button[1].addEventListener("click", function(){
  h1[1].textContent = "Click On Tile";
  em[0].textContent = "New Game";
  mode = 3;
  indexList = []
  indexCount = 0;
  for(var j=3; j<colorTile.length; j++)
  {
    indexList[indexCount] = j;
    indexCount++;
  }

  newGame();
});

button[2].addEventListener("click", function(){
  h1[1].textContent = "Click On Tile";
  em[0].textContent = "New Game";
  mode = 6;
  indexList = []
  indexCount = 0;

  newGame();
});

setInterval(colorCycle, 100);
