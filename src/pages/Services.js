import React from "react";
import "../styles/Services.css";

const servicesData = [
  { id: 1, title: "Fabrication Hopper", image: "/images/services/1.png" },
  { id: 2, title: "Fabrication Tube Heat Exchanger", image: "/images/services/2.png" },
  { id: 3, title: "Fabrication Tank", image: "/images/services/3.png" },
  { id: 4, title: "Fabrication Manhole", image: "/images/services/4.png" },
  { id: 5, title: "Machining Proses", image: "/images/services/5.png" },
  { id: 6, title: "Machining Proses", image: "/images/services/6.png" },
  { id: 7, title: "Loading & Unloading, Erection Tank", image: "/images/services/7.png" },
  { id: 8, title: "Erection & Install Mixer", image: "/images/services/8.png" },
  { id: 9, title: "Installation Valve Cluster Processing", image: "/images/services/9.png" },
  { id: 10, title: "Fabrication & Installation Platform", image: "/images/services/10.png" },
  { id: 11, title: "Utility Supply To Evaporator", image: "/images/services/11.png" },
  { id: 12, title: "Installation Pipe Amonia Chiller", image: "/images/services/12.png" },
  { id: 13, title: "Installation Pipe Chiller & Cooling Tower", image: "/images/services/13.png" },
  { id: 14, title: "Installation Pipe Chiller & Cooling Tower", image: "/images/services/14.png" },
  { id: 15, title: "Fabrication & Installation Emergency Stair", image: "/images/services/15.png" },
  { id: 16, title: "Welding Burner (Confined Space)", image: "/images/services/16.png" },
  { id: 17, title: "Installation Pipe Product, Utility to Skid ARA & DHA", image: "/images/services/17.png" },
  { id: 18, title: "Press Machine", image: "/images/services/18.png" },
  { id: 19, title: "Miling Machine", image: "/images/services/19.png" },
  { id: 20, title: "Roll Plate Machine", image: "/images/services/20.png" },
  { id: 21, title: "Sand Blasting Process", image: "/images/services/21.png" },
  { id: 22, title: "Sand Blasting Process", image: "/images/services/22.png" },
  { id: 23, title: "Working on The Height", image: "/images/services/23.png" },
  { id: 24, title: "Quality Control", image: "/images/services/24.png" },
];

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1 className="title-overlay">
            {"Services".split("").map((char, index) => (
              <span key={index} className="letter">{char}</span>
            ))}
          </h1>
        </div>
        <img src="/images/exel.png" alt="Services" className="hero-image" />
      </div>

      {/* Services Gallery */}
      <div className="services-gallery">
        {servicesData.map((service) => (
          <div className="service-item" key={service.id}>
            <h3 className="service-title">{service.title}</h3>
            <img src={service.image} alt={service.title} className="service-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
