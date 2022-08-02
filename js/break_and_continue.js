(function() {
  //Create variable to hold the user input
  var userInput = 0;

  //The while loop verifies that user entered a negative number
  while (true) {
    userInput = Number(prompt("Enter an odd number between 1 and 50"));
    if (userInput % 2 !== 0)
      break;
  }

  //This loop print all odd number through 50 excluding the user input
  for (var i = 1; i < 51; i++) {

    //This checks the index again the user input to continue the loop
    if (i === userInput)
      continue;
    //This checks for odd number to print to the console
    if (i % 2 !== 0) {
      console.log(`Here is an odd number: ${i}`);
    }
  }

})()
