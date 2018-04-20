var todoList = []
while(true)
{
  var choice = prompt("Enter The Choice");
  if(choice == "new")
  {
    var newEvent = prompt("What You Want To Do ?");
    todoList.push(newEvent);
    console.log(newEvent + " Has Been Added To The List.")
  }

  else if(choice == "list")
  {
    console.log("\n\nTO DO List : ")
    for(var i=0; i < todoList.length; i++)
    {
        console.log("["+i+"] : "+todoList[i]);
    }
    console.log("\n\n")
  }

  else if (choice == "delete")
  {
    var index = prompt("Enter The Index To Delete The Event")
    if(index < todoList.length)
    {
      console.log("\n\n"+todoList[index] + " Has Been Removed From The List.")
      todoList.splice(index, 1)
    }
    else
    {
      console.log("Invalid Index")
    }

  }
  else if (choice == "exit")
  {
    console.log("\n\nBye!")
    break;
  }
  else
  {
    console.log("Invalid Input");
  }
}
