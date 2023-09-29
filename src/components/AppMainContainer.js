import { resList } from "../utils/mockData";
import Search from "./Search";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const AppMainContainer = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState(resList);

  return (
    <div className="app-main-container">
      <Search />
      <button
        className="filter-btn"
        onClick={() => {
          filteredListOfRestaurents = listOfRestaurents.filter((res) => {
            return res.data.avgRating > 4;
          });
          setListOfRestaurents(filteredListOfRestaurents);
        }}
      >
        Top Rated restaurants
      </button>
      {/* //not using keys not acceptable <<<< index as key(bad practice) <<<<<<<<< unique id (best practice) */}
      <div className="restaurant-container">
        {listOfRestaurents.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default AppMainContainer;
