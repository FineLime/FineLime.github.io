//Answers to appear when you click "+"
var answers = [

	"Coins are currently unobtainbable but I'll be adding ways to get coins in the future", 
	"Possibly, just join our <a href='https://discord.gg/BTDzs9G' target='_blank'>discord server</a> and send your suggestions!", 
	"Currently there are no error messages so that's why it may say nothing, if a command is not working you are either not using it correctly or either you or the bot doesn't have perms to use the comamnd. Make sure to read <a href='docs.html'>the docs.</a>",
	"The prefix is a semi-colon (;) or you can mention the bot.", 
	"Not at the moment.",
	"Yes, the bot is open source! You can find the code <a href='https://github.com/FineLime/TestingLimeBot' target='_blank'>here.</a>",
	"Yep, the bot is online 24/7 as it is hosted on Heroku!",
	"Sorry I couldn't answer your question(s) here, join our <a href='https://discord.gg/BTDzs9G' target='_blank'>discord server</a> and ask your questions there!"
	
];

//Show/hide the answer
var showfunc = function(what) { 
	
	checking = document.getElementsByClassName('Question')
	checking = [].slice.call(checking);
	for (let i = 0; i < checking.length; i++) {
		
		checking[i] = checking[i].children[2];	
		
	}
	console.log(checking.indexOf(what))
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
