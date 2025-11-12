import React from "react";

function Pagination({ totalPages, currentPage, onPageChange }) {
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="carouselnum flex items-center justify-center gap-2 mt-4">
      {/* Prev Button */}
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="px-2 py-1 text-gray-700 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M7.825 11H20v2H7.825l5.6 5.6L12 20l-8-8l8-8l1.425 1.4z"
          ></path>
        </svg>
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`w-8 h-8 rounded-full ${
            currentPage === index + 1
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300 text-gray-700"
          }`}
        >
          {index + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-2 py-1 text-gray-700 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8l-1.425-1.4z"
          ></path>
        </svg>
      </button>
      
    </div>
  );
}

export default Pagination;
