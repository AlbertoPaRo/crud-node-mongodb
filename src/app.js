const express = require("express");
const exphbs = require("express-handlebars");
const { router } = require("./routes/index.routes");
const path = require("path");
const app = express();
const morgan = require("morgan");

app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs.engine({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

//middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(router);

module.exports = { app };
