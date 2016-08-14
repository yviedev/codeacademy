(function(){
// Check if the user is ready to play!
confirm ("I am ready to play!");
// var age
var age = prompt ("What's your age?");
// if/else statement
if (age < 13) {
	console.log ("You are allowed to play, but I take no responsbility.");
	console.log ("Watch out for Bieber's hair though...");
}
else {
    console.log ("Thanks for your input! Let's keep going!")
}
//print out
console.log ("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
//story line
console.log ("Suddenly, Bieber stops and says, 'Who wants to race me?'");
//declare userAnswer variable
var userAnswer = prompt ('Do you want to race Bieber on stage?');
// if/else statement
if (userAnswer === "yes") {
    console.log ("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
}
else {
    console.log ("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
}
// var feedback
var feedback = prompt ('Rate my game out of 10');
if (feedback > 8) {
    console.log ("Thank you! We should race at the next concert!")
}
else {
    console.log ("I'll keep practicing coding and racing.")
}
})();