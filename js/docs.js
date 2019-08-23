//Modules to appear when you click "+"
var modules = [";purge [Amount] - Deletes X amount of messages in the channel the command is used. (Requires both you and the bot to have manage messages)<br><br>;ban [user] (Reason) - Bans the user mentioned from the server, sends a message of the reason why to the user if given. (Requires both you and te bot to have permission to ban members)<br><br>;kick [user] (Reason) - Kicks he user mentioned from the server, sends a message of the reason why to the user if given. (Requires both you and te bot to have permission to kick members)",
	";createreactionrole [messageID] [roleID] [Emoji] - Creates a new reaction role so when people click on the reaction they get the role! (Requires you to permission to manage server and the bot to manage roles)<br><br>;listroles - Lists all the roles in the server with their role ID.<br><br>;newemoji [name] **file** - Creates a new emoji with the name given and file. (Requires both the user and bot to have manage emoji permissions)<br><br>;say [message] - Sends whatever you want it to say! (Requires you to have manage server permissions)<br>;muterole [role] - The bot will use the role given to mute people in the future. <br><br>;logschannel [channel] - Will use this channel to send logs to in the future.<br><br>;ping - Will respond with the bots ping.<br><br>;suggest [suggestion] - Will send your suggestion to me so I can improve LimeBot!", 
	";8ball [Question] - Replies with a random answer. (Try not to take the answers too seriously)<br><br>;coinflip - Replies with either heads or tails. <br><br>;slots - Runs a slot machine (1/64 chance on winning! GL)<br><br>;diceroll [number - default 6] - Returns a random number between 1 and the number given.<br><br>;rr - Random chance that if you use this command you get the server's muted role (if made) for 5 minutes. (Why do people want use this command)",
	";coins [user - default you] - Checks how many coins the user has!"
	
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