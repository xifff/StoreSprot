import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'; // Đảm bảo import file CSS của bạn
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faSearch, faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons'; // Thêm faBars, faTimes, faUser

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header bg-white shadow-sm sticky-top"> {/* Thêm sticky-top của Bootstrap */}
      <div className="container d-flex justify-content-between align-items-center py-3">
        {/* Logo */}
        <h2 className="logo mb-0">
          <Link to="/" className="text-decoration-none">Shop Shoes</Link>
        </h2>

        {/* Menu Toggle Button for Mobile */}
        <button
          className="navbar-toggler d-lg-none p-2" // Chỉ hiện thị trên mobile/tablet
          type="button"
          onClick={toggleMenu}
          aria-controls="main-navbar"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-dark" />
        </button>

        {/* Overlay for mobile menu (optional, for dimmed background) */}
        {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}

        {/* Menu chính - Dùng flexbox cho desktop, hidden trên mobile mặc định */}
        <nav className={`nav-menu d-none d-lg-flex align-items-center flex-grow-1 justify-content-center ${isMenuOpen ? 'mobile-menu-active' : ''}`} style={{ gap: '20px' }}>
          <NavLink to="/" end className="nav-link" onClick={closeMenu}>Trang chủ</NavLink>
          <NavLink to="/gioi-thieu" className="nav-link" onClick={closeMenu}>Giới thiệu</NavLink>
          <NavLink to="/san-pham" className="nav-link" onClick={closeMenu}>Sản phẩm</NavLink>
          <NavLink to="/tin-tuc" className="nav-link" onClick={closeMenu}>Tin tức</NavLink>
          <NavLink to="/lien-he" className="nav-link" onClick={closeMenu}>Liên hệ</NavLink>
        </nav>

        {/* Icon + auth - Dùng flexbox cho desktop, hidden trên mobile mặc định */}
        <div className="header-right d-none d-lg-flex align-items-center" style={{ gap: '15px' }}>
          <Link to="/tim-kiem" className="icon-link text-dark" aria-label="Tìm kiếm">
            <FontAwesomeIcon icon={faSearch} />
          </Link>
          <Link to="/yeu-thich" className="icon-link text-dark" aria-label="Yêu thích">
            <FontAwesomeIcon icon={faHeart} />
          </Link>
          <Link to="/gio-hang" className="icon-link text-dark" aria-label="Giỏ hàng">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
          <Link to="/dang-nhap" className="btn btn-outline-primary btn-sm">Đăng nhập</Link>
          <Link to="/dang-ky" className="btn btn-primary btn-sm">Đăng ký</Link>
        </div>

        {/* Mobile Menu Content (Appears when toggled) */}
        <div className={`mobile-menu-content d-lg-none ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-header d-flex justify-content-between align-items-center p-3">
            <span className="mobile-menu-title">Menu</span>
            <button className="close-menu-btn" onClick={closeMenu}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="mobile-menu-links p-3">
            <NavLink to="/" end className="nav-link-mobile" onClick={closeMenu}>Trang chủ</NavLink>
            <NavLink to="/gioi-thieu" className="nav-link-mobile" onClick={closeMenu}>Giới thiệu</NavLink>
            <NavLink to="/san-pham" className="nav-link-mobile" onClick={closeMenu}>Sản phẩm</NavLink>
            <NavLink to="/tin-tuc" className="nav-link-mobile" onClick={closeMenu}>Tin tức</NavLink>
            <NavLink to="/lien-he" className="nav-link-mobile" onClick={closeMenu}>Liên hệ</NavLink>
          </div>
          <div className="mobile-menu-auth p-3 border-top">
            <Link to="/tim-kiem" className="icon-link-mobile" onClick={closeMenu}>
              <FontAwesomeIcon icon={faSearch} /> Tìm kiếm
            </Link>
            <Link to="/yeu-thich" className="icon-link-mobile" onClick={closeMenu}>
              <FontAwesomeIcon icon={faHeart} /> Yêu thích
            </Link>
            <Link to="/gio-hang" className="icon-link-mobile" onClick={closeMenu}>
              <FontAwesomeIcon icon={faShoppingCart} /> Giỏ hàng
            </Link>
            <Link to="/dang-nhap" className="btn btn-outline-primary w-100 mb-2" onClick={closeMenu}>
                <FontAwesomeIcon icon={faUser} className="me-2" /> Đăng nhập
            </Link>
            <Link to="/dang-ky" className="btn btn-primary w-100" onClick={closeMenu}>
                <FontAwesomeIcon icon={faUser} className="me-2" /> Đăng ký
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;