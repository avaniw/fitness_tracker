const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const controllers = require("./controllers");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb")