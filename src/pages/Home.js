import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Home.css";

const Home = () => {
  const images = [
    "/images/las1.jpg",
    "/images/las2.jpeg",
    "/images/min.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Generate 40 images dynamically
  const partners = Array.from({ length: 40 }, (_, i) => `/images/clients/${i + 1}.png`);

  return (
    <div className="home-container">
      {/* Hero Slider with Text Overlay */}
      <div className="slider-wrapper">
        <div className="slider-text-overlay">
          <h1>PT. EXEL MANDIRI INOVASI</h1>
          <div className="slider-text-divider"></div>
          <p>
            PT Exel Mandiri Inovasi is a company operating in mechanical engineering services / contractors which includes installation, manufacturing, and fabrication works.
          </p>
        </div>
        <Slider {...settings} className="full-page-slider">
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Company Profile Section */}
      <div className="company-profile-section" id="about">
        <h2>Company Profile</h2>
        <div className="company-profile-content">
          <img src="/images/logo1.png" alt="Company Logo" className="company-logo" />
          <div className="company-description">
            <p>
              Exel Mandiri was founded by a professional practitioner, who has various experiences
              in the field of manufacturing, construction, and maintenance services for food and
              beverage manufacturing equipment/machines.
            </p>
            <Link to="/company-profile" className="read-more-button">Read More</Link>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="section-container">
        <div className="section-content">
          <h2>Our Services</h2>
          <div className="divider"></div>
          <p>We provide high-quality services in manufacturing, construction, and maintenance.</p>
        </div>
        <div className="section-more">
          <Link to="/services" className="more-button">More</Link>
        </div>
      </div>

      {/* Services Image Section */}
      <div className="image-section">
        <img src="/images/services/1.png" alt="Service 1" />
        <img src="/images/services/2.png" alt="Service 2" />
        <img src="/images/services/3.png" alt="Service 3" />
      </div>

      {/* Our Products Section */}
      <div className="section-container">
        <div className="section-content">
          <h2>Our Products</h2>
          <div className="divider"></div>
          <p>We offer a variety of high-quality products for industrial and manufacturing needs.</p>
        </div>
        <div className="section-more">
          <Link to="/products" className="more-button">More</Link>
        </div>
      </div>

      {/* Products Image Section */}
      <div className="image-section">
        <img src="/images/products/1.png" alt="Product 1" />
        <img src="/images/products/2.png" alt="Product 2" />
        <img src="/images/products/3.png" alt="Product 3" />
      </div>

      {/* Our Partners Section */}
      <div className="section-container">
        <div className="section-content">
          <h2>Our Partners</h2>
          <div className="divider"></div>
          <p>We collaborate with industry leaders to provide the best solutions for our customers.</p>
        </div>
      </div>

      {/* Partners Logo Animation */}
      <div className="partners-slider">
        <div className="partners-track">
          {[...partners, ...partners].map((partner, index) => (
            <img key={index} src={partner} alt={`Partner ${index % partners.length + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
