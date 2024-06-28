`JavaScript 
function calculateRequests(req,res,next) {
    numberOfRequests++;
    cosole.log(numberOfRequests);
    next(); // This is important else use function wont work .
 }
 // This is one of the famous middleware for the rate limiting,
`
- We can use `app.use(middleware_name)` To call oout the same things .
`js
const express = require ("express");
const app = express ();
const PORT = 7000;

app.use (express.json());  // This is kind of the middleware that use to 

app.post("/health-check",function(req,res){
    const kidneys = req.body.kidneys;
    const kidneysLength = kidneys.legth;
   
    res.send("You have " + kidneysLength+"kidney");
});


// This is global middelware that is use to error handling 
app.use(function(err,res,next){
    res.status(500)
    res.send("The server is under maintaince");

});

app.listen(7000);


`

# Authentication part jwt 
