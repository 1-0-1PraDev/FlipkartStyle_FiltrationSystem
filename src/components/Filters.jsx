import RangeFilter from "./RangeFilter";
import ColorFilter from "./ColorFIlter";
import CheckBoxFilter from "./CheckBoxFilter";
import AccordionFilter from "./AccordionFilter";

const Filters = () => {
    const sizeOptions = ['Small', 'Medium', 'Large', 'XL'];
    const colorsOptions = ['#000000', '#ff9900', '#33cc33', '#ccff66', '#f2e6d9'];

    return (
        <div className="filters">
            <AccordionFilter title={'Price'}>
                <RangeFilter min={399} max={9999} step={100} label={'Price'} filterKey={'priceRange'} />
            </AccordionFilter>

            <AccordionFilter title={'Colors'}>
                <ColorFilter options={colorsOptions} label={'Colors'} filterKey={'colors'} />
            </AccordionFilter>

            <AccordionFilter title={'Sizes'}>
                <CheckBoxFilter options={sizeOptions} label={'Sizes'} filterKey={'sizes'} />
            </AccordionFilter>
        </div>
    )
}

export default Filters;