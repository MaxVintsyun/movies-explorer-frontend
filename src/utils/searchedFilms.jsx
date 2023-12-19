const getSearchedMovies = (searchParam, films) => {
    return new Promise((resolve, reject) => {
        if (filterMovies(searchParam, films).length > 0 && searchParam.length !== 0) {
            resolve({ searchParam, films });
        } else {
            reject('Ничего не найдено');
        }
    });
}

const filterMovies = (searchParam, films) => {
    const filteredFilms = films.filter((film) => {
        return (
            film.nameRU.toLowerCase().indexOf(searchParam.toLowerCase()) !== -1 ||
            film.nameEN.toLowerCase().indexOf(searchParam.toLowerCase()) !== -1
        );
    });

    return filteredFilms;
}

const searchedMovies = (searchParam, films) => {
    return getSearchedMovies(searchParam, films)
    .then(({ searchParam, films }) => {
        return filterMovies(searchParam, films);
    })
}

export default searchedMovies;