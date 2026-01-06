import React from "react";

const Product = () => {
  return (
    <div>
      <a className="pc-custom-link card-fs-content-body-unit hp-mod-card-hover">
        <div className="common-img fs-card-img img-w100p">
          <picture>
            <source
              srcset="https://img.drz.lazcdn.com/static/pk/p/02f597beae9353b2d437657e2da964a9.jpg_400x400q80.jpg_.avif"
              type="image/avif"
            />
            <source
              srcset="https://img.drz.lazcdn.com/static/pk/p/02f597beae9353b2d437657e2da964a9.jpg_400x400q80.jpg_.webp"
              type="image/webp"
            />
            <img src="https://img.drz.lazcdn.com/static/pk/p/02f597beae9353b2d437657e2da964a9.jpg_400x400q80.jpg" />
          </picture>
        </div>
        <div className="fs-card-text">
          <p className="fs-card-title two-line-clamp">
            Dawlance Food Processor DWFP 8270 Black / 800 W Motor / 2 Litre
            Capacity Bowl
          </p>
          <div className="fs-card-price flex flex-row">
            <span className="currency">Rs.</span>
            <span className="price">18,098</span>
          </div>
          <div className="fs-card-origin-price flex flex-row">
            <div className="fs-origin-price flex flex-row">
              <span className="currency">Rs.</span>
              <span className="price">21,000</span>
            </div>
            <span className="itemDiscount">-14%</span>
          </div>
          <div className="fs-card-sold flex flex-row"></div>
        </div>
      </a>
    </div>
  );
};

export default Product;
