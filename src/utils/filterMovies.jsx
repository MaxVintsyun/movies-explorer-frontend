const filterFilms = (savedFilms, films, currentUser) => {
    for(let i = 0; i < films.length; i++) {
        for(let j = 0; j < savedFilms.length; j++) {
            if (films[i].id === savedFilms[j].movieId && savedFilms[j].owner.toString() === currentUser._id) {
                films[i].owner = savedFilms[j].owner.toString();
            }
        }
    }
    return films;
}

export default filterFilms;