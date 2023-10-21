const express = require("express");
// const http    = require('http');
// const https   = require('https');
// const fs      = require('fs');

const PORT = 4000;

// const certificate = fs.readFileSync('/etc/ssl/certificate.crt', 'utf8');
// const privateKey = fs.readFileSync('/etc/ssl/private.key', 'utf8');
// const credentials = {key: privateKey, cert: certificate};

const app = express();

app.get("/api/", (req, res) => {
  res.send({"heyo": "skibidi"});
});

// const httpsServer = https.createServer(credentials, app);
// httpsServer.listen(PORT, () => console.log(`Listening on port ${PORT}.`));

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));