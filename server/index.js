const express = require("express");
const bodyParser = require("body-parser");
const db = require("./queries");

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// get Api
app.get("/", (request, response) => {
  response.json({
    info: "Node.js, Express, and Postgres API",
  });
});

app.get("/users", db.getUsers);
app.post("/users", db.createUser);
app.put("/users/:id", db.updateUser);
app.delete("/users/:id", db.deleteUser);
app.patch("/users/:id", db.updateStatusUser);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

// exception handling
// http codes
// sql queries
// better architechture
// clean code & code quality optimization


// middleware & authentication
// authorization
// session and cookies
// 
