import React, { createContext, useState, useEffect } from 'react';
import { products as initialProducts } from '../data/products';

const ProductContext = createContext();


export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);
  const [filters, setFilters] = useState({
    category: 'all',
    color: 'all',
    size: 'all',
    brand: 'all',
    price: 'all',
    sort: 'default'
  });

  const applyFilters = () => {
    let filteredProducts = [...initialProducts];

    if (filters.category !== 'all') {
      filteredProducts = filteredProducts.filter(product =>
        product.category === filters.category
      );
    }

    if (filters.color !== 'all') {
      filteredProducts = filteredProducts.filter(product =>
        product.colors.includes(filters.color)
      );
    }

    if (filters.size !== 'all') {
      filteredProducts = filteredProducts.filter(product =>
        product.size.includes(filters.size)
      );
    }

    if (filters.brand !== 'all') {
      filteredProducts = filteredProducts.filter(product =>
        product.brand === filters.brand
      );
    }

    if (filters.price !== 'all') {
      const [min, max] = filters.price.split('-').map(Number);
      filteredProducts = filteredProducts.filter(product =>
        max ? (product.price >= min && product.price <= max) : product.price >= min
      );
    }

    switch (filters.sort) {
      case 'a-z':
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'z-a':
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'low-high':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        filteredProducts.sort((a, b) => a.id - b.id);
    }

    setProducts(filteredProducts);
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const updateFilters = (newFilters) => {
    setFilters(prev => ({
      ...prev,
      ...newFilters
    }));
  };

  return (
    <ProductContext.Provider value={{
      products,
      filters,
      updateFilters,
      totalProducts: products.length
    }}>
      {children}
    </ProductContext.Provider>
  );
};
