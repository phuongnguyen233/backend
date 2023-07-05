const express = require("express"); //commonjs
const path = require("path"); //commonjs
require("dotenv").config();
// import express from "express";   //es modules

const app = express(); //app express
const port = process.env.PORT || 8888; //port => hardcode
const hostname = process.env.HOST_NAME;

// config static files
app.use(express.static(path.join(__dirname, "public")));

//config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// khai bao route
app.get("/", (req, res) => {
  res.send("Hello World! & nodemon");
});

app.get("/phuong", (req, res) => {
  // res.send("Hello World!");
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
