var userAge = prompt("What is your age ?");
var temp = userAge;

while(temp != 0)
{
    if((temp * temp) == userAge)
    {
      console.log("Your birthday is perfect square of "+temp);
    }
    temp = temp - 1;
}

if(userAge < 18)
{
  console.log("Go home kid.");
}

else if (userAge % 2 == 1)
{
  if (userAge == 21)
  {
    console.log("Happy  21st birthday !");
  }

  console.log("Your birthday is odd.");
}



else if(userAge < 0)
{
  console.log("Age cannot be negative!");
}

else {
  console.log("Guess your age is even. ")
}
