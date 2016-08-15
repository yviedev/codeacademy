var user = prompt("What do you want to do today? Choose: park, sleep, movies.").toLowerCase();
var shade;
var water;
var rain;
var umbrella;

switch(user)
{
    case 'park':
        shade = prompt("Can we sit in the shade?").toLowerCase;
        if (shade === "yes")
        {
            console.log("Ok, this sounds like a plan.");
            break;
        }
        else
        {
            water = prompt("I don't know. Will you bring water?").toLowerCase;
            if (water === "yes")
                {
                    console.log("Ok, let's go!");
                    break;
                }
            else
            {
                console.log("It's too hot to be outside all day. I'm gonna pass.");
                break;
            }
        }            
        break;
    case 'sleep':
        var moreSleep = prompt("Did you get enough sleep last night?").toLowerCase();
        var takeOut = prompt("Do you want to order from Seamless?").toLowerCase();
        if (moreSleep === 'yes' || takeOut === 'yes')
        {
        	console.log("Ok, Netflix & Chill?");
        }
        else
        {
        	console.log("Ok, ttyl.");
        }
        break;
    case 'movies':
    	rain = prompt("Is it going to rain today?").toLowerCase();
    	umbrella = prompt("Can you bring an umbrella?").toLowerCase();
    	if (rain === 'yes' && umbrella === 'yes')
    	{
        console.log("Great choice! I know exactly what I want to see.");
    	}
    	else
    	{
    		console.log("The weather is not going to cooperate today. I'm gonna pass.");
    	}
    		break;
    default:
        console.log("I guess you want to sit around all day and do nothing.");
        break;
}