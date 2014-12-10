var usersFB = new Firebase("https://radiant-torch-1512.firebaseio.com/chatapp/users");

var login = function(){
	var userName = $("#loginName").val();
	var userPassword = $("#loginPassword").val();

	console.log(userName);
	console.log(userPassword);

	var loginFB = usersFB.child(userName);

	loginFB.once("value", function(snapshot){
		loginData = snapshot.val();

		console.log(loginData);

		if(loginData === null){
			invalid("username");
			return;
		}
		if(loginData.password !== userPassword){
			invalid("password");
			return;
		}
		if(loginData.userName === userName && loginData.password === userPassword){
			$("#loginTxt").slideUp();
			$("#login").slideUp();
			$("#name").val(userName);
			alert("Login succesful");
			$("#logout").slideDown();
			$("#app").slideDown();
                        loggedIn = true;
		}
	});
};

var invalid = function(problem){
	alert("The login failed. The " + problem + " was invalid.");
	console.log("failed");
};


$(document).ready(function(){
	$("#app").hide();
        console.log("hidden");
});
	