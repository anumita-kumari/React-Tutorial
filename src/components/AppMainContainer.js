import { resList } from "../utils/mockData";
import RestaurantCard, { withPromotedRestaurant } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const AppMainContainer = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredListOfRestaurants] = useState([]);
  //custom online hook
  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setShowName } = useContext(UserContext);
  const RestaurantCardPromoted = withPromotedRestaurant(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.949756&lng=77.6997624&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const dataJson = await data.json();

    setListOfRestaurants(
      dataJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredListOfRestaurants(
      dataJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  //CONDITIONAL Rendering
  // if (listOfRestaurants.length === 0) {
  //  return  <shimmer />;
  // }
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline. Please check your internet Connection.
      </h1>
    );
  return listOfRestaurants?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="app-main-container">
      <div className="m-4 p-4">
        <input
          className="border border-solid border-black rounded-sm"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="m-4 px-4 py-2 bg-green-100 rounded-lg"
          onClick={() => {
            const filteredListOfRestaurants = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            console.log(
              searchText,
              "filteredListOfRes",
              filteredListOfRestaurants
            );
            setFilteredListOfRestaurants(filteredListOfRestaurants);
          }}
        >
          Search
        </button>
        <button
          className="m-4 px-4 py-2 bg-green-100 rounded-lg"
          onClick={() => {
            filteredListOfRestaurants = listOfRestaurants.filter((res) => {
              return res.info.avgRating > 4;
            });
            setFilteredListOfRestaurants(filteredListOfRestaurants);
          }}
        >
          Top Rated restaurants
        </button>
        <label className="text-lg font-bold">User Name:</label>
        <input
          type="text"
          className="border border-black"
          value={loggedInUser}
          onChange={(e) => setShowName(e.target.value)}
        />
      </div>

      {/* //not using keys not acceptable <<<< index as key(bad practice) <<<<<<<<< unique id (best practice) */}
      <div className="flex flex-wrap">
        {filteredRestaurants?.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardPromoted resData={restaurant.info} />
            ) : (
              <RestaurantCard resData={restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AppMainContainer;
