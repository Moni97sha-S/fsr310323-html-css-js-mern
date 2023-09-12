import React from "react";
import "../styles/CryptoHeroSection.css";

function CryptoHeroSection() {
  return (
    <>
      {/* <div>CryptoHeroSection</div> */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Discover the future of Cryptocurrency</h1>
          <p className="hero-subtitle">
            Invest in digital assets and explore crypto tech.
          </p>
          <button className="cta-btn">Get Started</button>
        </div>
      </section>
    </>
  );
}

export default CryptoHeroSection;
