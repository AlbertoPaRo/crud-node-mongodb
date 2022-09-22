const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});
router.post("/task/add", (req, res) => {
  console.log(req.body);
  res.send("saved");
});
router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/edit", (req, res) => {
  res.render("edit");
});

module.exports = { router: router };
