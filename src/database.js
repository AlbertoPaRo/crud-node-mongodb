const { connect } = require("mongoose");

(async () => {
  try {
    const db = await connect(
      "mongodb+srv://Prueba:prueba@cluster0.htv6w1q.mongodb.net/test"
    );
    console.log("DB connected to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
