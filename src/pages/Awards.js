import React from "react";
import "../styles/Awards.css";

const Awards = () => {
  return (
    <div className="awards-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1 className="title-overlay">
            {"Awards & Certifications".split("").map((char, index) => (
              <span key={index} className="letter">{char}</span>
            ))}
          </h1>
        </div>
        <img src="/images/exel.png" alt="Awards" className="hero-image" />
      </div>

      {/* Awards Section */}
      <div className="awards-gallery">
        <div className="certificate-grid grid-3 center">
          <img src="/images/serti/1.png" alt="Certificate 1" className="certificate-image" />
          <img src="/images/serti/2.png" alt="Certificate 2" className="certificate-image" />
          <img src="/images/serti/3.png" alt="Certificate 3" className="certificate-image" />
        </div>
        <div className="certificate-grid grid-3 center">
          <img src="/images/serti/4.png" alt="Certificate 4" className="certificate-image" />
          <img src="/images/serti/5.png" alt="Certificate 5" className="certificate-image" />
          <img src="/images/serti/6.png" alt="Certificate 6" className="certificate-image" />
        </div>
        <div className="certificate-grid grid-1 center">
          <img src="/images/serti/7.png" alt="Certificate 7" className="certificate-image" />
        </div>
        <div className="certificate-grid grid-3 center">
          <img src="/images/serti/8.png" alt="Certificate 8" className="certificate-image" />
          <img src="/images/serti/9.png" alt="Certificate 9" className="certificate-image" />
          <img src="/images/serti/10.png" alt="Certificate 10" className="certificate-image" />
        </div>

        {/* Additional Certificates with Titles */}
        <div className="certificate-grid grid-1 center">
          <h3 className="certificate-title">Sedex Certificate</h3>
          <img src="/images/serti/s1.png" alt="Certificate 11" className="certificate-image" />
        </div>
        <div className="certificate-grid grid-1 center">
          <h3 className="certificate-title">ISO 90001:2015 Certificate</h3>
          <img src="/images/serti/s2.png" alt="Certificate 12" className="certificate-image" />
        </div>
        <div className="certificate-grid grid-1 center">
          <h3 className="certificate-title">ISO 14001:2015 Certificate</h3>
          <img src="/images/serti/s3.png" alt="Certificate 13" className="certificate-image" />
        </div>
        <div className="certificate-grid grid-1 center">
          <h3 className="certificate-title">ISO 45001:2018 Certificate</h3>
          <img src="/images/serti/s4.png" alt="Certificate 14" className="certificate-image" />
        </div>
      </div>
    </div>
  );
};

export default Awards;
