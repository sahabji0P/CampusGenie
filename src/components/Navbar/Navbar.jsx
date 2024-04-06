import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useLocation } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isLaundryPage = location.pathname === "/laundry";
  const isLoginPage = location.pathname === "/login";
  const isOrderConfPage=location.pathname==='/order/orderPlaced'
  const {user,loginWithRedirect, logout, isAuthenticated} = useAuth0();

  return (
    <div className="navbar">
      {(isLoginPage) ? (
        <div className="centered-logo">
          <Link to="/">
            <img src={assets.logo} alt="" className="logo" />
          </Link>
        </div>
      ) : (
        <Link to="/">
          <img src={assets.logo} alt="" className="logo" />
        </Link>
      )}
      {!isHomePage && !isLaundryPage && !isLoginPage && !isOrderConfPage &&  (
        <ul className="navbar-menu">
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </Link>
          <a
            href="#explore-menu"
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </a>
          <a
            href="#footer"
            onClick={() => setMenu("contact-us")}
            className={menu === "contact-us" ? "active" : ""}
          >
            Contact Us
          </a>
        </ul>
      )}

      <div className="navbar-right">
        {!isHomePage && !isLoginPage && !isOrderConfPage && (
          <>
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
              <Link to="/cart">
                <img src={assets.basket_icon} alt="" />
                <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
              </Link>
            </div>
          </>
        )}

        <span>{isAuthenticated && <p>{user.name}</p>}</span>
        {isAuthenticated ? (
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        ) : (
          <button onClick={() => loginWithRedirect()}>Log In</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
