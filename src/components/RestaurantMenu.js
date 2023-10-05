import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
import useRestaurantInfo from "../utils/useRestaurantInfo";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantInfo(resId);

  if (resInfo === null) {
    return <ShimmerUI />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info || {};
  const { itemMenu } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards || {};
  return (
    <div>
      <h1>{name}</h1>
      <h3>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </h3>
      <ul>
        {resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
          (item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} -{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          )
        )}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
