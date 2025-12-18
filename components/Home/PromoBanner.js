import React from "react";

export function PromoBanner() {
  return (
    <div className="exclusive-offer-banner">
      <div className="offer-glow-effect"></div>
      <div className="offer-content">
        <span className="badge-promo">EXCLUSIVE PARTNER DISCOUNTS</span>
        <h3>ONES JUPITER Premium GATE Bundles</h3>
        <p>Get flat Rs.1500 discount with promo code <strong className="promo-code">ONES1495</strong> on course enrollments.</p>
      </div>
      <button className="offer-action-btn" onClick={() => alert("Copying Coupon Code ...")}>Copy Code</button>
    </div>
  );
}
export default PromoBanner;
