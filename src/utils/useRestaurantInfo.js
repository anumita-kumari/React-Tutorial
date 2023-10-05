import { useState, useEffect } from "react";
import { ITEM_URL } from "./constants";

//Custom Hook : just to call API
const useRestaurantInfo = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(ITEM_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantInfo;
