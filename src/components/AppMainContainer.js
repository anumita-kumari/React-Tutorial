import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

const AppMainContainer = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredListOfRestaurants] = useState([]);
  console.log("body rendered");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.949756&lng=77.6997624&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const dataJson = await data.json();

    console.log(
      dataJson.data.cards[5].card.card.gridElements.infoWithStyle.restaurants[0]
        .info
    );
    setListOfRestaurants(
      dataJson?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredListOfRestaurants(
      dataJson?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  //CONDITIONAL Rendering
  // if (listOfRestaurants.length === 0) {
  //  return  <shimmer />;
  // }
  return listOfRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="app-main-container">
      <div className="search">
        <input
          className="search-input"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
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
      </div>
      <button
        className="filter-btn"
        onClick={() => {
          filteredListOfRestaurants = listOfRestaurants.filter((res) => {
            return res.info.avgRating > 4;
          });
          setFilteredListOfRestaurants(filteredListOfRestaurants);
        }}
      >
        Top Rated restaurants
      </button>
      {/* //not using keys not acceptable <<<< index as key(bad practice) <<<<<<<<< unique id (best practice) */}
      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AppMainContainer;
