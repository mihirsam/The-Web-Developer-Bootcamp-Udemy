var num = prompt("Guess A Number !");

if(num >= 10 && num <= 20)
{
  alert("You have Passed !");
}

else if (num < 10) {
  alert("Number is too low !");
}

else if (num > 20) {
  alert("Number is high !");
}

else {
  alert("WTF was that ?!");
}
