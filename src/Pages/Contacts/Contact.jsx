// src/Pages/Contacts/Contact.jsx
import React from 'react';
import './Contact.css';

const ContactPage = () => {
  return (
    <main className="main" id="main-content">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/"><i className="icon-home"></i>Trang chủ</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Liên hệ</li>
          </ol>
        </div>
      </nav>

      <div className="container">
        {/* Map */}
        {/* Di chuyển bản đồ lên trên */}
        <div id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.633801262925!2d105.77663237599728!3d21.04705598734015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454ce4f395729%3A0x7052914199c0d9c4!2zQ2FvIMSQ4bqzbmcgRlBUIFBvbHl0ZWNobmljIEtp4buBdSBNYWk!5e0!3m2!1svi!2svn!4v1721540306121!5m2!1svi!2svn"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>

        {/* New section for Contact Form and Contact Info */}
        <div className="contact-section-bottom row"> {/* Thêm class 'row' của Bootstrap để dễ dàng chia cột */}
          {/* Contact Form */}
          <div className="col-md-6"> {/* Chia 6 cột cho form */}
            <h2 className="light-title">Viết cho <strong>chúng tôi</strong></h2>
            <form>
              <div className="form-group required-field">
                <label htmlFor="contact-name">Họ tên</label>
                <input type="text" className="form-control" id="contact-name" name="contact-name" required />
              </div>

              <div className="form-group required-field">
                <label htmlFor="contact-email">Email</label>
                <input type="email" className="form-control" id="contact-email" name="contact-email" required />
              </div>

              <div className="form-group">
                <label htmlFor="contact-phone">Số điện thoại</label>
                <input type="tel" className="form-control" id="contact-phone" name="contact-phone" />
              </div>

              <div className="form-group required-field">
                <label htmlFor="contact-message">Nội dung</label>
                <textarea cols="30" rows="4" id="contact-message" className="form-control" name="contact-message" required></textarea>
              </div>

              <div className="form-footer">
                <button type="submit" className="btn btn-primary">Gửi đi</button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-md-6 contact-info-wrapper-col"> {/* Chia 6 cột cho info, thêm class để styling */}
            <h2 className="light-title"><strong>Thông tin liên hệ</strong></h2>
            <div className="contact-info">
              <div>
                <i className="icon-mobile"></i>
                <p><a href="tel:034xxxxx51">034xxxxx51</a></p>
              </div>
              <div>
                <i className="icon-mail-alt"></i>
                <p><a href="mailto:ducphamxxxxxxxx@gmail.com">ducphamxxxxxxxx@gmail.com</a></p>
              </div>
              {/* Thêm địa chỉ nếu có */}
              <div>
                <i className="icon-location-pin"></i> {/* Giả sử có icon này hoặc bạn có thể tạo */}
                <p>P. Kiều Mai, Phúc Diễn, Từ Liêm, Hà Nội</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8"></div>
    </main>
  );
};

export default ContactPage;