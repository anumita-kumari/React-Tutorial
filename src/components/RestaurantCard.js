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
  } = resData;
  return (
    <div className="m-4 p-4 bg-gray-100 hover:bg-gray-200 w-[250px] rounded-lg">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{deliveryTime}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{costForTwo} </h4>
    </div>
  );
};

export const withPromotedRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute px-2 m-2 bg-black text-white rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
