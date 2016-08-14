function userPrompt () {
var userChoice = prompt("Do you choose rock, paper or scissors?");
return userChoice;
}

var userChoice = userPrompt();
var a = "rock";
var b = "paper";
var c = "scissors";
if (userChoice !== a && userChoice !== b && userChoice !== c) {
	alert("This is an invalid choice. Please try again.");
	//run this prompt again and assign me a new result one more time
	userChoice = userPrompt();
}

var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);
function compare (choice1, choice2) {
if (choice1 == choice2) {
    return "The result is a tie! We are all winners! #narf"
}
else if (choice1 == "rock") {
    if (choice2 === "scissors") {
        return "rock wins"
    }
    else {
     return "paper wins";
    }
}
else if (choice1 === "paper") {
    if (choice2 === "rock") {
        return "paper wins";
    }
    else {
        return "scissors wins"
    }
}
else if (choice1 === "scissors") {
	if (choice2 == "paper") {
		return "scissors wins";
	}
	else {
		return "rock wins";
	}
}
}
compare(userChoice, computerChoice);

