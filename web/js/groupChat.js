var groupFB = new Firebase("https://radiant-torch-1512.firebaseio.com/chatapp/msgs/group")

//Adds open groups to appGroups div
function getGroupChat(name){
    var userGroupFB = usersFB.child(name);
    userGroupFB.once("value", function(snapshot){

        console.log(snapshot);
        console.log(snapshot.val());

        user = snapshot.val()

        //Checks for any groups that the user has
        if(user.groups != null){
            groups = user.groups;

            //Goes through the groups and adds each one to the appGroups div
            for(var x = 0;x < groups.length(); x++){
                $("appGroups").append("<div class='groupSelector' onClick='openGroup(" + groups[x] + ")'>Group " + x + "</div>");
            }
        }
        //Shows the user they have no groups
        else{
            $("#appGroups").append("<h2>You have no groups</h2>");
        }
    });
}

//Function to load the group chat into the web page. group should be a string
function openGroup(group){

    //Appends the div onto appGroups. It will then become draggable
    $("#appGroups").append("<div id='groupChat" + group +"' style='border: 2px black solid;'><h3>Group " + group + "</h3><textarea id='msg-" + group + "' placeholder='Message' rows='5'></textarea><br><button onClick='sendGroupMsg(" + group +")'>Send message</button><br><div id='msgRead-" + group + "'></div></div>");
    $(".groupChat" + group).draggable();

    groupChatFB = groupFB.child(group);

    //Updates messages when new one is added and upon initiation
    groupChatFB.on("child_added", function(snapshot){
        newMsg = snapshot.val();

        //Prepends messages in group thread to start of messgae box
        $("#msgRead-" + group).prepend("<p><b>" + newMSG.author + " :</b> " + newMSG.message + "</p>");
    });
}


//Function to send message to a private group. group should be a string
function sendGroupMsg(group){
    sendGroupFB = groupFB.child(group);
    msgSend = $("#groupMsg-" + group).val();
    author = $("#name").val();

    sendGroupFB.push({
        author : author,
        msg : msgSend
    });

    $("#groupMsg-" + group).val("");
}
