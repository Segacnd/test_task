require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./router/index");

const PORT = process.env.PORT || 5000;
const app = express();

const corsOptions = {
  origin: "*",
  methods: "GET, HEAD, PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/", router);

app.listen(PORT);
