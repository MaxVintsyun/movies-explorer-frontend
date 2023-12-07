import { useLocation } from "react-router-dom";

function MoviesCard({ image, title, duration, owner }) {
    const location = useLocation();

    const parseDuration = () => {
        const hours = Math.trunc(duration / 60) > 0 ? `${Math.trunc(duration / 60)}ч ` : '';
        const minutes = duration % 60 > 0 ? `${duration % 60}мин` : '';
        return `${hours}${minutes}`
    }

    return (
        <div className="movie">
            <div className="movie__image-container">
                <img className="movie__image" src={image} alt={title} />
            </div>
            <div className="movie__info">
                <p className="movie__title">{title}</p>
                <p className="movie__duration">{parseDuration()}</p>
            </div>
            {location.pathname !== '/saved-movies' ? (
                owner === 'me' ? (
                    <div className="movie__saved" />
                ) : (
                    <button className="movie__save">Сохранить</button>
                )
            ) : (
                <button className="movie__delete" />
            )
            }
        </div>
    );
}

export default MoviesCard;