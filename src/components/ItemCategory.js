import { useState } from "react";
import ItemList from "./ItemList";

const ItemCategory = ({ data, showItem, setShowIndex }) => {
  //const [showItem, setShowItem] = useState(false);

  handleClick = () => {
    console.log("Clicked");
    setShowIndex();
  };
  //console.log(data.data.itemCards);
  return (
    <div className="bg-gray-50 mx-2 my-auto p-4 border-solid border-gray-200 rounded-sm shadow-md ">
      {/* Header */}
      <div className="justify-between flex" onClick={handleClick}>
        <span className="font-bold text-lg">
          {data.title} ({data?.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {/* Accordion Body */}
      <div>
        {data.itemCards.map(
          (item) =>
            showItem && <ItemList key={item.card?.info?.id} itemDetail={item} />
        )}
      </div>
    </div>
  );
};

export default ItemCategory;
