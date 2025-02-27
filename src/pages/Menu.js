import { useState } from "react";
import { useParams } from "react-router-dom";
import userRestaurantManu from "../utils/useRestaurantMenu";
import Shimmer from "../component/Body/Shimmer";
import { FaPlus, FaMinus } from "react-icons/fa"; // Import icons

const Menu = () => {
  const { resId } = useParams();
  const resInfo = userRestaurantManu(resId);

  // ✅ Show shimmer while loading data
  if (!resInfo) {
    return <Shimmer />;
  }

  // ✅ Extract restaurant details safely
  const restaurantInfo = resInfo?.data?.cards?.[2]?.card?.card?.info;
  const menuItems =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
      ?.card?.card?.itemCards;

  if (!restaurantInfo) {
    return <p>No restaurant data available.</p>;
  }

  const { name, cuisines, costForTwoMessage } = restaurantInfo;

  return (
    <div className="menu-container">
      <h1 className="restaurant-name">{name}</h1>
      <h2 className="cuisine">{cuisines?.join(", ")}</h2>
      <p className="cost">{costForTwoMessage}</p>

      <div className="menu-list">
        {menuItems.map((menu) => (
          <MenuItem key={menu.card.info.id} item={menu.card.info} />
        ))}
      </div>
    </div>
  );
};

// ✅ Menu Item Component with Expand/Collapse Feature
const MenuItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="menu-card">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/10/1/106f0bf5-0dcd-4c0e-999f-45ecbb3256b0_b8088cbc-c882-430c-9999-437f22ff2062.JPG"
        alt={item.name}
        className="menu-img"
      />

      <div className="menu-content">
        <h3>{item.name}</h3>
        <p className="price">₹{item.price}</p>

        {expanded && (
          <p className="description">Delicious {item.name} available now!</p>
        )}

        <div className="menu-actions">
          <button className="add-btn">Add</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
