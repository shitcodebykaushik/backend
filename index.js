const express = require ("express");
const jwt =require("jsonwebtoken");
const app = express();
const jwtPassword = "12344";
app.use (express.json());
const All_USERS = [
    {

   username : "hakira@gmail.com",
   password:"123",
   name:"harkirat singh",
    },

    {
      username:"loyal@gmail.com",
      password:"323",
      name:"Kaushik", 
    },
];

function userExits (username,password) {
 let userExits =false;   // by default it is false  means that if the logic doesnt reach here then uit is false .
 for(let i =0;i<All_USERS.length; i++){
    if(All_USERS[i].username==username && All_USERS[i].password ==password){
        userExits =true;
    }
 }
 return userExits;
}

app.post("/signin",function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    if (!userExits(username,password)){
        return res.status(403).json ({
            msg:"User doesn't exit our memory db",
        });
    }
    var token = jwt.sign ({username:username},"jwtPassword");
    return res.json ({
     token,
    });
});

// sign in method  to verify the token .
app.get ("/users",function(req,res){
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, jwtPassword);
    const  username = decoded.username;
    //return a list of the user other then this username
    res.json({
        users:All_USERS

    })

});

app.listen(7000);

//Decoding need to be fix 





