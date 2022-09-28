const { app } = require("./app");
const { PORT } = require("./config");
require("./database");

app.listen(PORT);
console.log("server on port", PORT);
