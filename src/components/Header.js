import image from "../utils/images/logo.png";
const Header = () => {
  return (
    <div className="header">
      <img className="logo-food" src={image} />
      <div className="navigation-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
