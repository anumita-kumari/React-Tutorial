import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
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
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-image" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{deliveryTime}</h4>
      <h4>{avgRatingString}</h4>
      <h4>₹{costForTwo / 100} For Two</h4>
    </div>
  );
};

export default RestaurantCard;
