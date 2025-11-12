import React, { useState, useEffect } from 'react';
import { useProducts } from '../context/ProductContext';

function Carouselnum() {
    const { products } = useProducts();
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerSlide = 4;
    
    const totalSlides = Math.ceil(products.length / itemsPerSlide);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [totalSlides]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
        );
    };

    const getCurrentSlideProducts = () => {
        const start = currentIndex * itemsPerSlide;
        return products.slice(start, start + itemsPerSlide);
    };

    return (
        <div className="carousel-container">
            <button className="carousel-control prev" onClick={handlePrev}>
                &lt;
            </button>
            <div className="carousel-track">
                {getCurrentSlideProducts().map((product) => (
                    <div key={product.id} className="carousel-item">
                        <img src={product.image} alt={product.name} />
                        <div className="carousel-item-info">
                            <h4>{product.name}</h4>
                            <p>Ksh {product.price}</p>
                            <div className="color-options">
                                {product.colors.map((color, index) => (
                                    <span
                                        key={index}
                                        className="color-dot"
                                        style={{ backgroundColor: color }}
                                    ></span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control next" onClick={handleNext}>
                &gt;
            </button>
            <div className="carousel-indicators">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carouselnum;