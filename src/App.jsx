import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import FoodLaundry from "./pages/FoodLaundry/FoodLaundry";
import Laundry from "./pages/Laundry/Laundry";
import Food from "./pages/Food/Food";
import Pickup from "./pages/Laundry/Pickup";
import OrderPlaced from "./pages/PlaceOrder/orderPlaced";
// import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { isAuthenticated, user } = useAuth0();
  // Check if the user's email is the specific email for admin access
  const isAdmin =
    isAuthenticated && user && user.email === "vinayaknagar2810@gmail.com";
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          {isAdmin ? (
            <Route path="/" element={<AdminDashboard />} />
          ) : (
            <>
              <Route path="/" element={<FoodLaundry />} />
              <Route path="/home" element={<Home />} />
              <Route path="/food/:RestaurantID" element={<Food />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order" element={<PlaceOrder />} />
              <Route path="/order/orderPlaced" element={<OrderPlaced />} />
              <Route path="/orderPlaced" element={<OrderPlaced />} />
              <Route path="/laundry" element={<Laundry />} />
              <Route path="/laundry/Pickup" element={<Pickup />} />
            </>
          )}
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
