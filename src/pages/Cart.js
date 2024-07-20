import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="flex flex-col items-center p-4 bg-richblack-100 min-h-screen">
      {cart.length > 0 ? (
        <div className="flex flex-col md:flex-row w-full md:w-3/4">
          <div className="w-full md:w-3/4 md:pr-4 overflow-y-auto">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-lg h-fit md:ml-4">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Your Cart</h2>
              <h3 className="text-lg mb-2">Summary</h3>
              <p className="mt-2 text-gray-700">
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            <div className="mb-6">
              <p className="text-xl font-bold text-green-700">
                Total Amount: ${totalAmount.toFixed(2)}
              </p>
            </div>

            <button className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors duration-200">
              Check Out Now
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-2xl font-bold mb-4">Cart Empty</h1>
          <Link to="/">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
