import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({ isLoading, films, searchReq, searchText, isSort, onSearch, onSort, onDelete }) {
    return (
        <section className="movies">
            <SearchForm
                isSort={isSort}
                searchReq={searchReq}
                onSort={onSort}
                onSearch={onSearch}
            />
            <MoviesCardList
                isLoading={isLoading}
                films={films}
                searchText={searchText}
                onDelete={onDelete} />
        </section>
    );
}

export default SavedMovies;