require("dotenv").config();

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
    salesForce.query(`SELECT id, Name FROM Tiny_Improvements_User__c ORDER BY Name ASC`).then((data) => {
        //salesForce.query(`SELECT id, Name FROM Tiny_Improvements_User__c`).then((data) => {
        // return all of the fields from the object users in SalesForce
        res.json(data.records.map(record => record._fields))
        //console.log(data.records.map(record => record))
    });
});


const awards = [];

app.get("/api/kudos", (req, res) => {
    salesForce.query(`SELECT Id, Name, Comment__c, Receiver__r.Name, Sender__r.Name, createddate FROM Kudos__c ORDER BY createddate ASC`).then((data) => {
        //salesForce.query(`SELECT Id, Name, Comment__c, Receiver__r.Name, Sender__r.Name, createddate FROM Kudos__c`).then((data) => {
        // salesForce.query(`SELECT Id, Name, Comment__c, Receiver__r.Name, Sender__r.Name FROM Kudos__c`).then((data) => {
        // return all of the fields from the object Kudos in SalesForce
        res.json(data.records.map(record => record._fields))

    });
});

// app.get("/api/createddates", (req, res) => {
//     salesForce.query(`SELECT createddate, COUNT(createddate) FROM Kudos__c GROUP BY createddate ORDER BY createddate ASC`).then((data) => {
//         // salesForce.query(`SELECT Id, Name, Comment__c, Receiver__r.Name, Sender__r.Name FROM Kudos__c`).then((data) => {
//         // return all of the fields from the object Kudos in SalesForce
//         res.json(data.records.map(record => record._fields))

//     });
// });


app.post("/api/kudos", (req, res) => {
    salesForce.createKudos(req.body).then(() => {
        res.json({ success: true })
        console.log("----THE REQUEST BODY-------------------------------");
        console.log(req.body);
        console.log("-----------------------------------");
        //awards.push(req.body);
        //res.json(awards)
    });
})


// app.post("/api/kudos", (req, res) => {
//     console.log("----THE REQUEST BODY-------------------------------");
//     console.log(req.body);
//     console.log("-----------------------------------");
//     //awards.push(req.body);
//     //res.json(awards)
// });




app.listen(PORT, function () {
    console.log(`We are connected 🌎 on PORT ${PORT}`);
});
