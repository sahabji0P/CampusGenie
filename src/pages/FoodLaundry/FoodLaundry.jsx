import React from "react";
import "./FoodLaundry.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const FoodLaundry = () => {
  return (
    <div className="container">
      <Link to="/home">
        <div className="foodPage">
          <div class="foodImg">
            <img src={assets.fooddel} alt="" />
          </div>
          <div className="foodText">
            <h2>Food Delivery</h2>
            <span>Get food delivered at you doorstep.</span>
          </div>
        </div>
      </Link>
      <Link to="/laundry">
        <div className="laundryPage">
          <div className="laundryImg">
            <img src={assets.laundry} alt="" />
          </div>
          <div className="laundryText">
            <h2>Laundry Services</h2>
            <span>
              Track the status of your laundry, schedule pick up and drop off.
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FoodLaundry;
