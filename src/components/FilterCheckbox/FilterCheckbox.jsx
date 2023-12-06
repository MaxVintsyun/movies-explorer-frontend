function FilterCheckbox({ isSort, onSort }) {
    return(
        <label className="filter">
            <input className="filter__checkbox" id="short-film-checkbox" name="short-film" type="checkbox" checked={isSort} onChange={onSort} />
            <div className="filter__checkmark" />
            <span className="filter__label">Короткометражки</span>
        </label>
    );
}

export default FilterCheckbox;