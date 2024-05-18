import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <span>© 2024 Company, Inc</span>
          </div>
          <div className="col-md-6 d-flex justify-content-md-end align-items-center">
            <a href="https://twitter.com" className="text-light me-2">
              {/* <TwitterIcon /> */}
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://instagram.com" className="text-light me-2">
              {/* <InstagramIcon /> */}
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://facebook.com" className="text-light">
              {/* <FacebookIcon /> */}
              <i className="bi bi-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
