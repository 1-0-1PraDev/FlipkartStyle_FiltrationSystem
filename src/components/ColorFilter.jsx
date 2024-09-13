import { useFilters } from "../context/useFilters"

const ColorFilter = ({ options, label, filterKey }) => {
    const { filters, updateFilter } = useFilters();

    const toggleOption = (color) => {
        const currentOptions = filters[filterKey];
        const filteredOptions = currentOptions.includes(color) 
            ? currentOptions.filter((opt) => opt !== color)
            : [...currentOptions, color];

        updateFilter(filterKey, filteredOptions);
    }

    return(
        <div className="filter-items">
            {/*  */}
            {options.map((option, ind) => {
                const isChecked = filters[filterKey].includes(option);
                console.log(option)
                return(
                    <div className="filter-item" key={ind}> 
                        <input type="checkbox" name={`color-${option}`} id={`color-${option}`} checked={isChecked} onChange={() => toggleOption(option)} />
                        <label htmlFor={`color-${option}`}>{option}</label>
                    </div>
                )
            })}
        </div>
    )
}

export default ColorFilter;