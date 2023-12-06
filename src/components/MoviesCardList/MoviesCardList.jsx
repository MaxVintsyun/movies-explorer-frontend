import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ films, isSort, filmsToShow }) {
    const getShortFilms = (film) => {
        return film.duration <= 52;
    }

    const sortedFilms = films.filter(getShortFilms);

    return (
        <>
            <div className="movies__container">
                {isSort ?
                    sortedFilms
                        .slice(0, filmsToShow)
                        .map((film) =>
                            <MoviesCard
                                key={film.id}
                                image={film.image}
                                title={film.title}
                                duration={film.duration}
                                owner={film.owner} 
                            />)
                    :
                    films
                        .slice(0, filmsToShow)
                        .map((film) =>
                            <MoviesCard
                                key={film.id}
                                image={film.image}
                                title={film.title}
                                duration={film.duration}
                                owner={film.owner} 
                            />)
                }
            </div>
            {(
                (films.length > filmsToShow) ||
                (isSort && sortedFilms.length > filmsToShow)
            ) &&
                <button className="movies__more">Ещё</button>
            }
        </>
    );
}

export default MoviesCardList;