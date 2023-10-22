const express = require("express");
const mongoose = require("mongoose");
const basicModel = require("./routes/BasicModel");


const cors = require("cors");
// const http    = require('http');
// const https   = require('https');
// const fs      = require('fs');

const PORT = 4000;

// const certificate = fs.readFileSync('/etc/ssl/certificate.crt', 'utf8');
// const privateKey = fs.readFileSync('/etc/ssl/private.key', 'utf8');
// const credentials = {key: privateKey, cert: certificate};

const MONGO_URL = 'mongodb+srv://admin:admin@optimeal.xgmik0f.mongodb.net/?retryWrites=true&w=majority';

const app = express();

app.get("/api/", (req, res) => {
  res.send({"heyo": "skibidi"});
});

//Configures MongoDB connection
mongoose.connect(MONGO_URL, { dbName: "test" })
    .then(() => console.log("DB Connection Successful!"))
    .catch((err) => {
        console.log(err);
    });
// const httpsServer = https.createServer(credentials, app);
// httpsServer.listen(PORT, () => console.log(`Listening on port ${PORT}.`));

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));