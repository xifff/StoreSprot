import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'; // nếu cần custom CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header bg-white shadow-sm">
      <div className="container d-flex justify-between align-items-center py-3">
        {/* Logo */}
        <h2 className="logo mb-0">
          <Link to="/" className="text-dark text-decoration-none">Shop Shoes</Link>
        </h2>

        {/* Menu chính */}
        <nav className="nav-menu d-flex align-items-center flex-grow-1 justify-center" style={{ gap: '20px' }}>
          <NavLink to="/" end className="nav-link">Trang chủ</NavLink>
          <NavLink to="/gioi-thieu" className="nav-link">Giới thiệu</NavLink>
          <NavLink to="/san-pham" className="nav-link">Sản phẩm</NavLink>
          <NavLink to="/tin-tuc" className="nav-link">Tin tức</NavLink>
          <NavLink to="/lien-he" className="nav-link">Liên hệ</NavLink>
        </nav>

        {/* Icon + auth */}
        <div className="header-right d-flex align-items-center" style={{ gap: '15px' }}>
          <Link to="/tim-kiem" className="icon-link text-dark">
            <FontAwesomeIcon icon={faSearch} />
          </Link>
          <Link to="/yeu-thich" className="icon-link text-dark">
            <FontAwesomeIcon icon={faHeart} />
          </Link>
          <Link to="/gio-hang" className="icon-link text-dark">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
          <Link to="/dang-nhap" className="btn btn-outline-primary btn-sm">Đăng nhập</Link>
          <Link to="/dang-ky" className="btn btn-primary btn-sm">Đăng ký</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
