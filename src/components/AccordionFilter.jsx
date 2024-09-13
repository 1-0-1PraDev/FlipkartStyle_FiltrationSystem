import { useState } from "react";

const AccordionFilter = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen((prevState) => !prevState);
    }

    return (
        <div className="accordion-filter">
            <div className="accordion-filter__header" onClick={toggleAccordion}>
                <div className="leftBx">
                    <h1>{title}</h1>
                </div>
                <div className="rightBx">
                    <span className="close-icon">
                        {isOpen ? '-' : '+'}
                    </span>
                </div>
            </div>
            {isOpen && (
                <div className="accordion-filter__body">
                    { children }
                </div>
            )}  
        </div>
    )   
}

export default AccordionFilter;