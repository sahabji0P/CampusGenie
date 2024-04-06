import React, { useContext } from "react";
import "./Restaurants.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";

const Restaurants = ({ id, name, location, description, image }) => {
  return (
    <>
      <Link to={`/food/${id}`}>
        <div className="restaurant">
          <div className="restaurant-img-container">
            <img className="restaurant-image" src={image} alt="" />
          </div>
          <div className="restaurant-info">
            <div className="restaurant-name-rating">
              <p>{name}</p>
              <img src={assets.rating_starts} alt="" />
            </div>
            <p className="restaurant-desc">{description}</p>
            <p className="restaurant-location">{location}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Restaurants;
