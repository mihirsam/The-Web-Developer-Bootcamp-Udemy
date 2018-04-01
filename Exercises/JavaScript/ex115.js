  function isEven(num)
{
  if(num % 2 == 0)
  {
    alert("True");
    return true;
  }
  else{
    alert("False");
    return false;
  }
}

function factorial(num)
{
  if(num == 0)
  {
    alert("1");
    return 1;
  }
  else {
    var temp = 1;
    for(var i=1;i<=num;i++)
    {
      temp = temp * i;
    }
    alert(temp);
    return(temp);
  }
}

function kebabToSnake(num)
{
  var temp = 0;

  while(true)
  {
    temp = num.indexOf("-");
    num = num.replace(num.charAt(temp), "_");

    if(num.lastIndexOf("-") == -1)
    {
      break;
    }
  }

  console.log(num);
  alert(num);
  return(num);
}

while(true)
{
  var choice = prompt("1.Even Odd\n2.Factorial\n3.kebabToSnake\n4.Exit");

  if(choice.indexOf("exit") != -1)
  {
    break;
  }

  else if(choice == 1)
  {
    var num = prompt("Enter A Number : ");

    if(num.indexOf("exit") == -1)
    {
      isEven(num);
    }
    else {
      break;
    }
  }

  else if(choice == 2)
  {
    var num = prompt("Enter A Number : ");
    if(num.indexOf("exit") == -1)
    {
      factorial(num);
    }
    else {
      break;
    }
  }

  else if(choice == 3)
  {
    var num = prompt("Enter A Kebab String : ");
    kebabToSnake(num);
  }

  else if(choice == 4)
  {
    break;
  }

  else{
    alert("Invalid Input !");
    console.log("Invalid Input !");
  }

}
