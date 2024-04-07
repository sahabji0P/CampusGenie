import React from "react";
import "./AdminDashboard.css";
import { useState, useEffect } from "react";


const AdminDashboard = () => {
  // State to store fetched data
  const [orders, setOrders] = useState([]);

  // Function to fetch data from the backend API
  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/orders"); // Adjust the URL as per your backend API route
      if (response.ok) {
        const data = await response.json();
        setOrders(data);
      } else {
        console.error("Failed to fetch orders");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
    console.log(orders);
  }, []);

  // Function to handle status change
  const handleStatusChange = async (e, orderId) => {
    const newStatus = e.target.value;
    try {
      const response = await fetch(
        `http://localhost:3000/api/orders/${orderId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );
      if (response.ok) {
        // Update the local orders state with the new status
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === orderId ? { ...order, status: newStatus } : order
          )
        );
      } else {
        console.error("Failed to update order status");
      }
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  return (
    <div>
      <div className="title">
        <h1>Admin Dashboard</h1>
        <h2 className="orders-heading">Orders</h2>
      </div>
      <div className="dashboard-title">
        <p>Order-ID</p>
        <p>User Name</p>
        <p>Order Value</p>
        <p>Order Status</p>
        <p>Remove</p>
      </div>
      <hr />

      <ul>
        {orders.map((order) => (
          <li key={order._id} className="dashboard-items-item orders-list">
            <p>{order._id}</p>
            <p>{order.firstName}</p>
            <p>{order.total}</p>
            <p>
              <select
                value={order.status || "Placed"}
                onChange={(e) => handleStatusChange(e, order._id)}
              >
                <option value="Placed">Placed</option>
                <option value="Paid">Paid</option>
                <option value="In Progress">In Progress</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </p>
            <p className="remove-button">x</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
