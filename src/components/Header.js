import { useState } from "react";
import image from "../utils/images/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("LogIn");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <img className="logo-food" src={image} />
      <div className="navigation-items">
        <ul>
          <li>Online Status: {onlineStatus === true ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us </Link>
          </li>
          <li>
            <Link to="/grocery">Grocery </Link>
          </li>
          <li>
            <Link>Cart</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "LogIn" ? setBtnName("LogOut") : setBtnName("LogIn");
              console.log("Logout");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
