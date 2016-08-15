var bestCity = prompt("What is the best borough in NYC to live in?");

switch(bestCity)
{
    case 'Brooklyn', 'brooklyn':
        console.log("Obviously, this is the best answer!");
        break;
    case 'Queens', 'queens':
        console.log("I don't know much about that borough.");
        break;
    case 'Manhattan', 'manhattan':
        console.log("Eh, too over-priced methinks.");
        break;
    case 'Bronx', 'bronx':
        console.log("If you are ok with up-and-coming neighborhoods...");
        break;
    default:
        console.log("You might as well live in Staten Island.");
        break;
}

