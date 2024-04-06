// import React, { useContext, useState } from "react";
// import "./Pickup.css";
// import { StoreContext } from "../../context/StoreContext";
// import { useNavigate } from "react-router-dom";
// import { assets } from "../../assets/assets";

// const Pickup = () => {
//   const { cartItems, laundry_list, removeFromCart, getTotalCartAmount } =
//     useContext(StoreContext);
//   const navigate = useNavigate();

//   // State to store quantity input for each item
//   const [quantityInputs, setQuantityInputs] = useState({});

//   // Function to handle quantity input change
//   const handleQuantityChange = (itemId, value) => {
//     // Ensure the input value is non-negative
//     const nonNegativeValue = Math.max(0, value);
//     setQuantityInputs({
//       ...quantityInputs,
//       [itemId]: nonNegativeValue,
//     });
//   };

//   // Function to set quantity of item to 0
//   const setQuantityToZero = (itemId) => {
//     setQuantityInputs({
//       ...quantityInputs,
//       [itemId]: 0,
//     });
//   };

//   // Function to calculate total price for an item
//   const calculateItemTotal = (item) => {
//     const quantity = quantityInputs[item._id] || 0;
//     return item.price * quantity;
//   };

//   // State to store whether wash type icon is clicked or not
//   const [washTypeClicked, setWashTypeClicked] = useState(false);

//   // Function to toggle wash type icon clicked state
//   const toggleWashTypeClicked = () => {
//     setWashTypeClicked(!washTypeClicked);
//   };

//   // Style for wash type icon when clicked
//   const washTypeIconStyle = washTypeClicked
//     ? {
//         backgroundColor: "rgb(165, 165, 246)",
//         borderRadius: "10px",
//         padding: "10px",
//       }
//     : {};

//   return (
//     <div className="pickup">
//       <div className="pickup-items">
//         <div className="pickup-items-title">
//           <p>Product Type</p>
//           <p>Quantity</p>
//           <p>Wash Type</p>
//           <p>Price</p>
//           <p>Remove</p>
//         </div>
//         <br />
//         <hr />
//         {laundry_list.map((item, index) => {
//           return (
//             <div>
//               <div className="pickup-items-title pickup-items-item">
//                 <div className="Product-Type">
//                   <img src={item.image} alt="" />
//                   <p>{item.name}</p>
//                 </div>
//                 <div className="quantity-input">
//                   <input
//                     type="number"
//                     name="quantity"
//                     id="quantity"
//                     style={{ width: "3rem", height: "2rem" }}
//                     value={quantityInputs[item._id] || ""}
//                     onChange={(e) =>
//                       handleQuantityChange(item._id, parseInt(e.target.value))
//                     }
//                   />
//                 </div>
//                 <div className="Wash-Type-Icons">
//                   <img src={assets.washer} alt="" style={washTypeIconStyle}
//                     onClick={toggleWashTypeClicked}/>
//                   <img src={assets.iron} alt="" style={washTypeIconStyle}
//                     onClick={toggleWashTypeClicked}/>
//                   <img src={assets.towel} alt="" style={washTypeIconStyle}
//                     onClick={toggleWashTypeClicked}/>
//                   <img src={assets.detergent} alt="" style={washTypeIconStyle}
//                     onClick={toggleWashTypeClicked}/>
//                 </div>
//                 <p>Rs.{calculateItemTotal(item)}</p>
//                 <p
//                   onClick={() => {
//                     // removeFromCart(item._id);
//                     setQuantityToZero(item._id);
//                   }}
//                   className="cross"
//                 >
//                   x
//                 </p>
//               </div>
//               <hr />
//             </div>
//           );
//         })}
//       </div>
//       <div className="pickup-bottom">
//         <div className="pickup-total">
//           <h2>Cart total</h2>
//           <div>
//             <div className="pickup-total-details">
//               <p>Sub-total</p>
//               <p>${getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="pickup-total-details">
//               <p>Delivery Fee</p>
//               <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
//             </div>
//             <hr />
//             <div className="pickup-total-details">
//               <b>Total</b>
//               <b>
//                 ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
//               </b>
//             </div>
//           </div>
//           <button onClick={() => navigate("/order")}>
//             PROCEED TO CHECKOUT
//           </button>
//         </div>
//         <div className="pickup-promocode">
//           <div>
//             <p>If you have a prome code, Enter it here</p>
//             <div className="pickup-promocode-input">
//               <input type="text" placeholder="Promo code" />
//               <button>Submit</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pickup;

import React, { useContext, useState } from "react";
import "./Pickup.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

const Pickup = () => {
  const { cartItems, laundry_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();

  // State to store quantity input for each item
  const [quantityInputs, setQuantityInputs] = useState({});

  // Function to handle quantity input change
  const handleQuantityChange = (itemId, value) => {
    // Ensure the input value is non-negative
    const nonNegativeValue = Math.max(0, value);
    setQuantityInputs({
      ...quantityInputs,
      [itemId]: nonNegativeValue,
    });
  };

  // Function to set quantity of item to 0
  const setQuantityToZero = (itemId) => {
    setQuantityInputs({
      ...quantityInputs,
      [itemId]: 0,
    });
  };

  // State to store whether wash type icon is clicked or not
  const [washTypeClicked, setWashTypeClicked] = useState(false);

  // Function to toggle wash type icon clicked state
  const toggleWashTypeClicked = () => {
    setWashTypeClicked(!washTypeClicked);
  };

  // Style for wash type icon when clicked
  const washTypeIconStyle = washTypeClicked
    ? {
        backgroundColor: "rgb(165, 165, 246)",
        borderRadius: "10px",
        padding: "10px",
      }
    : {};

  return (
    <div className="pickup">
      <div className="pickup-items">
        <div className="pickup-items-title">
          <p>Product Type</p>
          <p>Quantity</p>
          <p>Wash Type</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {laundry_list.map((item, index) => {
          return (
            <div>
              <div className="pickup-items-title pickup-items-item">
                <div className="Product-Type">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                </div>
                <div className="quantity-input">
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    style={{ width: "3rem", height: "2rem" }}
                    value={quantityInputs[item._id] || ""}
                    onChange={(e) =>
                      handleQuantityChange(item._id, parseInt(e.target.value))
                    }
                  />
                </div>
                <div className="Wash-Type-Icons">
                  <img
                    src={assets.washer}
                    alt=""
                    style={washTypeIconStyle}
                    onClick={toggleWashTypeClicked}
                  />
                  <img
                    src={assets.iron}
                    alt=""
                    style={washTypeIconStyle}
                    onClick={toggleWashTypeClicked}
                  />
                  <img
                    src={assets.towel}
                    alt=""
                    style={washTypeIconStyle}
                    onClick={toggleWashTypeClicked}
                  />
                  <img
                    src={assets.detergent}
                    alt=""
                    style={washTypeIconStyle}
                    onClick={toggleWashTypeClicked}
                  />
                </div>
                <p
                  onClick={() => {
                    // removeFromCart(item._id);
                    setQuantityToZero(item._id);
                  }}
                  className="cross"
                >
                  x
                </p>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
      <div className="pickup-bottom">
        <button onClick={() => navigate("/orderPlaced")}>CONFIRM</button>
      </div>
    </div>
  );
};

export default Pickup;
