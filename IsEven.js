var isEven = function(number) {
  // Your code goes here!
  //if number is even => if the remainder of a number is zero.
  if ((number % 2) === 0)
  {
  	console.log("This number is even!");
    return true;
  }
  else if (isNaN(number))
  {
    //what is the diff between return and console.log?
    return("Please input a number");
  }
  else
  	console.log("This number is odd!");
    return false;
};
isEven(prompt("Please enter a number"));