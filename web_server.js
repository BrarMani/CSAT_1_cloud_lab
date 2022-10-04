var express = require("express");
const { fstat } = require("fs");
var app = express();

app.use(express.urlencoded());
var fs = require('fs');
var path=require("path");

var HTTP_PORT = process.env.PORT || 8080;

//call this function after the http server listing for requests
function onHttpStart(){
    console.log("Express http server listing on:" + HTTP_PORT);

}

app.get("/CreateAccount", function(req, resp){
    resp.sendFile(path.join(__dirname+"/view","/CreateAccount.html"));
});

//setup a 'route' to listen on the default url path(http://localhost)
app.post("/submit", function(req,res){
    let un = req.body.username;
    let pas = req.body.password;
    //res.send("Username:" +un+ "<br /> password=" +pas);

    fs.writeFile("database.txt",pas,err=>{
        if(err){
            console.error(err);
    
        }
    });
    
});

// setup another route to listen on/about
app.get("/about",function(req,res){
    res.send("<h3>About</h3>");
   

});
app. listen(8080, onHttpStart());
    