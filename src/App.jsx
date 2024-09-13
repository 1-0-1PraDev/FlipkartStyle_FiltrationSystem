import Filters from './components/Filters';
import ProductList from './components/ProductList';
import { useFilters } from './context/useFilters';
import products from './data/products';
import { useEffect, useState } from 'react';
import FilterActions from './components/FilterActions';
import FilterChips from './components/FilterChips';
import { getFilteredProducts } from './utils/getFilteredProducts';
import './App.css';

function App() {
  const { filters } = useFilters();
  const [allProducts, setAllProducts] = useState(products);
  const [filteredProducts, setFilteredProducts] = useState(products);  // Store filtered products

  useEffect(() => {
    const filteredProductsResult = getFilteredProducts(filters, products);
    setFilteredProducts(filteredProductsResult);
  }, [filters]);

  return (
    <div className="main-container">
      <div className="filter-sidebar">

        <FilterChips />

        <Filters />

        <FilterActions setAllProducts={setAllProducts} />
      </div>

      <ProductList 
        products={filteredProducts}
      />
    </div>
  )
}

export default App
