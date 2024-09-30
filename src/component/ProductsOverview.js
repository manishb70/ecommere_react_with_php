import React, { useState } from 'react';
import img1 from '../Table Cover/60 round Frosted.png'
import { useParams } from 'react-router-dom';

const ProductOverview = () => {


     const {id}=useParams();



    return (
        <div className="max-w-8xl mx-auto md:p-8 p-2 bg-gray-100 shadow-lg rounded-lg">

                    <h1>{id}</h1>



            <div className="md:flex">
                {/* Product Image */}
                <div className="md:w-1/2 p-4">
                    <img
                        className="w-full h-auto object-cover rounded-lg cursor-pointer"
                        src={img1} // replace with your image link
                        alt="Product"
                    />

                    <div className='grid grid-cols-2 gap-5 mt-5'>
                        <img
                            className="w-4/4 h-auto object-cover rounded-lg cursor-pointer"
                            src={img1} // replace with your image link
                            alt="Product"
                        />
                        <img
                            className="w-4/4 h-auto object-cover rounded-lg cursor-pointer"
                            src={img1} // replace with your image link
                            alt="Product"
                        />
                    </div>
                </div>

                {/* Product Info */}
                <div className="md:w-1/2 p-4">
                    <h2 className="text-3xl font-semibold mb-4">Frosted Sheer</h2>
                    <p className="text-gray-600 mb-2">
                        This range is fabricated by skilled craftsman using top quality raw material that we obtain from reliable merchants of the market.
                    </p>
                    {/* <div className='flex gap-x-2 mt-5'>
                        <p className="text-lg font-bold text-gray-900 mb-4">Price : &#8377;399</p>
                        <p class="text-lg font-medium text-gray-500 line-through dark:text-gray-300">&#8377;499</p>
                    </div> */}

                    {/* <div>
                        <span className='text-md'>Qty : </span>
                        <input type='number' className='w-20 h-7 rounded-full focus:outline-none' placeholder='0' value={1} />
                    </div> */}

                    {/* Color Options */}
                    {/* <div className="mb-4">
                        <span className="text-gray-700 font-semibold">Select Color:</span>
                        <div className="flex items-center space-x-2 mt-2">
                            <div className="w-6 h-6 bg-black rounded-full cursor-pointer"></div>
                            <div className="w-6 h-6 bg-red-600 rounded-full cursor-pointer"></div>
                            <div className="w-6 h-6 bg-yellow-500 rounded-full cursor-pointer"></div>
                            <div className="w-6 h-6 bg-blue-500 rounded-full cursor-pointer"></div>
                        </div>
                    </div> */}

                    {/* Size Options */}
                    <div className="mb-4 mt-5">
                        <span className="text-gray-700 font-semibold">Select Size:</span>
                        <div className="flex items-center space-x-2 mt-2">
                            {/* <button className="px-4 py-2 border rounded-md active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-3000">45 x 70</button>
                            <button className="px-4 py-2 border rounded-md focus:outline-none hover:bg-gray-100">40 x 60 </button>
                            <button className="px-4 py-2 border rounded-md focus:outline-none hover:bg-gray-100">60 Rounds</button> */}
                        </div>
                        <div className='md:w-3/4 w-full flex items-center justify-between'>
                            <div>
                                <input type='checkbox' className='focus-ring-1' />
                            </div>
                            <div>
                                <label className='font-semibold md:text-md text-sm'>45 x70</label>
                            </div>
                            <div>
                                {/* <div className='w-20 h-5 flex  items-center  border border-black bg-white flex ml-5' >₹
                                    <input type='number' className='focus-ring-1 bg-white  outline-none border-none h-full w-full h-full text-xs ' value={399} disabled />
                                </div> */}

                                <label className='font-semibold ml-5 md:text-sm text-xs'>Price : &#8377; 399</label>
                            </div>
                            <div>
                                <input type='number' className='focus-ring-1 md:w-20 w-14 h-5 pt-2 px-1 text-xs' placeholder='Qty' />
                            </div>
                            <div>
                                <input type='number' className='focus-ring-1 md:w-20 w-14 h-5 pt-2 px-1 text-xs' placeholder='Amount' />
                            </div>
                        </div>
                        <div className='md:w-3/4 w-full flex items-center gap-x-2 justify-between'>
                            <div>
                                <input type='checkbox' className='focus-ring-1' />
                            </div>
                            <div>
                                <label className='font-semibold md:text-md text-sm'>40 x60</label>
                            </div>
                            <div>
                                {/* <div className='w-20 h-5 flex  items-center  border border-black bg-white flex ml-5' >₹
                                    <input type='number' className='focus-ring-1 bg-white  outline-none border-none h-full w-full h-full text-xs ' value={399} disabled />
                                    </div> */}

                                <label className='font-semibold ml-5  md:text-sm text-xs'>Price : &#8377; 499</label>
                            </div>
                            <div>
                                <input type='number' className='focus-ring-1  md:w-20 w-14 h-5 pt-2 px-1 text-xs' placeholder='Qty' />
                            </div>
                            <div>
                                <input type='number' className='focus-ring-1 md:w-20 w-14 h-5 pt-2 px-1 text-xs' placeholder='Amount' />
                            </div>
                        </div>
                        <div className='md:w-3/4 w-full flex items-center gap-x-2 justify-between'>
                            <div>
                                <input type='checkbox' className='focus-ring-1' />
                            </div>
                            <div>
                                <label className='font-semibold md:text-md text-sm'>60 Round</label>
                            </div>
                            <div>
                                {/* <div className='w-20 h-5 flex  items-center  border border-black bg-white flex' >₹
                                    <input type='number' className='focus-ring-1 bg-white  outline-none border-none h-full w-full h-full text-xs ' value={399} disabled />
                                </div> */}

                                <label className='font-semibold  md:text-sm text-xs'>Price : &#8377; 599</label>

                            </div>
                            <div>
                                <input type='number' className='focus-ring-1 md:w-20 w-14 h-5 pt-2 px-1 text-xs' placeholder='Qty' />
                            </div>
                            <div>
                                <input type='number' className='focus-ring-1 md:w-20 w-14 h-5 pt-2 px-1 text-xs' placeholder='Amount' />
                            </div>
                        </div>

                    </div>

                    {/* Product Description */}
                    <div className="mb-4">
                        <h3 className="text-gray-700 font-semibold">Product Description:</h3>
                        <p className="text-gray-600 mt-2">
                            In order to match up the varied requirements of valued clients, we are affianced in offering a remarkable range of Fancy Table Cover.

                        </p>
                        
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4 mt-6">
                        <button className="px-6 py-3 w-2/4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 focus:outline-none">
                            Add to Cart
                        </button>
                        <button className="px-6 py-3 w-2/4 bg-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-300 focus:outline-none">
                            Wishlist
                        </button>
                    </div>
                    <div className='mt-5'>

                        {/* <button className="px-6 py-3 w-full bg-blue-800 text-white font-semibold rounded-full hover:bg-blue-700 focus:outline-none">
                            Buy Now
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductOverview;
