import React from 'react';
import { useSelector } from 'react-redux';

const Carousel = () => {
  const carouselItems = useSelector((state) => state.carousel);

  return (
    <div className="carousel">
      {carouselItems.map((item) => (
        <div key={item.id} className="carousel-item">
          <img src={item.Image.data.attributes.url} alt={item.Header} />
          <div className="overlay">
            <h2>{item.Header}</h2>
            <a href={item.ButtonLink}>{item.ButtonText}</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
