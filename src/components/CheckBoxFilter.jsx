import { useFilters } from "../context/useFilters"

const CheckBoxFilter = ({ options, label, filterKey }) => {
    const { filters, updateFilter } = useFilters();

    const toggleOption = (option) => {
        const currentOptions = filters[filterKey];
        const filteredOptions = currentOptions.includes(option) 
            ? currentOptions.filter((opt) => opt !== option)
            : [...currentOptions, option];

        updateFilter(filterKey, filteredOptions);
    }

    return(
        <div className="filter-items">
            {/*  */}
            {options.map((option, ind) => {
                const isChecked = filters[filterKey].includes(option);
                return(
                    <div className="filter-item" key={ind}> 
                        <input type="checkbox" name={option} id={option} checked={isChecked} onChange={() => toggleOption(option)} />
                        <label htmlFor={option}>{option}</label>
                    </div>
                )
            })}
        </div>
    )
}

export default CheckBoxFilter;