import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "./../../utils/constants";

const RestaurentCart = (props) => {
  const { data } = props;
  const { info } = data;
  const { id, name, avgRating, cuisines, costForTwo, cloudinaryImageId } = info;

  return (
    <div className="p-4 m-4 w-[250px] bg-gray-400 rounded-2xl">
      <Link to={"/restaurant/" + id}>
        <img
          className="rounded-lg"
          src={IMAGE_BASE_URL + cloudinaryImageId}
          alt="res-logo"
        />
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <ul className="p-2">
          {cuisines.map((cuisine, index) => {
            return (
              <li key={index} className="hover:to-red-400">
                - {cuisine}
              </li>
            );
          })}
        </ul>
        <p class="rating">⭐ {avgRating} Stars</p>
        <p class="price">{costForTwo}</p>
      </Link>
    </div>
  );
};

export const RestaurentCartPromoted = (RestaurentCart) => {
  return (props) => {
    <div>
      <label>Promoted</label>
      <RestaurentCart />
    </div>;
  };
};

export default RestaurentCart;
