// Wishlist.jsx
import React, { useState } from 'react';
import img1 from '../Apron/apron with cap and checks.png'
import img2 from '../Apron/apron with cap.png'
import img3 from '../Apron/check both side cloth.png'


const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Ktchen Apron Check',
      price: 399,
      image: [img1],
    },
    {
      id: 2,
      name: 'Kitchen Apron with Cap',
      price: 399,
      image: [img2],
    },
    {
      id: 3,
      name: 'Kitchen Both side Check',
      price: 299,
      image: [img3],
    },
    {
      id: 4,
      name: 'Kitchen Both side Check',
      price: 199,
      image: [img3],
    },
  ]);

  const removeItem = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-gray-50 p-5 max-w-8xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Wishlist</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlistItems.length > 0 ? (
          wishlistItems.map((item) => (
            <div key={item.id} className="bg-white shadow-md rounded-lg p-4">
              <img
                src={item.image}
                alt={item.name}
                className="h-40 w-full object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-700 mb-4">&#x20b9;{item.price.toFixed(2)}</p>
              <button
                onClick={() => removeItem(item.id)}
                className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Remove 
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
