const express = require("express");
const getDatabase = require("./index");
const port = 8000;

const app = express();

app.use(express.static("public"));

app.get("/users", async (req, res) => {
  const users = await getDatabase();
  res.json(users);
});

app.listen(port, console.log(`Server started on ${port}`));
