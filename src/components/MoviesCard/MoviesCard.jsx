import { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function MoviesCard({
    movieId,
    film,
    trailer,
    image,
    title,
    duration,
    owner,
    onSave,
    onDelete
}) {
    const currentUser = useContext(CurrentUserContext);
    const [isSaved, setIsSaved] = useState(owner === currentUser._id || false);
    const location = useLocation();
    const [button, setButton] = useState(false);

    const parseDuration = () => {
        const hours = Math.trunc(duration / 60) > 0 ? `${Math.trunc(duration / 60)}ч ` : '';
        const minutes = duration % 60 > 0 ? `${duration % 60}мин` : '';
        return `${hours}${minutes}`
    }

    const handleSave = () => {
        onSave(film);
        setIsSaved(true);
    }

    const handleDelete = () => {
        onDelete(movieId);
        setIsSaved(false)
    }

    useEffect(() => {
        isSaved ? setButton(true) : setButton(false);
    }, [isSaved])

    return (
        <div className="movie">
            <a className="movie__image-container" href={trailer} target="_blank" rel="noreferrer">
                <img className="movie__image" src={image} alt={title} />
            </a>
            <div className="movie__info">
                <p className="movie__title">{title}</p>
                <p className="movie__duration">{parseDuration()}</p>
            </div>
            {location.pathname !== '/saved-movies' ? (
                button ? (
                    <button className="movie__saved" onClick={handleDelete} />
                ) : (
                    <button className="movie__save" onClick={handleSave}>Сохранить</button>
                )
            ) : (
                <button className="movie__delete" onClick={handleDelete} />
            )
            }
        </div>
    );
}

export default MoviesCard;