var teamA=0, teamB=0, three=3, two=2, free=1;
var teamFlag=0, colorCount=0;

var body = document.querySelector("body");
var h1 = document.querySelectorAll("h1");
var button = document.querySelectorAll("button");

var colors = ["#F00000", "#BD0035", "#AE0044", "#9C0056", "#8B0067", "#6A006C", "#460071", "#2A0076", "#000080", "#003073", "#004A65", "#00584C", "#008000", "#4EAD00", "#8BBC00", "#B9D000", "#F7EB00", "#F5B000", "#F48400", "#F36300","#F24A00", "#F13700", "#F11F00", "#F11100"];


function colorCycle()
{
  if(colorCount == 23)
  {
    colorCount = 0;
  }
  else
  {
    body.style.background = colors[colorCount];
    colorCount++;
  }
}

function addThree()
{
  if(teamFlag == 1)
  {
    teamA = teamA + three;
    h1[1].textContent = teamA;
  }
  else
  {
    teamB = teamB + three;
    h1[2].textContent = teamB;
  }
}

function addTwo()
{
  if(teamFlag == 1)
  {
    teamA = teamA + two;
    h1[1].textContent = teamA;
  }
  else
  {
    teamB = teamB + two;
    h1[2].textContent = teamB;
  }
}

function addOne()
{
  if(teamFlag == 1)
  {
    teamA = teamA + free;
    h1[1].textContent = teamA;
  }
  else
  {
    teamB = teamB + free;
    h1[2].textContent = teamB;
  }
}

function resetScore()
{
  teamFlag = 0;
  teamA = 0;
  teamB = 0;
  h1[1].textContent = teamA;
  h1[2].textContent = teamB;
}

button[0].addEventListener("click", function(){
  teamFlag = 1;
  addThree();
});

button[1].addEventListener("click", function(){
  teamFlag = 2;
  addThree();
});

button[2].addEventListener("click", function(){
  teamFlag = 1;
  addTwo();
});

button[3].addEventListener("click", function(){
  teamFlag = 2;
  addTwo();
});

button[4].addEventListener("click", function(){
  teamFlag = 1;
  addOne();
});

button[5].addEventListener("click", function(){
  teamFlag = 2;
  addOne();
});

button[6].addEventListener("click", resetScore);
setInterval(colorCycle, 80);
