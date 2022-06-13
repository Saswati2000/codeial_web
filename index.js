const express = require('express');
const app = express();
const port = 8000;



app.get('/', function(req,res){
    res.send( "<div><h1>Helio</h1><p>billa, billi khujche, chaile keu apply korte paren, mostly s diye naam er kau ke chai<3</p></div>");
})
    //return ',/h1>');
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server ${err}`);
    }
    console.log(`Server is running on ${port}`);


})