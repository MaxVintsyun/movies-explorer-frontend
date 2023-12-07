import React from "react";

function NavTab({ elements }) {
    const handleClick = (element) => {
        element.ref.current?.scrollIntoView({behavior: 'smooth'});
    }

    return(
        <div className="navtab">
            {elements.map((element, index) => (
               <button key={index} className="navtab__element" onClick={() => handleClick(element)}>{element.text}</button> 
            ))}
        </div>
    );
}

export default NavTab;