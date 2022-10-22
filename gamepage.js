// random value generated
  
// counting the number of guesses
// made for correct Guess

  
// function for number guessed by user   

var y = Math.floor(Math.random() * 10 + 1);

var guess = 1;
var x = 0;
function submit() {
     x = document.getElementById("guessField").value;
}



if(x==y)
{
    alert("CONGRATULATION!!!"+playername+" YOU GUESSED IT RIGHT IN " + guess + "GUESS");
    guess = 1; 
}

else if(x > y)
{
    guess++;
    alert("OOOPS Sorry!! TRY A SMALLER NUMBER")
}
else
{
    guess++;
    alert("OOOPS Sorry!! TRY A GREATER NUMBER")
}

function playAgain() {
    y = Math.floor(Math.random() * 10 + 1);
}


