import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {!isLoginPage && (
        <div className="footer" id="footer">
          <div className="footer-content">
            <div className="footer-content-left">
              <img src={assets.logo} alt="" width={150} />
              <p>
                This is a Food delivery and Laundry services management app for
                college students.
              </p>
              <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
              </div>
            </div>
            <div className="footer-content-center">
              <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
              </ul>
            </div>
            <div className="footer-content-right">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+91-9999999999</li>
                <li>contact@CampusEase.com</li>
              </ul>
            </div>
          </div>
          <hr />
          <p className="footer-copyright">
            Copyright 2024 &copy; CampusEase.com - All Right Reserved.
          </p>
        </div>
      )}
    </>
  );
};

export default Footer;
