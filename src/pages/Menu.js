import { useState } from "react";
import { useParams } from "react-router-dom";
import userRestaurantManu from "../utils/useRestaurantMenu";
import Shimmer from "../component/Body/Shimmer";
import { IMAGE_BASE_URL } from "../utils/constants";
import RestaurantCategory from "../component/Body/RestaurantCategory";

const Menu = () => {
  const { resId } = useParams();
  const resInfo = userRestaurantManu(resId);
  const [showIndex, setShowIndex] = useState(0);

  // ✅ Show shimmer while loading data
  if (!resInfo) {
    return <Shimmer />;
  }

  // ✅ Extract restaurant details safely
  const restaurantInfo = resInfo?.data?.cards?.[2]?.card?.card?.info;
  const menuItems =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
      ?.card?.card?.itemCards;

  const categories =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("categories", categories);
  if (!restaurantInfo) {
    return <p>No restaurant data available.</p>;
  }

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    restaurantInfo;
  return (
    <div className="text-center">
      {/* <div className=" bg-gray-100 m-4 p-4 rounded-md shadow-md"> */}
      <h1 className="my-10 text-2xl font-bold">{name}</h1>
      <h2 className="text-2xl m-5 font-bold">{cuisines?.join(", ")}</h2>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={showIndex === index ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
      {/* <p className="cost">{costForTwoMessage}</p> */}
      {/* </div> */}
      {/* <div className="flex flex-wrap w-full justify-between bg-gray-100 m-4 p-4 rounded-md shadow-md">
        {menuItems.map((menu) => (
          <MenuItem key={menu.card.info.id} item={menu.card.info} />
        ))}
      </div> */}
    </div>
  );
};

export default Menu;
