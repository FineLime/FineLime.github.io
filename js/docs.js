//Modules to appear when you click "+"
var modules = ["l#purge {type} [amount] {text} - Delete x amount of messages based on the type given (contains, match, images), if any is given<br><br>l#purgeban {type} [amount] {text} - Same as above, but bans the user as well as deleting the message, allowing to easily ban raiders<br><br>l#ban [user] {reason} - Bans the user specified<br><br>l#kick [user] {reason} - Kicks the user specified",
	"l#autorole [add/remove] [role] - Add or remove an autorole to your server<br><br>l#createreactionrole [messageID] [role] [emoji] - Creates a new reaction role, must be used in the same channel as the message<br><br>l#deletereactionrole [messageID] [emoji] - Deletes the reaction role on a message, reactions will not be automatically removed<br><br>l#newemoji [name] **file** - Creates a new emoji with the name given and file sent<br><br>;listroles - List all roles in the server along with their ID<br><br>l#say [message] - Makes the bot send a message<br><br>l#ping - Responds with the bots ping", 
	"l#8ball [question] - Responds with a random answer to the question<br><br>l#coinflip - Flips a coin<br><br>;diceroll {amount} - Rolls a die, max amount will be 6 if an amount of sides is not specified<br><br>l#slots - Slots machine<br><br>l#launch {Launch Provider} - Gets the next launch, with a link if found. You can find the next launch by launch provider as well.",
	
];

//Show/hide the module
var showfunc = function(what) { 
	
	//Get the module using the elements id (minus 1 as arrays start from 0
	var module = modules[Number(what.id.substring(4, 10))-1];
	
	//Get the module element in the webpage
	var htmlmodule = document.getElementById("module"+what.id.substring(4, 10));
	
	//If the module elemenet has content, remove it.
	if(htmlmodule.innerHTML !== "") {
		htmlmodule.innerHTML=""; 
		what.innerHTML = "+";
	}
	
	//Else add the module
	else {
		htmlmodule.innerHTML = module; 
		what.innerHTML = "-";
	}
	
};
