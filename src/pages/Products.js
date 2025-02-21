import React from "react";
import "../styles/Products.css";

const productsData = [
  { id: 1, title: "Pipe Holder High Pressure", image: "/images/products/1.png" },
  { id: 2, title: "Pipe Holder 4", image: "/images/products/2.png" },
  { id: 3, title: "Ball Feet", image: "/images/products/3.png" },
  { id: 4, title: "Pipe Nipple", image: "/images/products/4.png" },
  { id: 5, title: "Handle Batterfly Valve", image: "/images/products/5.png" },
  { id: 6, title: "Tee Reducer & Reducer", image: "/images/products/6.png" },
  { id: 7, title: "Ferrule", image: "/images/products/7.png" },
  { id: 8, title: "Chuck Cut", image: "/images/products/8.png" },
  { id: 9, title: "Ball Feet Teflon Anvil", image: "/images/products/9.png" },
  { id: 10, title: "Orifice", image: "/images/products/10.png" },
  { id: 11, title: "Cup Pipa Sanitari", image: "/images/products/11.png" },
  { id: 12, title: "Cup Pipa Sanitari", image: "/images/products/12.png" },
  { id: 13, title: "Manhole", image: "/images/products/14.png" },
  { id: 14, title: "Tangki", image: "/images/products/13.png" },
  { id: 15, title: "Manhole", image: "/images/products/15.png" },
];

const Products = () => {
  return (
    <div className="products-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1 className="title-overlay">
            {"Products".split("").map((char, index) => (
              <span key={index} className="letter">{char}</span>
            ))}
          </h1>
        </div>
        <img src="/images/exel.png" alt="Products" className="hero-image" />
      </div>

      {/* Products Gallery */}
      <div className="products-gallery">
        {productsData.map((product) => (
          <div className="product-item" key={product.id}>
            <h3 className="product-title">{product.title}</h3>
            <img src={product.image} alt={product.title} className="product-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
