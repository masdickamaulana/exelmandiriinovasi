import React from "react";
import "../styles/CompanyProfile.css";

const CompanyProfile = () => {
  return (
    <div className="company-profile">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1 className="title-overlay">
            {"Company Profile".split("").map((char, index) => (
              <span key={index} className="letter">{char}</span>
            ))}
          </h1>
        </div>
        <img src="/images/exel.png" alt="Company" className="hero-image" />
      </div>

      {/* Description */}
      <div className="description-left">
        <h2>About Us</h2>
        <div className="section-divider"></div>
        <p>
          PT Exel Mandiri Inovasi is a company engaged in mechanical engineering services and contracting, primarily focusing on installation, manufacturing, and fabrication. Established on December 2, 2009, we have grown to become one of the most trusted and competent companies in Indonesia.
        </p>
        <p>
          With years of experience, PT Exel Mandiri Inovasi remains committed to delivering the best services to our customers through modern technology, professional workforce, and international quality standards.
        </p>
      </div>

      {/* Founder/Director Section */}
      <div className="founder-section-left">
        <h2>Founder & Director</h2>
        <div className="section-divider"></div>
        <div className="founder-content">
          <img src="/images/founder.png" alt="Founder" className="founder-image-wide" />
          <div className="founder-text">
            <h3>Daya Sundara</h3>
            <p>Founder & Director</p>
          </div>
        </div>
      </div>

      {/* Company History */}
      <div className="history-section-left">
        <h2>History of Establishment</h2>
        <div className="section-divider"></div>
        <p>
          Exel Mandiri was founded by a professional practitioner with extensive experience in manufacturing, construction, and maintenance services for food and beverage manufacturing equipment.
        </p>
        <p>
          Established on December 2, 2009, Exel Mandiri is backed by competent experts, enabling it to compete with longer-established companies in the industry.
        </p>
        <p>
          With a vision to be the leading company in Indonesia, Exel Mandiri is committed to improving human resources competencies and delivering the best quality to customers.
        </p>
      </div>
    </div>
  );
};

export default CompanyProfile;
