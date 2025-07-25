import React from 'react';
import { Link } from 'react-router-dom'; // Dùng Link từ react-router-dom cho điều hướng nội bộ

// Import Font Awesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import các icon bạn muốn sử dụng từ free-brands-svg-icons (mạng xã hội)
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faPinterestP
} from '@fortawesome/free-brands-svg-icons';
// Import các icon bạn muốn sử dụng từ free-solid-svg-icons (số điện thoại, email, địa chỉ, giờ làm)
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
  faClock
} from '@fortawesome/free-solid-svg-icons';


import './Footer.css'; // Đảm bảo import file CSS của bạn

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container py-5">
        <div className="row">

          {/* Cột 1: Logo và Giới thiệu ngắn */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h3 className="footer-logo">Shop Shoes</h3>
            <p className="footer-description">
              Shop Shoes là điểm đến hàng đầu cho những đôi giày chất lượng cao và phong cách đa dạng.
              Chúng tôi cam kết mang đến sự tự tin và thoải mái trên mọi bước đường của bạn.
            </p>
            <div className="social-icons mt-4">
              {/* Sử dụng FontAwesomeIcon cho các biểu tượng mạng xã hội */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                <FontAwesomeIcon icon={faPinterestP} />
              </a>
            </div>
          </div>

          {/* Cột 2: Liên kết nhanh */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h4 className="footer-title">Liên Kết Nhanh</h4>
            <ul className="footer-links list-unstyled">
              <li><Link to="/gioi-thieu">Về Chúng Tôi</Link></li>
              <li><Link to="/san-pham">Sản Phẩm</Link></li>
              <li><Link to="/tin-tuc">Tin Tức</Link></li>
              <li><Link to="/lien-he">Liên Hệ</Link></li>
              <li><Link to="/chinh-sach-bao-mat">Chính Sách Bảo Mật</Link></li>
              <li><Link to="/chinh-sach-doi-tra">Chính Sách Đổi Trả</Link></li>
            </ul>
          </div>

          {/* Cột 3: Thông tin liên hệ */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h4 className="footer-title">Thông Tin Liên Hệ</h4>
            <address className="footer-contact-info">
              {/* Sử dụng FontAwesomeIcon cho các biểu tượng thông tin liên hệ */}
              <p><FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" /> 123 Đường ABC, Quận XYZ, TP. Cần Thơ</p>
              <p><FontAwesomeIcon icon={faPhoneAlt} className="info-icon" /> <a href="tel:+84901234567">090 123 4567</a></p>
              <p><FontAwesomeIcon icon={faEnvelope} className="info-icon" /> <a href="mailto:info@shopshoes.com">info@shopshoes.com</a></p>
              <p><FontAwesomeIcon icon={faClock} className="info-icon" /> Thứ 2 - Thứ 7: 8:00 - 18:00</p>
            </address>
          </div>

          {/* Cột 4: Đăng ký nhận tin */}
          <div className="col-lg-3 col-md-6">
            <h4 className="footer-title">Đăng Ký Nhận Tin</h4>
            <p className="newsletter-text">Nhận thông tin ưu đãi và sản phẩm mới nhất từ Shop Shoes!</p>
            <form className="newsletter-form">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Nhập email của bạn"
                  aria-label="Email của bạn"
                />
                <button className="btn btn-newsletter" type="submit">Đăng Ký</button>
              </div>
            </form>
            {/* Nếu bạn muốn hiển thị các biểu tượng thanh toán (Font Awesome), hãy thêm lại chúng tại đây.
                Lưu ý: Bạn cần import thêm các icon này (ví dụ: faCcVisa, faCcMastercard)
                và thêm CSS cho chúng nếu muốn tùy chỉnh.
            */}
            {/*
            <div className="payment-icons mt-3">
                <FontAwesomeIcon icon={faCcVisa} className="payment-icon" />
                <FontAwesomeIcon icon={faCcMastercard} className="payment-icon" />
                <FontAwesomeIcon icon={faCcPaypal} className="payment-icon" />
            </div>
            */}
          </div>

        </div> {/* End row */}
      </div> {/* End container */}

      {/* Footer Bottom - Bản quyền */}
      <div className="footer-bottom py-3">
        <div className="container text-center">
          <p className="mb-0">© {new Date().getFullYear()} Shop Shoes. Tất cả bản quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Chỉ giữ lại DUY NHẤT dòng này. Xóa bất kỳ dòng nào khác tương tự.