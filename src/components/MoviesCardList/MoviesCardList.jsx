import { useState, useEffect } from "react";
import useResize from "../../utils/useResize";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({ isLoading, defaultFilms, films, searchText, onSave, onDelete }) {
    const [moreFilms, setMoreFilms] = useState(0);
    const [showedFilms, setShowedFilms] = useState(0);
    const windowWidth = useResize();

    useEffect(() => {
        let cardsColumns = Math.floor(windowWidth / 300);
        let cardsRows = 4;
        if (cardsColumns > 4) {
            cardsColumns = 3;
        } else if (windowWidth < 690) {
            cardsColumns = 1;
            cardsRows = 5;
        }
        setMoreFilms(cardsColumns);
        setShowedFilms(cardsColumns * cardsRows);
    }, [windowWidth])

    const addFilms = () => {
        const remainingFilms = showedFilms + moreFilms < films.length ? showedFilms + moreFilms : films.length;

        setShowedFilms(remainingFilms);
    }

    return (
        <>
            {films.length > 0  ? (
                <div className="movies__container">
                    {isLoading ?
                        <Preloader /> :
                        <>
                            {films
                                .slice(0, showedFilms)
                                .map((film) =>
                                    <MoviesCard
                                        key={film.id ? film.id : film.movieId}
                                        movieId={film.id ? film.id : film.movieId}
                                        film={film}
                                        trailer={film.trailerLink}
                                        image={film.image.url ? `https://api.nomoreparties.co/${film.image.url}` : film.image}
                                        title={film.nameRU}
                                        duration={film.duration}
                                        owner={film.owner}
                                        onSave={onSave}
                                        onDelete={onDelete}
                                    />)}
                            {(films.length > showedFilms) && <button onClick={addFilms} className="movies__more">Ещё</button>}
                        </>
                    }
                </div>
            ) : (
                <p className="movies__container_info">{searchText}</p>
            )}
        </>
    );
}

export default MoviesCardList;