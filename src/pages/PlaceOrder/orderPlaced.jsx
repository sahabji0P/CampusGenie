import React from "react";
import "./OrderPlaced.css";
import ConfettiExplosion from "react-confetti-explosion";
import { Link, useLocation } from "react-router-dom";

const OrderPlaced = () => {
  const location = useLocation();
  const isFoodOrderPage = location.pathname === "/order/orderPlaced";
  const isLaundryOrderPage = location.pathname === "/laundry/Pickup";

  return (
    <>
      <div className="ConfirmationText">
        <ConfettiExplosion
          force={0.8}
          duration={3000}
          particleCount={250}
          width={1600}
        />

        {isFoodOrderPage ? (
          <>
            <div>Congrats! Your order is placed.</div>
            <Link to="/home">
              <span>Back to Home</span>
            </Link>
          </>
        ) : (
          <>
            <div>Congrats! Your pickup is scheduled.</div>
            <Link to="/laundry">
              <span>Back to Home</span>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default OrderPlaced;
