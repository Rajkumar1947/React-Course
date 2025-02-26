import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "./../../utils/constants";

export default RestaurentCart = (props) => {
  const { data } = props;
  const { info } = data;
  const { id, name, avgRating, cuisines, costForTwo, cloudinaryImageId } = info;

  return (
    <div className="res-card">
      <Link to={"/restaurant/" + id}>
        <img
          src={IMAGE_BASE_URL + cloudinaryImageId}
          alt="res-logo"
          className="res-logo"
        />
        <h3>{name}</h3>
        <h4>{cuisines}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo} minues</h4>
      </Link>
    </div>
  );
};
