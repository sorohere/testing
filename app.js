const express = require('express');
const path = require('path');
const {MongoClient} = require('mongodb');

const app = express();
const port = 8080;

const uri = "mongodb://127.0.0.1:27017/";

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.get('/insert', async (req, res) => {
    const {name, usn, marks} = req.query;
    marksvalue = parseFloat(marks);

    let client;

    try{
        client =  await MongoClient.connect(uri);
        const db = await client.db("student");
        const collection = await db.collection("studentinfo");

        await collection.insertOne({"name": name, "usn": usn, "marks": marksvalue});

        res.send(`<html><body>item added succesfully!<br><a href="/">back</a><br></body></html>`);
    }
    catch(err) {
        console.log("error: ", err);
    }
    finally{
        if(!client) {
            client.close();
        }
    }
});

app.get('/showall', async (req, res) => {
    let client;

    try{
        client =  await MongoClient.connect(uri);
        const db = await client.db("student");
        const collection = await db.collection("studentinfo");

        const result = await collection.find({}).toArray();

        let html = "<html><body>";

        result.forEach(s => {
            html += `name: ${s.name} || usn: ${s.usn} || marks: ${s.marks} <br>`
        });

        html += `<br><a href="/">back</a><br></body></html>`;
        res.send(html);
    }
    catch(err) {
        console.log("error: ", err);
    }
    finally{
        if(!client) {
            client.close();
        }
    }
});


app.get('/delete', async (req, res) => {
    const {usn} = req.query;

    let client;

    try{
        client =  await MongoClient.connect(uri);
        const db = await client.db("student");
        const collection = await db.collection("studentinfo");

        await collection.deleteOne({"usn": usn});

        res.send(`<html><body>"item deleted succesfully!<br><a href="/">back</a><br></body></html>`);
    }
    catch(err) {
        console.log("error: ", err);
    }
    finally{
        if(!client) {
            client.close();
        }
    }
});

app.get('/update', async (req, res) => {
    const {usn, marks} = req.query;

    let client;

    try{
        client =  await MongoClient.connect(uri);
        const db = await client.db("student");
        const collection = await db.collection("studentinfo");

        await collection.updateOne({"usn": usn}, {$set: {"marks": marks}});

        res.send(`<html><body>"item updated succesfully!<br><a href="/">back</a><br></body></html>`);
    }
    catch(err) {
        console.log("error: ", err);
    }
    finally{
        if(!client) {
            client.close();
        }
    }
});

app.listen(port, ()=> {
    console.log("runnning at port 8080");
});