// src/components/Sidebar.js
import React, { useState } from 'react';
import { FaChartBar, FaShoppingCart, FaUser } from 'react-icons/fa';
import { BiCategory } from "react-icons/bi";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import Navigation from './Navigation';
import { Link } from 'react-router-dom';



const Sidebar = ({ isOpen, toggleSidebar }) => {
    // State for the currently open dropdown
    const [openDropdown, setOpenDropdown] = useState(null);

    // Function to toggle dropdowns
    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    return (
        <div className={`lg:static top-0 left-0 ${isOpen ? 'w-64' : 'w-12'} bg-gray-800 text-white transition-width duration-300 z-40`}>
            {/* Toggle button */}
            <div className="flex justify-between items-center p-4">
                <h2 className={`text-2xl font-bold ${isOpen ? 'block' : 'hidden'}`}>Admin</h2>
                <button onClick={toggleSidebar} className="lg:hidden text-white focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                <button onClick={toggleSidebar} className="hidden lg:block text-white focus:outline-none">
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="4 0  24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Sidebar Links */}
            <ul className="mt-8">
                {/* <Navigation /> */}


                {/* Dashboard Dropdown */}
                <li className="relative">
                    <button
                        onClick={() => toggleDropdown('dashboard')}
                        className={`flex items-center w-full px-4 py-2 hover:bg-gray-700 ${isOpen ? 'text-base' : 'text-sm'}`}
                    >
                        <FaChartBar />
                        {isOpen && <span className="ml-3">Dashboard</span>}


                        {isOpen && (openDropdown === 'dashboard' ? <IoMdArrowDropup className="ml-auto" /> : <IoMdArrowDropdown className="ml-auto" />)}
                    </button>
                    {openDropdown === 'dashboard' && (
                        <ul className={`ml-8 mt-2 ${isOpen ? 'block' : 'hidden'}`}>
                            <li>
                                <a href="#" className="flex items-center px-4 py-2 text-sm hover:bg-gray-700">
                                    Analytics
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center px-4 py-2 text-sm hover:bg-gray-700">
                                    Reporting
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center px-4 py-2 text-sm hover:bg-gray-700">
                                    Projects
                                </a>
                            </li>
                        </ul>
                    )}
                </li>

                {/* Ecommerce Dropdown */}
                <li className="relative">
                    <button
                        onClick={() => toggleDropdown('ecommerce')}
                        className={`flex items-center mt-3 w-full px-4 py-2 hover:bg-gray-700 ${isOpen ? 'text-base' : 'text-sm'}`}
                    >
                        <FaShoppingCart />
                        {isOpen && <span className="ml-3">Ecommerce</span>}

                        {isOpen && (openDropdown === 'ecommerce' ? <IoMdArrowDropup className="ml-auto" /> : <IoMdArrowDropdown className="ml-auto" />)}
                    </button>
                    {openDropdown === 'ecommerce' && (
                        <ul className={`ml-8 mt-2 ${isOpen ? 'block' : 'hidden'}`}>
                            <li>
                                <a href="#" className="flex items-center px-4 py-2 text-sm hover:bg-gray-700">
                                    Add Prodcuts
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center px-4 py-2 text-sm hover:bg-gray-700">
                                    Prodcuts List
                                </a>
                            </li>
                        </ul>
                    )}
                </li>

                {/* Categories Dropdown */}
                <li className="relative">
                    <button
                        onClick={() => toggleDropdown('categories')}
                        className={`flex items-center mt-3 w-full px-4 py-2 hover:bg-gray-700 ${isOpen ? 'text-base' : 'text-sm'}`}
                    >
                        <BiCategory />
                        {isOpen && <span className="ml-3">Categories</span>}

                        {isOpen && (openDropdown === 'categories' ? <IoMdArrowDropup className="ml-auto" /> : <IoMdArrowDropdown className="ml-auto" />)}
                    </button>
                    {openDropdown === 'categories' && (
                        <ul className={`ml-8 mt-2 ${isOpen ? 'block' : 'hidden'}`}>
                            <li>
                                <a href="#" className="flex items-center px-4 py-2 text-sm hover:bg-gray-700">
                                    Add Category
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center px-4 py-2 text-sm hover:bg-gray-700">
                                    Manage Categories
                                </a>
                            </li>
                        </ul>
                    )}
                </li>


                {/* User Dropdown */}
                <li className="relative">
                    <button
                        onClick={() => toggleDropdown('user')}
                        className={`flex items-center mt-3 w-full px-4 py-2 hover:bg-gray-700 ${isOpen ? 'text-base' : 'text-sm'}`}
                    >
                        <FaUser />
                        {isOpen && <span className="ml-3">User</span>}

                        {isOpen && (openDropdown === 'user' ? <IoMdArrowDropup className="ml-auto" /> : <IoMdArrowDropdown className="ml-auto" />)}
                    </button>
                    {openDropdown === 'user' && (
                        <ul className={`ml-8 mt-2 ${isOpen ? 'block' : 'hidden'}`}>
                            <li>
                                <a href="#" className="flex items-center px-4 py-2 text-sm hover:bg-gray-700">
                                    All User
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center px-4 py-2 text-sm hover:bg-gray-700">
                                    Settings
                                </a>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
