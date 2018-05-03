var flag1=1, flag2=2, flag3=3;

function blinkTrain()
{
  var h1 = document.querySelector("h1");
  var h3First = document.getElementsByTagName("h3")[0];
  var h3Sec = document.getElementsByTagName("h3")[1];
  var classArr = ["one", "two", "three"];

  if(flag1 == 1 && flag2 == 2 && flag3 ==3)
  {
    h1.classList.toggle(classArr[1]);
    h3First.classList.toggle(classArr[2]);
    h3Sec.classList.toggle(classArr[0]);

    flag1 = 2;
    flag2 = 3;
    flag3 = 1;
  }

  else if(flag1 == 3 && flag2 == 1 && flag3 == 2)
  {
    h1.classList.toggle(classArr[0]);
    h3First.classList.toggle(classArr[1]);
    h3Sec.classList.toggle(classArr[2]);

    flag1 = 1;
    flag2 = 2;
    flag3 = 3;
  }

  else if(flag1 == 2 && flag2 == 3 && flag3 ==1)
  {
    h1.classList.toggle(classArr[2]);
    h3First.classList.toggle(classArr[0]);
    h3Sec.classList.toggle(classArr[1]);

    flag1 = 3;
    flag2 = 1;
    flag3 = 2;
  }

  else{
    console.log("ERROR!");
  }
}


setInterval(function() { blinkTrain(); }, 1000);
