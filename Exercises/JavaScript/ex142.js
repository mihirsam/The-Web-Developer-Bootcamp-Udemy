//var body1 = document.querySelector("body");
//var body = getElementsByTagName('body')
var flag1 = 1, flag2=0, flag3=0;

function blink3Colors()
{
  var body1 = document.querySelector("body");
  if(flag1 == 1 && flag2 == 0 && flag3 == 0)
  {
    body1.style.background = "#FF0000";
    flag1 = 0;
    flag2 = 1;
  }

  else if(flag1 == 0 && flag2 == 1 && flag3 == 0)
  {
    body1.style.background = "#191970";
    flag2 = 0;
    flag3 = 1;
  }

  else if(flag1 == 0 && flag2 == 0 && flag3 == 1)
  {
    body1.style.background = "#FFFF00";
    flag3 = 0;
    flag1 = 1;
  }
}

setInterval(function() { blink3Colors(); }, 1000);
