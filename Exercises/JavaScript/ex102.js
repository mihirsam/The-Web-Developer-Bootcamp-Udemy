console.log("Q1. All numbers between 10 and 19 : ");
var i = 10;
while(i<20)
{
  console.log(i);
  i++;
}


i = 10;
console.log("Q2. Print all even numbers between 10 and 40");

while(i<=40)
{
  if(i % 2 == 0)
  {
    console.log(i);
  }
  i++;
}

i = 300
console.log("Q3. Print all odd numbers between 300 and 333");

while(i<=333)
{
  if(i % 2 == 1)
  {
    console.log(i);
  }
  i++;
}


i = 5;
console.log("Q4. Print all the number divisible by 5 and 3 between 5 and 50");

while(i<=50)
{
  if(i % 3 == 0 && i % 5 == 0)
  {
    console.log(i);
  }
  i++;
}
