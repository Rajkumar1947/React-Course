// import { useDispatch } from "react-redux";
import { IMAGE_BASE_URL } from "../../utils/constants";
// import { addItem } from "../../utils/store/cartSlice";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/store/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    console.log(item);
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                - ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 rounded-lg bg-white text-black shadow-lg font-extrabold"
                onClick={() => handleAddItem(item)}
              >
                Add more +
              </button>
            </div>
            <img
              src={IMAGE_BASE_URL + item?.card?.info?.imageId}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
