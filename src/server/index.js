const express = require("express");
//import express from "express"

const bodyParser = require("body-parser");
//import bodyParser from "body-parser"

const PORT = process.env.PORT || 8000;
const app = express();





app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));
//let express use public folder

const users = [
    {
        userId: 45089,
        name: "Owen",
        position: "Captian of the Breakroom"
    },
    {
        userId: 223,
        name: "Brooke",
        position: "Winner of All Dance-Offs"
    },
    {
        userId: 6582,
        name: "Gobi",
        position: "King of Mid-Day Naps1"
    }
];

app.get("/api/users", (req, res) => res.json(users));
//defining the endpoint. get post. geting json from res.json empty array

app.post("api/users", (req, res) => console.log("we want to create"));
//posting

const awards = [
    {
        id: 1,
        title: "Best Boss Award!",
        comment: "Thanks for always looking out for us.",
        sender: "Fabian",
        receiver: "Leon"
    },
    {
        id: 2,
        title: "Longest Commute Award!",
        comment: "I can't believe Laura makes it to work as often as she does.",
        sender: "Archit",
        receiver: "Laura"
    },
    {
        id: 3,
        title: "Most likely to nap at work!",
        comment: "Maybe you need more coffee.",
        sender: "Gobi",
        receiver: "Owen"
    }

];
app.get("/api/awards", (req, res) => res.json(awards));

const friends = [
    {
        name: 'Annie Katz',
        location: 'Macon, GA'
    },
    {
        name: 'Alia Bisat',
        location: 'New York, NY'
    },
    {
        name: 'Dartaniel Bliss',
        location: 'Chicago, Il'
    },
    {
        name: 'Jacob Neuburger',
        location: 'Chicago, Il'
    },
    {
        name: 'Stacey Lockerman',
        location: 'Washington, DC'
    },
    {
        name: 'Weldon Ledbetter',
        location: 'Atlanta, GA'
    }
];



app.get("/api/friends", (req, res) => res.json(friends));

app.post("/api/kudos", (req, res) => {
    console.log("----THE REQUEST BODY-------------------------------");
    console.log(req.body);
    console.log("-----------------------------------");
    awards.push(req.body);
    res.json(awards)
});




app.listen(PORT, function () {
    console.log(`We are connected 🌎 on PORT ${PORT}`);
});
