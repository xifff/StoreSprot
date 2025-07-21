import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'; // nếu cần custom CSS

const Header = () => {
  return (
   <header className="header bg-white shadow-sm">
      <div className="container d-flex justify-between align-items-center py-3">
        <h2 className="logo">
          <Link to="/" className="text-dark text-decoration-none">STORE SPORT</Link>
        </h2>

        <nav className="nav d-flex align-items-center" style={{ gap: '20px' }}>
          <NavLink to="/" end className="nav-link">Trang chủ</NavLink>
          <NavLink to="/gioi-thieu" className="nav-link">Giới thiệu</NavLink>
          <NavLink to="/san-pham" className="nav-link">Sản phẩm</NavLink>
          <NavLink to="/tin-tuc" className="nav-link">Tin tức</NavLink>
          <NavLink to="/lien-he" className="nav-link">Liên hệ</NavLink>
        </nav>

        <div className="auth-buttons d-flex align-items-center" style={{ gap: '10px' }}>
          <Link to="/dang-nhap" className="btn btn-outline-primary">Đăng nhập</Link>
          <Link to="/dang-ky" className="btn btn-primary">Đăng ký</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
