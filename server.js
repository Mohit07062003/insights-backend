const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const router = require('./routes');

/*
Please update DB_CONN url in the config directory with
the URI your mongodb is listening on
*/

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello world");
});

const connectDB = async () => {
  try {
    await mongoose.connect(config.get("DB_CONN"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected");
  } catch (e) {
    console.log(e);
    throw new Error("Unable to connect to database");
  }
};

connectDB();

app.use('/', router)

app.listen(3000, () => console.log("Backend is listening on port 3000."));
