import { IMAGE_BASE_URL } from "./../../utils/constants";

export default RestaurentCart = (props) => {
  const { data } = props;
  const { info } = data;
  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId } = info;
  // const {name}
  console.log("cloudinaryImageId", cloudinaryImageId);
  // console.log(restaurents);
  // const {name, cuisine,avgRaiting, deliveryTime} = resList?.data
  return (
    <div className="res-card">
      <img
        src={IMAGE_BASE_URL + cloudinaryImageId}
        alt="res-logo"
        className="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo} minues</h4>
    </div>
  );
};
