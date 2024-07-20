import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserOrders } from '../services/operations/user';


const Orders = () => {
  const orders = useSelector((state) => state.order.orders);
  const dispatch = useDispatch();
  const userId = 'user-id'; // Replace with actual user ID

  useEffect(() => {
    dispatch(fetchUserOrders(userId));
  }, [dispatch, userId]);

  if (!orders.length) {
    return <div>No orders found.</div>;
  }

  return (
    <div>
      <h1 className="text-2xl mb-4">Orders</h1>
      <ul>
        {orders.map((order) => (
          <li key={order._id} className="border p-4 mb-4">
            <h2 className="text-xl font-semibold">Order ID: {order._id}</h2>
            {/* Add more details about the order */}
            <div className="mt-2">
              <p>Order Date: {new Date(order.createdAt).toLocaleDateString()}</p>
              {/* Map through products or details of each order */}
              {order.products && order.products.length > 0 ? (
                <ul>
                  {order.products.map((product) => (
                    <li key={product._id}>{product.name}</li>
                  ))}
                </ul>
              ) : (
                <p>No products found in this order.</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
