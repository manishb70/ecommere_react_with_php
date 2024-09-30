import React from "react";
import Sidebar from "../sidebar";

function Dashbord() {

    return (


        <>


                    <Sidebar />

            <div className="p-6 bg-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-lg font-semibold">Total Sales</h2>
                        <p className="mt-4 text-2xl">24,549</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-lg font-semibold">Total Income</h2>
                        <p className="mt-4 text-2xl">&#x20b9;52,340</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-lg font-semibold">Total Order</h2>
                        <p className="mt-4 text-2xl">8,120</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-lg font-semibold">Pending Order</h2>
                        <p className="mt-4 text-2xl">3,120</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 bg-gray-100 md:grid-cols-2 lg:grid-cols-3 gap-6  px-7">
                {/* Recent Orders */}
                <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Recent Orders</h3>
                    <ul className="space-y-4">
                        <li className="flex justify-between">
                            <div>
                                <h4 className="font-semibold text-gray-800">Order #12345</h4>
                                <p className="text-gray-600">Shipped on 25th Sep 2023</p>
                            </div>
                            <p className="text-gray-700">$125.00</p>
                        </li>
                        <li className="flex justify-between">
                            <div>
                                <h4 className="font-semibold text-gray-800">Order #12346</h4>
                                <p className="text-gray-600">Processing</p>
                            </div>
                            <p className="text-gray-700">$85.50</p>
                        </li>
                        <li className="flex justify-between">
                            <div>
                                <h4 className="font-semibold text-gray-800">Order #12347</h4>
                                <p className="text-gray-600">Delivered on 20th Sep 2023</p>
                            </div>
                            <p className="text-gray-700">$199.99</p>
                        </li>
                    </ul>
                </div>

                {/* Notifications */}
                <div className="bg-white  p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Notifications</h3>
                    <ul className="space-y-4">
                        <li className="text-gray-700">New order received - #12348</li>
                        <li className="text-gray-700">Stock low for product: Widget Pro</li>
                        <li className="text-gray-700">Customer inquiry from Jane Doe</li>
                    </ul>
                </div>
            </div>

            {/* Chart Section */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Sales Overview</h3>
                <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    {/* Placeholder for a chart */}
                    <p className="text-gray-600">Chart Placeholder</p>
                </div>
            </div>



        </>


    );
}

export default Dashbord;