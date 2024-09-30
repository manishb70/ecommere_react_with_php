// src/components/MainContent.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import AddProduct from './Ecommerce/addProduct';
import ProductList from './Ecommerce/productList';
import AddCategory from './Category/addCategory';
import CategoryList from './Category/categoryList';
import UserList from './User/userList';
import Dashboard from './Dashboard/Dashbord';

const MainContent = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/product-list" element={<ProductList />} />
                <Route path="/add-category" element={<AddCategory />} />
                <Route path="/category-list" element={<CategoryList />} />
                <Route path="/user-list" element={<UserList />} />
            </Routes>
        </Router>
    );
}

export default MainContent;
