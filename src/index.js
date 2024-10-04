import React from 'react';

import './index.css';
import './output.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './component/home';
import ReactDom from 'react-dom';
import FridgeTopCover from './ProductViewPage/FridgeTopCoverView';
import TableCover from './ProductViewPage/TableCover';
import Login from './component/login';
import KitchenApron from './ProductViewPage/KitchenApronView';
import ProductOverview from './component/ProductsOverview';
import Wishlist from './component/Wishlist';
import WashingMachineView from './ProductViewPage/WashingMachineCoverView';
import Cart from './component/cart';
import Checkout from './component/checkout';
import Receipt from './component/Receipt';
import DashboardSection from './userDashbord/Dashbord';
import UserSidebar from './userDashbord/UserSidebar';
import Dashbord from './admin/Dashboard/Dashbord';
import DashboardMain from './admin/DashboardMain';
import Error from './component/Error';
import ForgotPassword from './component/ForgetPassword';




ReactDom.render(
  <React.StrictMode>
    <Router>

      <Routes>
        <Route path="/" element={<Layout />}>


          <Route path="" element={<Home />} />
          <Route path="/table-top" element={<TableCover />} />
          <Route path="/kitchen-apron" element={<KitchenApron />} />
          <Route path="/fridge-top-cover" element={<FridgeTopCover />} />
          <Route path="/ProductOverview" element={<ProductOverview />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/washing-machine-cover" element={<WashingMachineView />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/checkout" element={<Checkout />} />
          <Route path="/cart/checkout/receipt" element={<Receipt />} />
          <Route path="/dashboard" element={<UserSidebar />} />
          <Route path="/admin" element={<DashboardMain />} />
          <Route path="*" element={<Error/>} />
          <Route path="/forgetPassword" element={<ForgotPassword/>} />




        </Route>
      </Routes>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

