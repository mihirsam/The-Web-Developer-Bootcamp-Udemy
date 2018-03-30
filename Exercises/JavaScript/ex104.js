/* VERSION 1

while(1)
{
  var choice = prompt("Are we there yet ?");

  if(choice == "yes" || choice == "yeah")
  {
    alert("Yay! We made it !");
    break;
  }

}

*/

/*VERSION 2 (Not WOrking)

var choice = "nope";

while(choice != "yes" || choice != "yeah")
{
  var choice = prompt("Are we there yet ?");
}

*/


//VERSION 3

var choice = prompt("Are we there yet ?");

while(choice.indexOf("yes") == -1 )
{
  var choice = prompt("Are we there yet ?");
}
