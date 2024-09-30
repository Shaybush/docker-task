const express = require("express");
const path = require("path");
const http = require("http");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/health", async (req, res) => {
  res.send("I'm OK !")
});

const server = http.createServer(app);

let port = process.env.PORT || 3001;
server.listen(port);