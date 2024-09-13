import { useEffect } from "react";
import { useFilters } from "../context/useFilters";
import products from "../data/products";
import { getFilteredProducts } from "../utils/getFilteredProducts";

const FilterActions = ({ setAllProducts }) => {
    const { filters, updateFilter } = useFilters();

    const handleApplyFiltersClick = () => {
        const filteredProducts = getFilteredProducts(filters, products);
        setAllProducts(filteredProducts);
    }

    const handleClearFilterClick = () => {
        updateFilter('sortBy', "");
        updateFilter('priceRange', [0, 10000]);
        updateFilter('sizes', []);
        updateFilter('colors', []);
        setAllProducts(products);
    }

    useEffect(() => {
        console.log(filters)
    }, [filters])

    return(
        <div className="filter-actions">
            <div className="btnsBx">
                <div className="leftBx">
                    <button className="btn btn--primary" onClick={handleApplyFiltersClick}>Apply Filers</button>
                </div>
                <div className="rightbx">
                    <button className="btn btn--outline" onClick={handleClearFilterClick}>Clear Filters</button>
                </div>
            </div>
        </div>
    )
}

export default FilterActions;