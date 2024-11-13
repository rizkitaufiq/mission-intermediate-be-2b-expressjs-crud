const express = require("express");
const app = express();
const usersRouter = require("./routes/users");
const PORT = 3000;

app.use(express.json());

// const db = require("./db");

// app.get("/routes/users.js", (req, res) => {
//   db.query("SELECT * FROM users", (err, results) => {
//     if (err) {
//       console.error("Error fetching users:", err);
//       res.status(500).json({ error: "Database error" });
//     } else {
//       res.json(results);
//     }
//   });
// });
// const apiRoutes = require("./routes/users");
app.use("/api", usersRouter);

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
