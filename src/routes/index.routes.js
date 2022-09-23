const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

router.get("/", async (req, res) => {
  const tasks = await Task.find().lean();
  res.render("index", { tasks: tasks });
});

router.post("/task/add", async (req, res) => {
  try {
    const task = Task(req.body);
    await task.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/edit/:id", (req, res) => {
  res.render("edit");
});

router.post("/edit/:id", (req, res) => {
  console.log(req.body);
  res.send("received");
});

module.exports = { router: router };
