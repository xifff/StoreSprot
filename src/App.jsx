// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './Pages/HomePages/HomePage.jsx';
import About from './Pages/Abouts/About.jsx';
import Product from './Pages/Products/ProductPage.jsx';
import News from './Pages/News/NewPage.jsx';
import ContactPage from './Pages/Contacts/Contact.jsx';
import NewsPage from './Pages/News/NewPage.jsx';
import OrderDetailPage from './Pages/OrderDetails/OrderDetail.jsx';
import Login from './Pages/Logins/Login.jsx';
import Register from './Pages/Registers/Register.jsx';
import FavoritePage from './Pages/Favorites/Favorite.jsx';
import Cart from './Pages/CartPages/Cart.jsx';
import AccountPage from './Pages/AccountPages/AccountPage.jsx';
import ProductDetail from './Pages/ProductDetail/ProductDetail.jsx';
import AdminDashboard from './Pages/Admin/Index/Index.jsx';
import CategoryListPage from './Pages/Admin/Category/Category.jsx';
import OrderListPage from './Pages/Admin/OrderList/OrderListPage.jsx';
import PostListPage from './Pages/Admin/PostList/PostListPage.jsx';
import ProductListPage from './Pages/Admin/Product/ProductListPage.jsx';
import UserList from './Pages/Admin/UserList/UserListPage.jsx';
import PromotionListPage from './Pages/Admin/Promotion/PromotionList.jsx';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gioi-thieu" element={<About />} />
        <Route path="/san-pham" element={<Product />} />
        <Route path="/tin-tuc" element={<NewsPage />} />
        <Route path="/lien-he" element={<ContactPage />} />
        <Route path="/tai-khoan/lich-su-giao-dich" element={<OrderDetailPage />} />
        <Route path="/dang-nhap" element={<Login />} />
        <Route path="/dang-ky" element={<Register />} />
        <Route path="/yeu-thich" element={<FavoritePage />} />
        <Route path="/gio-hang" element={<Cart />} />
        <Route path="/tai-khoan" element={<AccountPage />} />
        <Route path='/chi-tiet-san-pham' element={<ProductDetail />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/categories" element={<CategoryListPage />} />
        <Route path="/admin/orders" element={<OrderListPage />} />
        <Route path="/admin/posts" element={<PostListPage />} />
        <Route path='/admin/products' element={<ProductListPage />} />
        <Route path="/admin/users" element={<UserList />} />
        <Route path='admin/promotions' element={<PromotionListPage />} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
