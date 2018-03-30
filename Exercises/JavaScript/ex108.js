console.log("Print all numbers between 10 and 19");

for(var i =10; i<20;i++)
{
  console.log(i);
}

console.log("Print all even numbers between 10 and 40");

for(i=10;i<=40;i++)
{
  if(i%2 ==0)
  {
    console.log(i);
  }
}

console.log("Print all odd numbers between 300 and 333");

for(i=300;i<=333;i++)
{
  if(i%2 == 1)
  {
    console.log(i);
  }
}

console.log("Print all the number divisible by 3 & 5 between 5 and 50")

for (i=5;i<=50;i++)
{
  if(i%3 == 0 && i%5 == 0)
  {
    console.log(i);
  }
}
