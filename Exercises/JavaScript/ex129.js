function printReverse(givenArray)
{
  console.log("\n\nReverse Array :\n")
  for(var i = givenArray.length -1 ; i>=0; i--)
  {
    console.log(givenArray[i]);
  }
}

function isUniform(givenArray)
{
  var flag = 0;
  for(var i=0; i < givenArray.length-1; i++)
  {
    if(givenArray[i] != givenArray[i+1])
    {
      flag++;
    }
  }
  if(flag == 0)
  {
    console.log("True");
  }
  else
  {
    console.log("False");
  }
}

function sumArray(givenArray)
{
  var totalSum = 0;
  for(var i =0; i < givenArray.length; i++)
  {
    totalSum = totalSum + parseInt(givenArray[i]);
  }
  console.log("Total Sum : "+totalSum);
}

function max(givenArray)
{
  var maxInt = parseInt(givenArray[0]);
  for(var i=0; i < givenArray.length; i++)
  {
    if(parseInt(givenArray[i]) > maxInt)
    {
      maxInt = givenArray[i];
    }
  }
  console.log("Max Number : "+maxInt);
}

var array = []
while(true)
{
  var temp = prompt("Input For Array");
  if(temp === "done")
  {
    break;
  }
  else
  {
    array.push(temp);
  }

}

while(true)
{
  var choice = prompt("Enter Your Choice:\n1.printReverse\n2.isUniform\n3.sumArray\n4.max");

  if(choice == 1)
  {
    console.log(array)
    printReverse(array);
    console.log("\n\n");
  }

  else if(choice == 2)
  {
    console.log(array);
    isUniform(array);
    console.log("\n\n");
  }

  else if(choice == 3)
  {
    console.log(array);
    sumArray(array);
    console.log("\n\n");
  }

  else if(choice == 4)
  {
    console.log(array);
    max(array);
    console.log("\n\n");
  }

  else if(choice === "exit")
  {
    break;
  }
}
