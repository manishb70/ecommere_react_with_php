import React from 'react';
import Filter from './Filter'

const orders = [
  {
    id: '6543',
    date: '2023-09-26',
    productName: 'Kitchen Apron with Cap',
    status: 'Shipped',
    total: '₹770.00',
  },
  {
    id: '12346',
    date: '2023-09-10',
    productName: 'Washing Machine Cover',
    status: 'Processing',
    total: '₹85.00',
  },
  {
    id: '12347',
    date: '2023-09-08',
    productName: 'Table Cover 40 x 40 ',
    status: 'Delivered',
    total: '₹99.99',
  },
  {
    id: '12347',
    date: '2023-09-08',
    productName: 'Fridge Cover',
    status: 'Delivered',
    total: '₹99.99',
  },
];

const OrderSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-5 mx-3 md:mx-6">
      <div className='flex justify-between'>
        <h2 className="text-2xl font-semibold mb-6">My Orders </h2>
        <Filter />
      </div>

      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 items-center">
              {/* Order ID */}
              <div>
                <h4 className="font-semibold text-gray-700">Order #{order.id}</h4>
                <p className="text-gray-600">Date: {order.date}</p>
              </div>

              {/* Order Total */}
              <div>
                <h4 className="font-semibold text-gray-700">Products Name</h4>
                <p className="text-gray-600">{order.productName}</p>
              </div>

              {/* Order Status */}
              <div>
                <h4 className="font-semibold text-gray-700">Status</h4>
                <p className={`text-${order.status === 'Delivered' ? 'green' : 'yellow'}-600`}>
                  {order.status}
                </p>
              </div>

              {/* Order Total */}
              <div>
                <h4 className="font-semibold text-gray-700">Total</h4>
                <p className="text-gray-600">{order.total}</p>
              </div>

              {/* View Details Button */}
              <div className="text-center md:text-left">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderSection;
