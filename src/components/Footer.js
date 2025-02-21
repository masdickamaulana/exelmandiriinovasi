import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Perusahaan */}
        <div className="footer-logo">
          <img src="/images/logo1.png" alt="Exel Mandiri Inovasi" />
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/company-profile">Company Profile</a></li>
            <li><a href="/vision-mission">Vision & Mission</a></li>
            <li><a href="/awards">Awards</a></li>
          </ul>
        </div>

        {/* Products & Services */}
        <div className="footer-links">
          <h4>‎  </h4>
          <ul>
            <li><a href="/services">Type of Services</a></li>
            <li><a href="/products">Type of Products</a></li>
             <li><a href="/csr">CSR</a></li>
            <li><a href="/clients">Clients & Partners</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p><strong>Address:</strong> Jl. Tawang Argo No.9 Lawang, Kabupaten Malang, Jawa Timur</p>
          <p><strong>Email:</strong> info@exelmandiri.co.id</p>
          <p><strong>Phone:</strong> (0341) 426.760 , Fax (0341) 427.273</p>
        </div>

        {/* Maps Perusahaan */}
        <div className="footer-maps">
          <h4>Location</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15810.54874762817!2d112.70104825!3d-7.8281696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7d5e2fd9e62a9%3A0x318c8620243e63dc!2sPT.%20Exel%20Mandiri%20Inovasi%20-%20Head%20Office!5e0!3m2!1sid!2sid!4v1739953645299!5m2!1sid!2sid"
            width="100%"
            height="150"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Company Location"
          ></iframe>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>&copy; 2025 Exel Mandiri Inovasi. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
