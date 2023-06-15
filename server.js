
const express = require("express");
const app = express();

app.get("/tyler", (req, res)=>{
    res.send("Hello Tyler! You LOSER!!!")
})

app.get('/christopher', (req,res) => {
    res.send("Hello Christopher Keej Vang")
});

app.get('/caroline', (req,res) => {
    res.send("Hello Caroline Kay Comin!!!! :)")
});

app.get('/jose', (req,res) => {
    res.send("Hello Jose Lisandro Machuca!!!! :)")
});

app.get('/ricky', (req,res) => {
    res.send("Hello Cheemeng 'Ricky' Vang")
});

app.get('/bh/:friend', (req,res) => {
    res.send("Hello from Brother Hamilton to " + req.params["friend"] + " with id = " + req.query.id + " name = " + req.query.name)
});

app.get("/", (req, res)=>{
    
    res.send("Welcome to my backend API! Loser!!!")
})

app.listen(3000, ()=> {

    console.log("Listening");
})
