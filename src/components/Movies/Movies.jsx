import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({ films, isSort, filmsToShow, onSort }) {
    return(
        <section className="movies">
            <SearchForm onSort={onSort} isSort={isSort}/>
            <MoviesCardList films={films} isSort={isSort} filmsToShow={filmsToShow} />
        </section>
    );
}

export default Movies;