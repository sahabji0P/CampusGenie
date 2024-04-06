import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import Restaurants from "../Restaurants/Restaurants";

// const FoodDisplay = ({category}) => {
//     const {food_list}=useContext(StoreContext)
//   return (
//     <div className='food-display' id='food-display'>
//       <h2>Food outlets in your campus</h2>
//       <div className="food-display-list">
//         {food_list.map((item,index)=>{
//             if(category==="All" || category===item.category){
//                 return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
//             }
//         })}
//       </div>
//     </div>
//   )
// }

const FoodDisplay = ({ category }) => {
  const { restaurant_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Food outlets in your campus</h2>
      <div className="food-display-list">
        {restaurant_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <Restaurants
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                location={item.location}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
