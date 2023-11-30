import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import ItemCategory from "./ItemCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantInfo(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) {
    return <ShimmerUI />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info || {};
  const { itemMenu } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards || {};
  const itemCategoryList =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(itemCategoryList);
  return (
    <div className="w-6/12 m-auto ">
      <div className="m-4 p-4 justify-center align-middle text-left divide-y divide-dashed">
        <h1 className="font-bold">{name}</h1>
        <h3 className="text-xs text-gray-700">
          {cuisines?.join(", ")} - {costForTwoMessage}
        </h3>
      </div>
      <div className="m-4 p-4">
        {itemCategoryList.map((item, index) => (
          <ItemCategory
            key={item.card.card.title}
            data={item.card.card}
            showItem={index === showIndex ? true : false}
            setShowIndex={() => {
              setShowIndex(index);
            }}
          />
        ))}
        {/* type.googleapis.com/swiggy.presentation.food.v2.ItemCategory */}
      </div>
    </div>
  );
};
export default RestaurantMenu;
