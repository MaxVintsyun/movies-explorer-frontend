import { useState, useRef } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ isSort, searchReq, onSort, onSearch }) {
    const [inputValue, setInputValue] = useState(searchReq || '');

    const handleChange = () => {
        setInputValue(searchParam.current.value);
    }

    const searchParam = useRef();

    const handleSubmit = (evt) => {
        evt.preventDefault();

        onSearch(searchParam.current.value);
    }

    return(
        <div className="search">
            <form className="search-form" onSubmit={handleSubmit}>
                <input className="search-form__input" id="search-form-input" value={inputValue} ref={searchParam} onChange={handleChange} name="search" type="text" placeholder="Фильм" />
                <button className="search-form__button" type="submit" />
            </form>
            <FilterCheckbox isSort={isSort} onSort={onSort} />
        </div>
    );
}

export default SearchForm;