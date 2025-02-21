import React from "react";
import "../styles/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1 className="title-overlay">
            {"Contact Us".split("").map((char, index) => (
              <span key={index} className="letter">{char}</span>
            ))}
          </h1>
        </div>
        <img src="/images/exel.png" alt="Contact Us" className="hero-image" />
      </div>

      {/* Contact Section */}
      <div className="contact-container">
        {/* Google Maps */}
        <div className="google-maps">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15810.302862855619!2d112.6834269258796!3d-7.834648138070007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7d5e2fd9e62a9%3A0x318c8620243e63dc!2sPT.%20Exel%20Mandiri%20Inovasi%20-%20Head%20Office!5e0!3m2!1sid!2sid!4v1740026321242!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Details */}
        <div className="contact-details">
          <h2>Our Contact Information</h2>
          <h3>Head Office</h3>
          <p>📍 Jl. Tawang Argo No.9 Lawang, Kabupaten Malang, Jawa Timur</p>
          <p>📞 (0341) 426.760 , Fax (0341) 427.273</p>
          <p>📲 +62-811-357-3000</p>
          <p>📧 info@exelmandiri.co.id</p>
          <p>⏰ Monday - Friday, 8:00 AM - 5:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
