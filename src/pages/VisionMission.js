import React from "react";
import "../styles/VisionMission.css";

const VisionMission = () => {
  return (
    <div className="vision-mission">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1 className="title-overlay">
            {"Vision & Mission".split("").map((char, index) => (
              <span key={index} className="letter">{char}</span>
            ))}
          </h1>
        </div>
        <img src="/images/exel.png" alt="Vision Mission" className="hero-image" />
      </div>

      {/* Vision Section */}
      <div className="vision-section">
        <h2>Vision</h2>
        <div className="section-divider"></div>
        <p>
          To become the number one company in Indonesia in the field of installing and selling equipment for food product companies in 2023.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mission-section">
        <h2>Mission</h2>
        <div className="section-divider"></div>
        <ul>
          <li>Implementing a quality management system and K3.</li>
          <li>Continuously improving human resources competencies.</li>
          <li>Always improving quality and providing the best service to customers.</li>
          <li>Complying with and carrying out applicable regulations.</li>
          <li>Doing innovation continuously.</li>
        </ul>
      </div>
    </div>
  );
};

export default VisionMission;
