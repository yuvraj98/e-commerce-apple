import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../slices/cartSlices";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md my-2">
      <div className="w-1/4">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-24 object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-between w-3/4 pl-4">
        <h1 className="text-lg font-semibold">{item.title}</h1>
        <p className="text-gray-600">{item.description}</p>
        <div className="flex items-center justify-between mt-2">
          <p className="text-xl font-bold text-green-600">${item.price}</p>
          <button
            onClick={removeFromCart}
            className="text-red-600 hover:text-red-800 transition-colors duration-200"
          >
            <FcDeleteDatabase size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
