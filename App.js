import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import ProductPage from "./components/ProductPage";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import CartPage from "./components/CartPage"; // Ensure CartPage is imported

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/cart" element={<CartPage />} /> {/* Cart route */}
      </Routes>
    </Router>
  );
}

export default App;
