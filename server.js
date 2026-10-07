const express = require("express");
const app = express();
const PORTNO = 3000;

// ** Required Middlewate
// Add here app.use statements
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}))

//*** Routes
app.get("/", function (req, res) {
  res.send(`Response from localhost:${PORTNO}/`);
});

app.get("/search", function (req, res) {
  res.send(`
    <p>Search: ${req.query.keyword}</p>
    `);
});

app.post("/register", function (req, res) {
  res.send(`
    <h1>Registered</h1>
    <p>Username: ${req.body.username}</p> 
    <p>Email: ${req.body.email}</p>
    `);
  });

app.listen(PORTNO, function () {
  console.log(`Listening on Port: ${PORTNO}`);
});
