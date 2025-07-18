// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './Pages/HomePages/HomePage.jsx';
import About from './Pages/Abouts/About.jsx';
import Product from './Pages/Products/Product.jsx';
import News from './Pages/News/New.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gioi-thieu" element={<About />} />
        <Route path="/san-pham" element={<Product />} />
        <Route path="/tin-tuc" element={<News />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
