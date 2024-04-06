import React, { useEffect, useState,useContext} from "react";
import { useParams } from "react-router-dom";
import FoodItem from "../FoodItem/FoodItem";
import { StoreContext} from "../../context/StoreContext";


const ResFoodItems = () => {
  const { RestaurantID } = useParams();
  const {food_list,restaurant_list}=useContext(StoreContext)
  const restaurant=restaurant_list.find((r)=>r._id==RestaurantID)


  return (
    <div className="food-display" id='food-display'>
      <h2>{restaurant ? `Food Items from ${restaurant.name}` : 'Food Items'}</h2>
      <div className="food-display-list">
        {food_list.map((item,index)=>{
          if(RestaurantID==item.RestaurantID){
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
          }
        })}
      </div>
    </div>
  );
};

export default ResFoodItems;


