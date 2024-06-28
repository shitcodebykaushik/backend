const express = require ("express");
const app = express ();
const PORT = 7000;
















app.use(function(err,res,next){
    res.servertatus(500);
    res.send("The server is under maintaince");

});

app.listen(7000);