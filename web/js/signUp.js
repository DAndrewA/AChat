var FB = new Firebase("https://radiant-torch-1512.firebaseio.com/chatapp/users");

var signUp = function(){
	var userName = $("#signupName").val();
	var userPassword = $("#signupPassword").val();

	var password2 = prompt("Please can you verify your password.")

	if(userPassword !== password2){
		alert("Your password has not been verified.");
		$("#signupPassword").val("");
		return;
	};

	var findUserRef = FB.child(userName);
	findUserRef.once("value", function(snapshot){
		var snap = snapshot.val();
		console.log(snap);

		if(snap === null){
			findUserRef.setWithPriority({
				userName : userName,
				password : userPassword
			}, userName);
			document.location.href = "chatApp.html";
			return;
		};

		alert("That user name has already been taken.")

	});
};
