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

router.get("/edit/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task });
  } catch (error) {
    console.log(error);
  }
});

router.post("/edit/:id", async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndUpdate(id, req.body);
  res.redirect("/");
});

router.get("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect("/");
});

router.get("/toggledone/:id", async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndUpdate(id);
});

module.exports = { router: router };
