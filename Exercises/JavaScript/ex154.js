var teamA=0, teamB=0, three=3, two=2, free=1;
var teamFlag=0;

var h1 = document.querySelectorAll("h1");
var button = document.querySelectorAll("button");

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
