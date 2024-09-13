import { useFilters } from "../context/useFilters"
import '../styles/rangeFilter.css';

const RangeFilter = ({ min, max, step, label, filterKey }) => {
    const { filters, updateFilter } = useFilters();

    const handleInputChange = (e) => {
        const value = [min, e.target.value];
        updateFilter(filterKey, value);
    }

    return(
        <div className="filter-items">
            {/*  */}
            <div className="filter-item"> 
               <input 
                className="slider"
                type="range"
                id="price"
                min={min}
                max={max}
                step={step}
                value={filters[filterKey][1]}
                name="color-pink"
                onChange={handleInputChange}     
            />
              <label htmlFor="color-pink">{}</label>
            </div>
        </div>
    )
}

export default RangeFilter;