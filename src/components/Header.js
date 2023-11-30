import { useContext, useState } from "react";
import image from "../utils/images/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("LogIn");
  const onlineStatus = useOnlineStatus();
  const userData = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-pink-100 lg:bg-green-100 sm:bg-yellow-100">
      <Link to="/">
        <img className="w-28" src={image} />
      </Link>
      <div className="navigation-items">
        <ul className="flex">
          <li className="m-4 p-4">
            Online Status: {onlineStatus === true ? "🟢" : "🔴"}
          </li>
          <li className="m-4 p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="m-4 p-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="m-4 p-4">
            <Link to="/contact">Contact Us </Link>
          </li>
          <li className="m-4 p-4">
            <Link to="/grocery">Grocery </Link>
          </li>
          <li className="m-4 p-4">
            <Link to="/cart"> Cart : ({cartItems.length} items )</Link>
          </li>
          <li className="m-4 p-4">
            <Link>Login: {userData.loggedInUser}</Link>
          </li>
          <button
            className="m-4 p-4"
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
