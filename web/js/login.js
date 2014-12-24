var usersFB = new Firebase("https://radiant-torch-1512.firebaseio.com/chatapp/users");

var login = function(){
	//Gets the values for the user's name and password
	var userName = $("#loginName").val();
	var userPassword = $("#loginPassword").val();

	//Finds the username section in the login directory
	var loginFB = usersFB.child(userName);

	//Grabs the database snapshot once, instead of doing it every time it is changed
	loginFB.once("value", function(snapshot){
		loginData = snapshot.val();

		//Checks to see if the snapshot is null. If ir is, then the user does not exist
		if(loginData === null){
			invalid("username");
			return;
		}

		//Checks against the databaase snapshot that the password is valid
		if(loginData.password !== userPassword){
			invalid("password");
			return;
		}

		//Function in groupChat.js to get all group messages
		getGroupChat(userName);

		//Hides all of the login section
		if(loginData.userName === userName && loginData.password === userPassword){
			$("#loginTxt").slideUp();
			$("#login").slideUp();
			$("#name").val(userName);
			alert("Login succesful");
			$("#logout").slideDown();
			$("#appGlobal").slideDown();
			loggedIn = true;
		}
	});
};

//Alerts the user of any problems when logging in
var invalid = function(problem){
	alert("The login failed. The " + problem + " was invalid.");
	console.log("failed");
};


$(document).ready(function(){
	$("#appGlobal").hide();
});
