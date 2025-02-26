import { useEffect, useState } from "react";
import { RESTAURANT_API } from "./constants";
import axios from "axios";

const userRestaurantManu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  console.log("Res Id", resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await axios.get(RESTAURANT_API + resId);
    const json = await response.data;
    console.log("Res json", json);
    setResInfo(json);
  };

  return resInfo;
};

export default userRestaurantManu;
