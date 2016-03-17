var express = require("express");
var app = new express();

app.get("/",function(req,res){
   res.send("ROOT says - Welcome"); 
});


var greetings = {title:"Hello in different languages", hellos: ["HELLO","HOLA","BONJOUR","CIAO"]};

var html = "<h1>"+greetings.title+"</h1>"
html += "<ul>"
for(var i=0; i<greetings.hellos.length; i++) {
    html += "<li>" + greetings.hellos[i] +"</li>"    
}
html += "</ul>"

app.get("/sayhello",function(req,res){
   res.send(html); 
});

var port = process.env.PORT || 8080
app.listen(port);
console.log(" Hello Server Up and Running on port : " + port);