import { useDispatch, useSelector } from "react-redux";
import ItemList from "../component/Body/ItemList";
import { removeItem } from "../utils/store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(removeItem());
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Cart</h1>
        <button
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          onClick={() => handleClear()}
        >
          Clear
        </button>
      </div>
      {cartItems.length === 0 ? (
        <h1>Please add item to cart</h1>
      ) : (
        <div className="space-y-6 m-auto border p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition">
          <ItemList items={cartItems} />
        </div>
      )}
    </div>
  );
};

export default Cart;
