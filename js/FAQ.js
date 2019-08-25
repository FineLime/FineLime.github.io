//Answers to appear when you click "+"
var answers = [

	"LimeBot is currently private, but I'll make it public once I add more features and it's more user friendly!", 
	"Coins are currently unobtainbable but I'll be adding ways to get coins in the future", 
	"Possibly, just join our <a href='https://discord.gg/r5NmHjB' target='_blank'>discord server</a> or use ;suggest [suggestion] and I may consider adding it!", 
	"Currently there are no error messages so that's why it may say nothing, if a command is not working you are either not using it correctly or either you or the bot doesn't have perms to use the comamnd. Make sure to read <a href='docs.html'>the docs.</a>",
	"The prefix is a semi-colon (;)", 
	"Uufortunately not, this is also not a feature that is planning to be added in the future",
	"A help command will be added soon, in the meantime just check out <a href='docs.html'>the docs</a> for a list of commands and how to use them!", 
	"You can't delete them right now, though I will hopefully be added the ability to in the future, in the meantime you are able to remove the reaction from the message.",
	"Yes, the bot is open source! You can find the code <a href='https://github.com/FineLime/TestingLimeBot' target='_blank'>here.</a>"
	"Yep, the bot is online 24/7 as it is hosted on Heroku!"
	"Sorry I couldn't answer your question(s) here, join our <a href='https://discord.gg/r5NmHjB' target='_blank'>discord server</a> and ask your questions there!"
	
];

//Show/hide the answer
var showfunc = function(what) { 
	
	//Get the answer using the elements id (minus 1 as arrays start from 0
	var answer = answers[Number(what.id.substring(4, 10))-1];
	
	//Get the answer element in the webpage
	var htmlanswer = document.getElementById("answer"+what.id.substring(4, 10));
	
	//If the answer elemenet has content, remove it.
	if(htmlanswer.innerHTML !== "") {
		htmlanswer.innerHTML=""; 
		what.innerHTML = "+";
	}
	
	//Else add the answer
	else {
		htmlanswer.innerHTML = answer; 
		what.innerHTML = "-";
	}
	
};
