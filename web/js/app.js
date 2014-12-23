var globalFB = new Firebase("https://radiant-torch-1512.firebaseio.com/chatapp/msgs/global");
var loggedIn = false;

//Function to send global message
var sendMsgGlobal = function(){
	//Gets author and message
	var author = $("#name").val();
	var messageSend = $("#msgGlobal").val();

    //Checks to see if message is blank or a carridge return - reduces spam
	if(messageSend == "" || messageSend == "/n"){
            return;
    }

	//Pushes data to firebase
	globalFB.push({
		author : author,
		message : messageSend
		}
	);

	//Makes the message blank
	$("#msgGlobal").val("");
}

//When a new child (message) is added...
globalFB.on('child_added', function (snapshot) {
	//Get the snapshot
	var newMSG = snapshot.val();

    //Prepend to top of message list
	$("#msgReadGlobal").prepend("<p><b>" + newMSG.author + " :</b> " + newMSG.message + "</p>");
})

//A function for when the return key is pressed
//ITS MESSY BUT IT DOES THE JOB. FIX IT LATER
$(document).keydown(function(e){
        //If you are logged in, send the current message
		if(loggedIn){
                if(e.which == 13){
		        sendMsgGlobal();
	        }
        }
        //Otherwise, attempt to login
		else{
                if(e.which == 13){
                        login();
                }
        }
});
