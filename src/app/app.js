const express = require("express");
const cors = require("cors");
const itemsRoute = require("../items/itemsRoute");
const authRoute = require("../auth/userRoute");
const billsRoute = require("../bills/billRoute");

const app = express();

app.use(
  cors({
    origin: [process.env.PORTFOLIO_URL],
    methods: ["GET", "POST", "DELETE", "PUT"],
  })
);
app.use(express.json());

app.use("/api/items", itemsRoute);
app.use("/api/auth", authRoute);
app.use("/api/bills", billsRoute);

module.exports = app;
