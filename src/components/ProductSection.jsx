import React from "react";

const ProductSection = ({
  products = [
    {
      id: 1,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/02f597beae9353b2d437657e2da964a9.jpg_400x400q80.jpg",
      title:
        "Dawlance Food Processor DWFP 8270 Black / 800 W Motor / 2 Litre Capacity Bowl",
      currentPrice: 18098,
      originalPrice: 21000,
      discount: 14,
    },
    {
      id: 1,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/02f597beae9353b2d437657e2da964a9.jpg_400x400q80.jpg",
      title:
        "Dawlance Food Processor DWFP 8270 Black / 800 W Motor / 2 Litre Capacity Bowl",
      currentPrice: 18098,
      originalPrice: 21000,
      discount: 14,
    },
    {
      id: 1,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/02f597beae9353b2d437657e2da964a9.jpg_400x400q80.jpg",
      title:
        "Dawlance Food Processor DWFP 8270 Black / 800 W Motor / 2 Litre Capacity Bowl",
      currentPrice: 18098,
      originalPrice: 21000,
      discount: 14,
    },
    {
      id: 1,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/02f597beae9353b2d437657e2da964a9.jpg_400x400q80.jpg",
      title:
        "Dawlance Food Processor DWFP 8270 Black / 800 W Motor / 2 Litre Capacity Bowl",
      currentPrice: 18098,
      originalPrice: 21000,
      discount: 14,
    },
  ],
}) => {
  return (
    <>
      <div className="pc-custom-link hp-mod-card flash-sale-comp-container mx-auto w-full max-w-7xl pt-6 text-black no-underline block">
        {/* Header */}
        <div className="hp-mod-card-header border-b-0 h-10 leading-10">
          <p className="hp-mod-card-title one-line-clamp text-gray-700 text-2xl font-normal overflow-hidden text-ellipsis whitespace-nowrap">
            Flash Sale
          </p>
        </div>

        {/* Content Container */}
        <div className="cardFsContent bg-white h-96">
          {/* Header Section */}
          <div className="card-fs-content-header flex flex-justify-between flex items-center justify-between bg-white border-b border-gray-300 h-15 mb-2.5 overflow-hidden">
            <div className="flex flex-items-center flex items-center">
              <div className="card-fs-content-header-left-status flex flex-justify-center flex items-center justify-center ml-5">
                <div className="fs-status-text text-orange-500 text-sm font-medium">
                  On Sale Now
                </div>
              </div>
            </div>

            <a
              href="#"
              className="pc-custom-link shopMoreBtn text text-center border border-orange-500 bg-transparent text-orange-500 rounded text-sm font-medium h-9 leading-9 mr-3 mt-3 px-2.5 block no-underline"
            >
              <span className="text-sm text-orange-500">SHOP ALL PRODUCTS</span>
            </a>
          </div>

          {/* Products Grid */}
          <div className="flex flex-wrap gap-3">
            {products.map((product) => (
              <a
                key={product.id}
                href="#"
                className="pc-custom-link card-fs-content-body-unit hp-mod-card-hover relative w-48 h-72 text-black block no-underline bg-transparent hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out"
              >
                {/* Product Image */}
                <div className="common-img fs-card-img img-w100p h-48 mb-1 w-48 inline-flex">
                  <picture className="inline-flex h-full max-h-full max-w-full w-full">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="inline-block h-full w-full object-cover"
                    />
                  </picture>
                </div>

                {/* Product Details */}
                <div className="fs-card-text m-1">
                  {/* Title */}
                  <p className="fs-card-title two-line-clamp text-sm leading-normal mb-1 line-clamp-2">
                    {product.title}
                  </p>

                  {/* Current Price */}
                  <div className="fs-card-price flex flex-row text-orange-500 text-lg h-6 leading-6 mb-1 tracking-tight">
                    <span className="currency text-lg">Rs.</span>
                    <span className="price text-lg ml-1">
                      {product.currentPrice.toLocaleString()}
                    </span>
                  </div>

                  {/* Original Price & Discount */}
                  <div className="fs-card-origin-price flex flex-row leading-3">
                    <div className="fs-origin-price flex flex-row text-gray-400 line-through">
                      <span className="currency text-xs">Rs.</span>
                      <span className="price text-xs ml-1">
                        {product.originalPrice.toLocaleString()}
                      </span>
                    </div>
                    <span className="itemDiscount text-gray-900 text-xs ml-1">
                      -{product.discount}%
                    </span>
                  </div>

                  {/* Sold Count Placeholder */}
                  <div className="fs-card-sold flex flex-row text-sm h-4 mb-1"></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSection;
