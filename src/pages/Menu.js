import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import userRestaurantManu from "../utils/useRestaurantMenu";
import Shimmer from "../component/Body/Shimmer";

const Menu = () => {
  const { resId } = useParams();
  // {Introducing custom hooks}
  const resInfo = userRestaurantManu(resId);

  if (resInfo === null) {
    <Shimmer />;
  }
  console.log("compose", resInfo?.data?.cards[2]?.card?.card?.info);
  //   const { name, cuisines, costForTwoMessage } =
  //     resInfo?.data?.cards[2]?.card?.card?.info;

  return (
    <div className="res-menu">
      <h1>
        Restaurant Name: {resInfo?.data?.cards[2]?.card?.card?.info?.name}
      </h1>
      <h2>
        Cuisines:{" "}
        {resInfo?.data?.cards[2]?.card?.card?.info?.cuisines.join(",")}
      </h2>
      <p>{resInfo?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}</p>
    </div>
  );
};

export default Menu;
