import React from "react";

export function Carousel({ carouselIndex, setCarouselIndex, changeSlide, navigateTo }) {
  return (
    <div className="carousel-container">
      <div className="carousel-track-container">
        <ul className="carousel-track">
          <li className={`carousel-slide ad-banner-slide ${carouselIndex === 0 ? "active" : ""}`}>
            <div className="carousel-slide-content">
              <div className="slide-overlay"></div>
              <div className="slide-text">
                <h3>EXCLUSIVE PARTNERSHIP</h3>
                <h2>ONES JUPITER GATE COACHING</h2>
                <p>Claim up to 60% OFF on elite GATE study bundles. Live modules, mock tests and personal mentorship.</p>
                <button className="slide-cta-btn highlight-yellow" onClick={() => alert("Redirecting to ONES GATE portal...")}>
                  Claim Offer Code
                </button>
                <p className="slide-subtext">*Limited early-bird registration coupon active this week</p>
              </div>
            </div>
          </li>

          <li className={`carousel-slide alert-banner-slide ${carouselIndex === 1 ? "active" : ""}`}>
            <div className="carousel-slide-content">
              <div className="slide-overlay"></div>
              <div className="slide-flex">
                <div className="slide-text-left">
                  <span className="badge-live">LIVE UPDATES</span>
                  <h2>KTU Semester Exam Time Table</h2>
                  <p className="desc">APJ Abdul Kalam Technological University board schedules published. Get detailed schedules instantly.</p>
                  <div className="banner-features">
                    <div className="feat">✅ Regular and Supplementary dates included</div>
                    <div className="feat">✅ PDF downloads mapped by department</div>
                  </div>
                </div>
                <div className="slide-graphic-right">
                  <div className="qr-container">
                    <p>SCAN TO JOIN GROUP</p>
                    <div className="mock-qr">
                      <div className="qr-box"></div>
                      <p>WhatsApp Communities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className={`carousel-slide gpa-banner-slide ${carouselIndex === 2 ? "active" : ""}`}>
            <div className="carousel-slide-content">
              <div className="slide-overlay"></div>
              <div className="slide-text">
                <h3>GPACALCULATOR TOOL</h3>
                <h2>APJ KTU SGPA Calculator</h2>
                <p>Instant grade point calculations conforming to the latest 2024 and 2019 academic schemes.</p>
                <button className="slide-cta-btn" onClick={() => navigateTo("#gpa")}>
                  Calculate SGPA Now
                </button>
              </div>
            </div>
          </li>

          <li className={`carousel-slide comm-banner-slide ${carouselIndex === 3 ? "active" : ""}`}>
            <div className="carousel-slide-content">
              <div className="slide-overlay"></div>
              <div className="slide-text">
                <h3>COMMUNITY CONNECT</h3>
                <h2>Join KTUNOTES Channel</h2>
                <p>Receive real time notifications about KTU revaluation updates, exam alerts, and fresh study material uploads.</p>
                <button className="slide-cta-btn btn-whatsapp-color" onClick={() => alert("Joining WhatsApp Group...")}>
                  Join WhatsApp Group
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <button className="carousel-nav-btn prev-btn" onClick={() => changeSlide(carouselIndex - 1)}>
        <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
      </button>
      <button className="carousel-nav-btn next-btn" onClick={() => changeSlide(carouselIndex + 1)}>
        <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg>
      </button>

      <div className="carousel-indicators">
        {[0, 1, 2, 3].map(idx => (
          <span 
            key={idx} 
            className={`indicator ${carouselIndex === idx ? "active" : ""}`} 
            onClick={() => changeSlide(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
}
export default Carousel;
