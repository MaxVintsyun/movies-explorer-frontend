import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({ films, isSort, onSort }) {
    return(
        <section className="movies">
            <SearchForm isSort={isSort} onSort={onSort}/>
            <MoviesCardList films={films} isSort={isSort} />
        </section>
    );
}

export default SavedMovies;