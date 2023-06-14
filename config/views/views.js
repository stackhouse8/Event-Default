const express = require('express');
const path = requre('path');

//this sets up the express app

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname,'public')));

//Home page 

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'public','index.html'));

});

//About page

app.get('/about',(req,res) => {
    res.sendFile(path.join(__dirname,'public','about.html'));
});

//Contact page

app.get('/Contact',(req,res) => {
    res.sendFile(path.join(__dirname,'public','Contact.html'));

});

//Search Form submission 

app.post('/search',(req,res) => {


const searchQuery =req.body.search;

res.render('search-results',{ results });
});

//Starts the server to begin listening 

app.listen(PORT,()=> {
    console.log('Server listening on:http://local host'+PORT);
});
