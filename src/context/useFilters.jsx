import { createContext, useContext, useState } from 'react';

// Create filter context
const FilterContext = createContext();

// Creating Provider
export const FilterProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        sortBy: "",
        priceRange: [0, 4000],
        colors: [],
        sizes: []
    });

    const updateFilter = (key, value) => {
        setFilters((prevState) => {
            return {...prevState, [key]: value}
        }); 
    }

    return(
        <FilterContext.Provider value={{filters, updateFilter}}>
            { children }
        </FilterContext.Provider>
    )
}

export const useFilters = () => useContext(FilterContext);