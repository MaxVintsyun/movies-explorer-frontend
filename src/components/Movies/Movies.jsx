import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({ isLoading, films, searchReq, searchText, isSort, onSort, onSearch, onSave, onDelete }) {
    return (
        <section className="movies">
            <SearchForm
                onSort={onSort}
                searchReq={searchReq}
                isSort={isSort}
                onSearch={onSearch}
            />
            <MoviesCardList
                isLoading={isLoading}
                films={films}
                searchText={searchText}
                onSave={onSave}
                onDelete={onDelete}
            />
        </section>
    );
}

export default Movies;