require("dotenv").config();
const express = require("express");
const sequelize = require("./db/db");
// const bodyParser = require("body-parser");

const usersRouter = require("./routes/users");

const app = express();

app.use(express.json());

// app.use(bodyParser.json());
app.use("/users", usersRouter);

// app.use("/", (req, res, next) => {
//   res.send("Hallo World");
// });

sequelize
  .authenticate()
  .then(() => {
    console.log("Database Connected!");
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });

const PORT = process.env.DB_PORT;

app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
