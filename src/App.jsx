import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import './App.css';

// Pages
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import OurMenu from './Pages/OurMenu';
import Cart from './Pages/Cart';
import Success from './Pages/Success';
import NotFound from './Pages/NotFound';
import CashOnDelivery from './Pages/CashOnDelivery';
import OnlinePayment from './Pages/OnlinePayment';
import CardPayment from './Pages/CardPayment'; // ✅ Added Card Payment page

// Auth Components
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import ResetPassword from './Components/ResetPassword/ResetPassword';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect to login by default */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        {/* Main application routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/ourmenu" element={<OurMenu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cash-on-delivery" element={<CashOnDelivery />} />
        <Route path="/online-payment" element={<OnlinePayment />} />
        <Route path="/card-payment" element={<CardPayment />} /> {/* ✅ Card payment route */}

        {/* Catch-all for undefined routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Toaster position="top-right" />
    </Router>
  );
};

export default App;
