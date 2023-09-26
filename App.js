import React from "react";
import ReactDOM from "react-dom/client";
import image from "./common/images/logo.png";
import cartImage from "./common/images/cart.png";
import kfcImage from "./common/images/kfc-png.png";
import meghnaFoods from "./common/images/meghnaFoods.png";
import { resList } from "./common/mockData/mockData";
/*
 * Food App
 * Header
 *       -Logo
 *       -Navigation-Item
 *               -Home
 *               -About Us
 *               -Contact Us
 *               -Cart
 * Body
 *       -Search
 *               -Search input & search button
 *       -Restuarent Card
 *               -Restuarent name
 *               -image
 *               -Cuisine
 *               -Rating
 *               -Price for two
 * Footer
 *       -CopyRight
 *       -Company name, links & Report
 */
// const resObj = {
//   data: {
//     id: "347868",
//     name: "KFC",
//     cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
//     locality: "Cunnigham road",
//     areaName: "Vasanth Nagar",
//     costForTwo: 40000,
//     costForTwoString: "₹400 for two",
//     cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//     avgRating: 3.8,
//     feeDetails: {
//       restaurantId: "347868",
//       fees: [
//         {
//           name: "BASE_DISTANCE",
//           fee: 4300,
//         },
//         {
//           name: "BASE_TIME",
//         },
//         {
//           name: "ANCILLARY_SURGE_FEE",
//         },
//       ],
//       totalFee: 4300,
//     },
//     parentId: "547",
//     avgRatingString: "3.8",
//     totalRatingsString: "1K+",
//     sla: {
//       deliveryTime: 29,
//       lastMileTravel: 3,
//       serviceability: "SERVICEABLE",
//       slaString: "29 mins",
//       lastMileTravelString: "3.0 km",
//       iconType: "ICON_TYPE_EMPTY",
//     },
//     availability: {
//       nextCloseTime: "2023-09-09 03:00:00",
//       opened: true,
//     },
//     badges: {},
//     isOpen: true,
//     type: "F",
//     badgesV2: {
//       entityBadges: {
//         imageBased: {},
//         textBased: {},
//         textExtendedBadges: {},
//       },
//     },
//     aggregatedDiscountInfoV3: {
//       header: "40% OFF",
//       subHeader: "UPTO ₹80",
//     },
//     differentiatedUi: {
//       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       differentiatedUiMediaDetails: {
//         mediaType: "ADS_MEDIA_ENUM_IMAGE",
//         lottie: {},
//         video: {},
//       },
//     },
//     reviewsSummary: {},
//     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     restaurantOfferPresentationInfo: {},
//   },
//   analytics: {},
//   cta: {
//     link: "https://www.swiggy.com/restaurants/kfc-cunnigham-road-vasanth-nagar-bangalore-347868",
//     type: "WEBLINK",
//   },
// };

const NavigationItems = () => {
  return (
    <div className="navigation-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart </li>
      </ul>
      {/* <span > <img className="cart-image" src= {cartImage}/></span> */}
    </div>
  );
};
const Header = () => {
  return (
    <div className="header">
      <img className="logo-food" src={image} />
      <NavigationItems />
    </div>
  );
};

const Search = () => {
  return (
    <div className="search">
      <input className="search-input" />
      <button>Search</button>
    </div>
  );
};

const RestuarentCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    deliveryTime,
    avgRatingString,
    costForTwo,
  } = resData.data;
  return (
    <div className="restuarent-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-image"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{deliveryTime}</h4>
      <h4>{avgRatingString}</h4>
      <h4>₹{costForTwo / 100} For Two</h4>
    </div>
  );
};

const AppMainContainer = () => {
  return (
    <div className="app-main-container">
      <div className="app-main-container">
        <Search />
      </div>
      {/* //not using keys not acceptable <<<< index as key(bad practice) <<<<<<<<< unique id (best practice) */}
      <div className="restuarent-container">
        {resList.map((restuarent) => (
          <RestuarentCard key={restuarent.id} resData={restuarent} />
        ))}
      </div>
    </div>
  );
};
const AppFooter = () => {
  return (
    <div className="app-footer">
      <ul>
        <li>CopyRights</li>
        <li>Links</li>
        <li>Address</li>
        <li>Report </li>
      </ul>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="layout">
      <Header />
      <AppMainContainer />
      <AppFooter />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
