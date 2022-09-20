import express from "express";
import exphbs from "express-handlebars";
import indexRoutes from "./routes/index.routes.js";
import path from "path";
const app = express();

app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    layoutsDir: path.join(app.get("src/views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");
//Routes
app.use(indexRoutes);

export default app;
