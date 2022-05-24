const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router);

mongoose
  .connect(
    "mongodb+srv://kohtut:r5LtNtlGAq34bHiO@cluster0.brd52.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => Error(`Error ${err}`));

// r5LtNtlGAq34bHiO
