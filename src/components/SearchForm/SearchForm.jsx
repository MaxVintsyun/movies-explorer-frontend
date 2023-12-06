import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ isSort, onSort }) {
    return(
        <div className="search">
            <form className="search-form">
                <input className="search-form__input" id="search-form-input" name="search" type="text" placeholder="Фильм" />
                <button className="search-form__button" type="submit" />
            </form>
            <FilterCheckbox isSort={isSort} onSort={onSort} />
        </div>
    );
}

export default SearchForm;