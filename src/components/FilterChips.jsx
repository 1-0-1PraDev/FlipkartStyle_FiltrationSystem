import { useFilters } from "../context/useFilters";

const FilterChips = () => {
    const { filters, updateFilter } = useFilters();

    const removeFilter = (filterKey, value) => {
        console.log('remove clicked')
        const currentValues = filters[filterKey];
        const filterValues = currentValues.filter((item) => item !== value);
        updateFilter(filterKey, filterValues);
    }

    const clearAllFilters = () => {
        updateFilter('colors', []);
        updateFilter('sizes', []);
        updateFilter('priceRange', [0, 10000]);
    }

    return(
        <div className="filter-chips">
            <h1>Active Filters:</h1>
            <div className="chips-container">
                {/* show colors filter */}
                {filters.colors.map((color, ind) => {
                    return(
                        <div className="filter-chip" key={color-ind}>
                            <span>{color}</span>
                            <span onClick={() => removeFilter('colors', color)}>x</span>
                        </div>
                    )
                })}

                {/* show sizes filter */}
                {filters.sizes.map((size, ind) => {
                    return(
                        <div className="filter-chip" key={size-ind}>
                            <span>{size}</span>
                            <span onClick={() => removeFilter('sizes', size)}>x</span>
                        </div>
                    )
                })}

                {/* show priceRanger filter */}
                <div className="filter-chip">
                    <span>${filters.priceRange[0]} - ${filters.priceRange[1]}</span>
                </div>
            </div>
            <button className="btn btn--outline" onClick={clearAllFilters}>Clear All</button>
        </div>
    )
}

export default FilterChips;