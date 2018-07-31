const express = require("express");
//import express from "express"

const bodyParser = require("body-parser");
//import bodyParser from "body-parser"

const salesForce = require("./config/salesforce");

const PORT = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));
//let express use public folder

const users = [];

//app.get("/api/users", (req, res) => res.json(users));
//defining the endpoint. get post. geting json from res.json empty array

app.get("/api/users", (req, res) => {
    salesForce.query(`SELECT id, Name FROM Tiny_Improvements_User__c`).then((data) => {
        // return all of the fields from the object users in SalesForce
        res.json(data.records.map(record => record._fields))
        //console.log(data.records.map(record => record))
    });
});

//app.post("api/users", (req, res) => console.log("we want to create"));
//posting

const awards = [];

app.get("/api/kudos", (req, res) => {
    salesForce.query(`SELECT id, Name, Comment__c, Receiver__c, Sender__c FROM Kudos__c`).then((data) => {
        // return all of the fields from the object Kudos in SalesForce
        res.json(data.records.map(record => record._fields))

    });
});

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
