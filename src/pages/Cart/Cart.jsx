import React, { useContext, useState } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate, Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();

  const [orderDetails, setOrderDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    roomNumber: "",
    phone: "",
    subTotal: getTotalCartAmount(),
    deliveryFee: getTotalCartAmount() === 0 ? 0 : 2,
    total: getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2,
    items: [],
    orderStatus: "Placed"
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setOrderDetails((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Function to handle placing the order  (MongoDB method)
  const handlePlaceOrder = async () => {
    try {
      // Prepare items with image and name for orderDetails
      const itemsWithDetails = Object.keys(cartItems).map((itemId) => {
        const item = food_list.find((foodItem) => foodItem._id === itemId);
        return {
          name: item.name,
          image: item.image,
          quantity: cartItems[itemId],
          price: item.price,
        };
      });

      // Update orderDetails with items
      setOrderDetails({
        ...orderDetails,
        items: itemsWithDetails,
      });
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
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>Rs.{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>Rs.{cartItems[item._id] * item.price}</p>
                  <p
                    onClick={() => {
                      removeFromCart(item._id);
                    }}
                    className="cross"
                  >
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart total</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub-total</p>
              <p>Rs.{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs.{getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                Rs.{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          {/* <button onClick={() => navigate("/order")}>
            PROCEED TO CHECKOUT
          </button> */}
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a prome code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>

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
              placeholder="Last Name"
              ast
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
            {/* <h2>Cart total</h2>
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
            </div> */}
            {/* <button>PROCEED TO PAYMENT</button> */}
            <Link to="/order/orderPlaced">
              <button onClick={handlePlaceOrder}>PLACE ORDER</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Cart;
