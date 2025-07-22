import React from "react";
import "./Contact.css";

const ContactPage = () => {
  return (
    <main className="main" id="main-content">
      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">
                <i className="icon-home"></i>
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Liên hệ
            </li>
          </ol>
        </div>
      </nav>

      <div className="container">
        <div id="map" className="mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.7954162001533!2d105.74830747599873!3d21.040870387361114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455efa4cf5ec3%3A0xde9952da2cd8294!2sTUNZO!5e0!3m2!1svi!2s!4v1731429946877!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>

        <div className="row contact-container">
          <div className="col-md-8 contact-form">
            <h2 className="light-title">
              Write <strong>Us</strong>
            </h2>
            <form>
              <div className="form-group required-field">
                <label htmlFor="contact-name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="contact-name"
                  required
                />
              </div>

              <div className="form-group required-field">
                <label htmlFor="contact-email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="contact-email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-phone">Phone Number</label>
                <input type="tel" className="form-control" id="contact-phone" />
              </div>

              <div className="form-group required-field">
                <label htmlFor="contact-message">What on your mind?</label>
                <textarea
                  id="contact-message"
                  className="form-control"
                  rows="2"
                  required
                ></textarea>
              </div>

              <div className="form-footer">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-4 contact-details">
            <h2 className="light-title">
              <strong>Thông tin liên hệ</strong>
            </h2>
            <div className="contact-info">
              <div>
                <i className="icon-mobile"></i>
                <p>
                  <a href="tel:034xxxxx51">034xxxxx51</a>
                </p>
              </div>
              <div>
                <i className="icon-mail-alt"></i>
                <p>
                  <a href="mailto:ducphamxxxxxxxx@gmail.com">
                    ducphamxxxxxxxx@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-5"></div>
    </main>
  );
};

export default ContactPage;
