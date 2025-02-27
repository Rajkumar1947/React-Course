import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "./../../utils/constants";

export default RestaurentCart = (props) => {
  const { data } = props;
  const { info } = data;
  const { id, name, avgRating, cuisines, costForTwo, cloudinaryImageId } = info;

  return (
    <div className="restaurant-card">
      <Link to={"/restaurant/" + id}>
        <img src={IMAGE_BASE_URL + cloudinaryImageId} alt="res-logo" />
        <h3>{name}</h3>
        <p>{cuisines.join(",")}</p>
        <p class="rating">⭐ {avgRating} Stars</p>
        <p class="price">{costForTwo}</p>
      </Link>
    </div>
  );
};
