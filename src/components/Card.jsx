import React, { useState, useEffect } from "react";
import { useProducts } from "../context/ProductContext";

function Card() {
  const { products } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [expandedCard, setExpandedCard] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [selectedColors, setSelectedColors] = useState({});

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  // Initialize default color selections
  useEffect(() => {
    const initialColors = {};
    products.forEach((p) => (initialColors[p.id] = p.colors?.[0] || "#ccc"));
    setSelectedColors(initialColors);
  }, [products]);

  useEffect(() => {
    if (expandedCard !== null) {
      document.getElementById(`card-${expandedCard}`)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [expandedCard]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const selectColor = (id, color) => {
    setSelectedColors((prev) => ({
      ...prev,
      [id]: color,
    }));
  };

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  // Simple Pagination Component
  const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    return (
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div className="cardContainer">
      {currentProducts.map((product) => (
        <div
          key={product.id}
          id={`card-${product.id}`}
          className={`card ${expandedCard === product.id ? "expanded" : ""}`}
          onClick={() => toggleExpand(product.id)}
        >
          <div className="image-container">
            <img src={product.image} alt={product.name} className="card-image" />
            <button
              className={`fav-btn ${favorites.includes(product.id) ? "liked" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(product.id);
              }}
            >
              ♥
            </button>
          </div>
          <h3>{product.name}</h3>
          <p>Ksh {product.price}</p>
          <div className="color-options">
            {product.colors.map((color, index) => (
              <span
                key={index}
                className={`color-dot ${
                  selectedColors[product.id] === color ? "selected" : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={(e) => {
                  e.stopPropagation();
                  selectColor(product.id, color);
                }}
              ></span>
            ))}
          </div>
          {expandedCard === product.id && (
            <div className="expanded-section" onClick={(e) => e.stopPropagation()}>
              <h4>Available Colors</h4>
              <div className="color-gallery">
                {product.colors.map((color, i) => (
                  <div
                    key={i}
                    className="color-swatch"
                    style={{ backgroundColor: color }}
                    onClick={() => selectColor(product.id, color)}
                  />
                ))}
              </div>
              <button className="order-btn">Place Order</button>
            </div>
          )}
        </div>
      ))}
      {/* Pagination at bottom */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default Card;