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

          {/* Cột 2 + 3: Liên kết nhanh & Thông tin liên hệ */}
          <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
            <div className="row footer-links-contact">
              {/* Cột Liên Kết Nhanh */}
              <div className="col-md-6 mb-4 mb-md-0">
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

              {/* Cột Thông Tin Liên Hệ */}
              <div className="col-md-6">
                <h4 className="footer-title">Thông Tin Liên Hệ</h4>
                <address className="footer-contact-info">
                  <p><FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" /> 123 Đường ABC, Quận XYZ, TP. Cần Thơ</p>
                  <p><FontAwesomeIcon icon={faPhoneAlt} className="info-icon" /> <a href="tel:+84901234567">090 123 4567</a></p>
                  <p><FontAwesomeIcon icon={faEnvelope} className="info-icon" /> <a href="mailto:info@shopshoes.com">info@shopshoes.com</a></p>
                  <p><FontAwesomeIcon icon={faClock} className="info-icon" /> Thứ 2 - Thứ 7: 8:00 - 18:00</p>
                </address>
              </div>
            </div>
          </div>

          {/* Cột 4: Đăng ký nhận tin */}
        

        </div> {/* End row */}
      </div> {/* End container */}

      {/* Footer Bottom - Bản quyền */}
      
    </footer>
  );
};

export default Footer;