// const { Router } = require("express");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/edit", (req, res) => {
  res.render("edit");
});

module.exports = { router: router };
