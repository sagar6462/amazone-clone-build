const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HRxzbF6lkZiScZCy9xuyXpeLvvFkJF6DcHk7M074WWdmeQBP5kokDRFOkdvKebmrDl3FTBQrA8ZBS5O7QU8lJl200IDuuqmHJ"
);
//Api

// - App config

const app = express();

// - Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

// - API routes

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved from this amount", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // sub units of the currency
    currency: "usd",
  });
  //Ok - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
