const express = require("express");
const app = express();
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
app.use(express.json());

let db = new sqlite3.Database("db.db", (err) => {
  if (err) {
    console.log(err.message);
  }
  console.log("Connected to the database");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.get(
    `SELECT username, functie FROM users WHERE username = ? AND password = ?`,
    [username, password],
    (err, row) => {
      if (err) {
        console.error(err.message);
        return res.status(500).send({ validation: false });
      }
      if (row) {
        res.send({ validation: true, user: row });
      } else {
        res.send({ validation: false });
      }
    }
  );
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const functie = "user";

  db.run(
    `INSERT INTO users (username, password, email, functie) VALUES (?, ?, ?, ?)`,
    [username, password, email, functie],
    (err, result) => {
      if (err) {
        console.error(err.message);
        return res.status(500).send({ validation: false });
      }
      return res.status(200).send({ validation: true });
    }
  );
});

app.get("/products", (req, res) => {
  db.all("SELECT * FROM SoftwareData", (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send({ error: "Internal Server Error" });
    }
    res.json(rows);
  });
});

app.post("/addproduct", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const image = req.body.image;
  const dayprice = req.body.dayprice;
  const weekprice = req.body.weekprice;
  const monthprice = req.body.monthprice;
  const lifetimeprice = req.body.lifetimeprice;

  db.run(
    `INSERT INTO SoftwareData (title, description, image, dayprice, weekprice, monthprice, lifetimeprice) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [title, description, image, dayprice, weekprice, monthprice, lifetimeprice],
    (err, result) => {
      if (err) {
        console.error(err.message);
        return res.status(500).send({ validation: false });
      }
      return res.status(200).send({ validation: true });
    }
  );
});

app.listen(3001, () => console.log("Listening at port 3001"));
