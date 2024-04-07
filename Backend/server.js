const express = require("express");
const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");
const bodyparser = require("body-parser");
const cors = require("cors");

dotenv.config();

// Connecting to the MongoDB Client
const url = process.env.MONGO_URI;
const client = new MongoClient(url);
client.connect();

// App & Database
const dbName = process.env.DB_NAME;
const app = express();
const port = 3000;

// Middleware
app.use(bodyparser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("App is Working");
});

// Define route to fetch all order details
app.get("/api/orders", async (req, res) => {
  try {
    const db = client.db(dbName);
    const ordersCollection = db.collection("orders");

    // Fetch all order details from the database
    const orderDetails = await ordersCollection.find({}).toArray();

    // Respond with the retrieved order details
    res.status(200).json(orderDetails);
  } catch (error) {
    console.error("Error fetching order details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Define route to handle orders
app.post("/api/orders", async (req, res) => {
  try {
    const db = client.db(dbName);
    const ordersCollection = db.collection("orders");

    // Extract order details from request body
    const orderDetails = req.body;

    // Combine order details and cart items
    const orderData = {
      orderDetails,
    };

    // Insert order into the database
    const result = await ordersCollection.insertOne(orderDetails);

    // Respond with success message
    res.status(201).json({ message: "Order placed successfully" });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Define a route to handle updating order status
app.put("/api/orders/:orderId", async (req, res) => {
  const orderId = req.params.orderId;
  const newStatus = req.body.status;

  try {
    const db = client.db(dbName);
    const ordersCollection = db.collection("orders");

    // Update the order status in the database
    const result = await ordersCollection.updateOne(
      { _id: ObjectId(orderId) },
      { $set: { status: newStatus } }
    );

    if (result.modifiedCount === 1) {
      // If the order status was successfully updated
      res.status(200).send("Order status updated successfully");
    } else {
      // If the order status was not updated
      res.status(404).send("Order not found or status not updated");
    }
  } catch (error) {
    // If an error occurred
    console.error("Error updating order status:", error);
    res.status(500).send("Internal server error");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on  http://localhost:${port}`);
});
