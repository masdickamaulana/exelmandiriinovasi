import React from "react";
import "../styles/Clients.css";

const Clients = () => {
  return (
    <div className="clients-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1 className="title-overlay animated-text">Our Clients</h1>
        </div>
        <img src="/images/exel.png" alt="Clients" className="hero-image" />
      </div>

      {/* Clients Logos */}
      <div className="clients-gallery">
        {Array.from({ length: 40 }, (_, index) => (
          <div className="client-logo" key={index + 1}>
            <img src={`/images/clients/${index + 1}.png`} alt={`Client ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
