// const express = require("express");
// const app = express();
// const PORT = 3000;

// app.use(express.json());

// let users = [
//   { id: 1, name: "John Doe", email: "john@example.com" },
//   { id: 2, name: "Jane Doe", email: "jane@example.com" },
// ];

const db = require("../../db/db");

exports.getAllUsers = (req, res) => {
  const query = "SELECT * FROM users";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching users:", err);
      res.status(500).json({ error: "Database error" });
    } else {
      res.json(results);
    }
  });
};

// const db = require("../../db/db");

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

// app.listen(PORT, () => {
//   console.log(`server running on http://localhost:${PORT}`);
// });
