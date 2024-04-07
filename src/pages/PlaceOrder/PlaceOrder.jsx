import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const [orderDetails, setOrderDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    roomNumber: "",
    phone: "",
    subTotal: getTotalCartAmount(),
    deliveryFee: getTotalCartAmount() === 0 ? 0 : 2,
    total: getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setOrderDetails((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Function to handle placing the order  (Local Storage Method)
  // const handlePlaceOrder = () => {
  //   // Retrieve existing orders from local storage
  //   const existingOrdersJSON = localStorage.getItem("orders");
  //   const existingOrders = existingOrdersJSON
  //     ? JSON.parse(existingOrdersJSON)
  //     : [];
  //   // Gather order details

  //   const orderDetails = {
  //     firstName: document.getElementById("firstName").value,
  //     lastName: document.getElementById("lastName").value,
  //     email: document.getElementById("email").value,
  //     roomNumber: document.getElementById("roomNumber").value,
  //     phone: document.getElementById("phone").value,
  //     subTotal: getTotalCartAmount(),
  //     deliveryFee: getTotalCartAmount() === 0 ? 0 : 2,
  //     total: getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2,
  //   };

  //   // Append the new order to the existing list of orders
  //   const updatedOrders = [...existingOrders, orderDetails];

  //   // Store order details in local storage
  //   localStorage.setItem("orders", JSON.stringify(updatedOrders));
  // };

  // Function to handle placing the order  (MongoDB method)
  const handlePlaceOrder = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDetails),
      });
      if (response.ok) {
        console.log("Order placed successfully!");
        // Handle success, e.g., redirect to order confirmation page
      } else {
        console.error("Failed to place order");
        // Handle failure
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            value={orderDetails.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"ast
            value={orderDetails.lastName}
            onChange={handleChange}
          />
        </div>
        <input
          type="email"
          id="email"
          placeholder="Email address"
          value={orderDetails.email}
          onChange={handleChange}
        />
        <input
          type="text"
          id="roomNumber"
          placeholder="Room Number"
          value={orderDetails.roomNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          id="phone"
          placeholder="Phone"
          value={orderDetails.phone}
          onChange={handleChange}
        />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart total</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub-total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          {/* <button>PROCEED TO PAYMENT</button> */}
          <Link to="/order/orderPlaced">
            <button onClick={handlePlaceOrder}>PLACE ORDER</button>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
