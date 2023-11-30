import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = (itemDetail) => {
  console.log(itemDetail, itemDetail.itemDetail?.card?.info?.name);
  const dispatch = useDispatch();

  handleAddItem = (item) => {
    dispatch(addItem(item));
    console.log(item);
  };

  return (
    <div className="flex justify-between m-2 border-b-2">
      <div className="w-9/12">
        <div className="my-2 font-bold text-sm">
          {itemDetail.itemDetail?.card?.info?.name}
        </div>
        <div className="text-xs">
          ₹
          {itemDetail.itemDetail?.card?.info?.price
            ? itemDetail.itemDetail?.card?.info?.price / 100
            : itemDetail.itemDetail?.card?.info?.defaultPrice / 100}
        </div>
        <p className="text-gray-400 my-2 text-xs">
          {itemDetail.itemDetail?.card?.info?.description}
        </p>
      </div>
      <div className="w-3/12">
        <img src={CDN_URL + itemDetail.itemDetail?.card?.info?.imageId}></img>
        <button
          className="rounded-lg m-2 w-[60px] bg-black text-white translate-x-2"
          onClick={() => handleAddItem(itemDetail.itemDetail)}
        >
          Add +{" "}
        </button>
      </div>
    </div>
  );
};

export default ItemList;
