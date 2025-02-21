import React from "react";
import "../styles/CSR.css";

const CSR = () => {
  return (
    <div className="csr-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1 className="animated-title">
            {"CSR Programs".split("").map((char, index) => (
              <span key={index}>{char}</span>
            ))}
          </h1>
        </div>
        <img src="/images/exel.png" alt="CSR" className="hero-image" />
      </div>

      {/* Deskripsi + Gambar */}
      <div className="csr-section">
        <h2>1. Humanitarian aid for earthquake disaster in Lombok</h2>
        <div className="section-divider"></div>
        <div className="csr-images">
          <img src="/images/csr/1.png" alt="CSR 1" />
          <img src="/images/csr/2.png" alt="CSR 2" />
        </div>
      </div>

      <div className="csr-section">
        <h2>2. Humanitarian aid for flood disaster in Pasuruan</h2>
        <div className="section-divider"></div>
        <div className="csr-images">
          <img src="/images/csr/3.png" alt="CSR 3" />
          <img src="/images/csr/4.png" alt="CSR 4" />
          <img src="/images/csr/5.png" alt="CSR 5" />
        </div>
      </div>

      <div className="csr-section">
        <h2>3. Support for teachers at Srigading Elementary School</h2>
        <div className="section-divider"></div>
        <div className="csr-images">
          <img src="/images/csr/6.png" alt="CSR 6" />
          <img src="/images/csr/7.png" alt="CSR 7" />
        </div>
      </div>
    </div>
  );
};

export default CSR;
