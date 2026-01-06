import { useState, useEffect } from "react";

const Carousel = ({
  images = [],
  height = "h-56 md:h-96",
  width = "w-full",
  className = "",
  arrowColor = "text-white",
  indicatorActiveColor = "bg-white",
  indicatorInactiveColor = "bg-white/50",
  autoSlide = true,
  slideInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);

  const getPositionX = (event) => {
    return event.type.includes("mouse")
      ? event.clientX
      : event.touches[0].clientX;
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartPos(getPositionX(e));
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentPosition = getPositionX(e);
    setCurrentTranslate(currentPosition - startPos);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const movedBy = currentTranslate;
    if (movedBy < -50) nextSlide();
    if (movedBy > 50) prevSlide();
    setCurrentTranslate(0);
  };

  // Handle updates to the images array to prevent out-of-bounds errors
  useEffect(() => {
    if (currentIndex >= images.length) {
      setCurrentIndex(0);
    }
  }, [images, currentIndex]);

  useEffect(() => {
    if (!autoSlide || isHovered) return;
    const slideIntervalId = setInterval(nextSlide, slideInterval);
    return () => clearInterval(slideIntervalId);
  }, [currentIndex, autoSlide, slideInterval, isHovered]);

  if (!images.length) {
    return (
      <div
        className={`${height} ${width} flex items-center justify-center bg-gray-200 rounded-lg`}
      >
        No Images
      </div>
    );
  }

  return (
    <div
      className={`relative group ${width} ${className} cursor-default ${
        isDragging ? "cursor-grabbing" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (isDragging) handleDragEnd();
      }}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      <div className={`relative overflow-hidden rounded-lg ${height}`}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-transform ease-in-out ${
              isDragging ? "duration-0" : "duration-500"
            }`}
            style={{
              transform: `translateX(calc(${
                100 * (index - currentIndex)
              }% + ${currentTranslate}px))`,
            }}
          >
            <img
              src={typeof image === "string" ? image : image.src}
              alt={
                typeof image === "string"
                  ? `Slide ${index + 1}`
                  : image.alt || `Slide ${index + 1}`
              }
              className="absolute block w-full h-full object-cover select-none"
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute   flex gap-1 z-30 -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 cursor-pointer rounded-full ${
              currentIndex === index
                ? indicatorActiveColor
                : indicatorInactiveColor
            }`}
            aria-current={currentIndex === index}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      {/* Prev Button */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className={`w-4 h-4 ${arrowColor} rtl:rotate-180`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      {/* Next Button */}
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className={`w-4 h-4 ${arrowColor} rtl:rotate-180`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
