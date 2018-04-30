var moviesArray = [];
var flag = 0

function enterMovies(moviesArray, flag)
{
  var tempName = prompt("Enter The Movie Name");
  var tempRating = prompt("Enter The Rating");
  var tempHasWatched = prompt("Have You Watched This Movie");

  moviesArray[flag] =
  {
    name: tempName,
    rating: tempRating,
    hasWatched: tempHasWatched
  };
  flag ++;

  return moviesArray, flag;
}

function showMovies(moviesArray, flag)
{
  console.log("Entered Movies Are : \n\n");

  for(var i=0; i < flag; i++)
  {
    console.log("Name : "+moviesArray[i].name+"\nRating : "+moviesArray[i].rating+"\nWatched : "+moviesArray[i].hasWatched+"\n\n");
  }
}

function showResults(moviesArray, flag)
{
  console.log("Results:\n\n");
  for(var i=0; i<flag; i++)
  {
    if(moviesArray[i].hasWatched == "true" || moviesArray[i].hasWatched == "yes")
    {
      console.log("You have watched the movie "+moviesArray[i].name+" - "+moviesArray[i].rating+" Stars");
    }
    else
    {
      console.log("You have not watched the movie "+moviesArray[i].name+" - "+moviesArray[i].rating+" Stars");
    }
  }
}

while(true)
{
  var choice = prompt("Enter The Choice :\n1. Enter Movies Details\n2. Show Movies \n3. Show Results \n4. Exit");

  if(choice == 1)
  {
    moviesArray, flag = enterMovies(moviesArray, flag);
  }

  else if(choice == 2)
  {
    showMovies(moviesArray, flag);
  }

  else if(choice == 3)
  {
    showResults(moviesArray, flag);
  }

  else if(choice == 4 || choice =="exit")
  {
    console.log("Bye Bye!");
    break;
  }

  else
  {
    console.log("Invalid Input!");
  }
}
