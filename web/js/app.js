var FB = new Firebase("https://radiant-torch-1512.firebaseio.com/chatapp/msgs");
var sound = new Audio("Assets/newMsgSound.wav");
var loggedIn = false;

var sendMsg = function(){
	var author = $("#name").val();
	var messageSend = $("#msg").val();

        if(messageSend == "" || messageSend == "/n"){
                return;
        }

	FB.push({
		author : author,
		message : messageSend
		}
	);
	$("#msg").val("");
}

FB.on('child_added', function (snapshot) {
	var newMSG = snapshot.val();
 	    
        $("#msgRead").prepend("<p><b>" + newMSG.author + " :</b> " + newMSG.message + "</p>");
})

$(document).keydown(function(e){
        if(loggedIn){	    
                if(e.which == 13){
		        sendMsg();	
	        }
        }
        else{
                if(e.which == 13){
                        login();
                }
        }
});
