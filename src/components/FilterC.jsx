import React from 'react';
import { useProducts } from '../context/ProductContext';

function FilterC() {
  const { filters, updateFilters } = useProducts();

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    updateFilters({ [name.toLowerCase()]: value });
  };

  return (
    <div className='filterContainer'>
        <div className='filterLeft'>
            <div className='filterTitle'>
                <h4>Filter by</h4>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#0f0d84" d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></path></svg>
                </span>
            </div>
            <div className='filterBy'>
                <select 
                    name="category" 
                    value={filters.category}
                    onChange={handleFilterChange}
                >
                    <option value="all">All Categories</option>
                    <option value="jackets">Jackets</option>
                    <option value="hoodies">Hoodies</option>
                    <option value="shirts">Shirts</option>
                </select>
                <select 
                    name="color" 
                    value={filters.color}
                    onChange={handleFilterChange}
                >
                    <option value="all">All Colors</option>
                    <option value="#0f0d84">Blue</option>
                    <option value="#808080">Grey</option>
                    <option value="#ff0000">Red</option>
                    <option value="#ffff00">Yellow</option>
                </select>
                <select 
                    name="size" 
                    value={filters.size}
                    onChange={handleFilterChange}
                >
                    <option value="all">All Sizes</option>
                    <option value="sm">SM</option>
                    <option value="md">MD</option>
                    <option value="lg">LG</option>
                    <option value="xl">XL</option>
                </select>
                <select 
                    name="brand" 
                    value={filters.brand}
                    onChange={handleFilterChange}
                >
                    <option value="all">All Brands</option>
                    <option value="nike">Nike</option>
                    <option value="adidas">Adidas</option>
                    <option value="puma">Puma</option>
                    <option value="dior">Dior</option>
                </select>
                <select 
                    name="price" 
                    value={filters.price}
                    onChange={handleFilterChange}
                >
                    <option value="all">All Prices</option>
                    <option value="0-3000">Ksh 0 - 3000</option>
                    <option value="3001-5000">Ksh 3001 - 5000</option>
                    <option value="5001-8000">Ksh 5001 - 8000</option>
                    <option value="8001">Ksh 8000+</option>
                </select>
            </div>
        </div>
        <div className="filterIcons">
            <select 
                name="sort" 
                value={filters.sort}
                onChange={handleFilterChange}
            >
                <option value="default">Default Sorting</option>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
            </select>
            <div className='filternavs'>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 72 72"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} d="M16 26h40M16 36h40M16 46h40"></path></svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 21 21"><path fill="none" stroke="#0b0202" strokeLinecap="round" strokeLinejoin="round" d="M4.5 6.5h12m-12.002 4h11.997M4.5 14.5h11.995" strokeWidth={1}></path></svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16"><path fill="none" stroke="#0b0202" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"></path></svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16"><path fill="none" stroke="#0b0202" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"></path></svg>
                </button>
            </div>
        </div>
    </div>
  );
}

export default FilterC;