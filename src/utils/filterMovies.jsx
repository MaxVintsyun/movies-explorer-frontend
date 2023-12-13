const filterFilms = (savedFilms, films, currentUser) => {
    for(let i = 0; i < films.length; i++) {
        for(let j = 0; j < savedFilms.length; j++) {
            if (films[i].id === savedFilms[j].movieId) {
                films[i].owner = currentUser._id;
            }
        }
    }
    return films;
}

export default filterFilms;