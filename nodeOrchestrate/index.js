// validating and accessing the orchestrate database
var token = "a4dbdcb9-59c7-4f00-a2ea-e151eb441150";
var db = require("orchestrate")(token);

var name = "testName";
var age = 9001;

db.put("users",name,{
    "name":name,
    "age":age,
});
