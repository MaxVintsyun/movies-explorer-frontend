import { mainApiUrl } from "./constants";

class MainApi {
    constructor(apiUrl) {
        this._url = apiUrl;
    }

    _checkResponse(res) {
        if(res.ok) {
            return res.json();
        }

        return Promise.reject(res.status)
    }

    _getToken() {
        return `Bearer ${localStorage.getItem('jwt')}`;
    }

    registerUser(email, password, name) {
        return fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: {
                'Accept': "application/json",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password, name})
        })
        .then(res => this._checkResponse(res));
    }

    authUser(email, password) {
        return fetch(`${this._url}/signin`, {
            method: 'POST',
            headers: {
                'Accept': "application/json",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
        .then(res => this._checkResponse(res));
    }

    checkToken(userToken) {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${userToken}`
            }
        })
        .then(res => this._checkResponse(res))
    }

    updateUserInfo(email, name) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._getToken(),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                name: name
            })
        })
        .then(res => this._checkResponse(res));
    }

    getMovies() {
        return fetch(`${this._url}/movies`, {
            method: 'GET',
            headers: {
                authorization: this._getToken(),
                'Content-Type': 'application/json'
            }
        })
        .then(res => this._checkResponse(res));
    }

    postMovie(movieData) {
        return fetch(`${this._url}/movies`, {
            method: 'POST',
            headers: {
                authorization: this._getToken(),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                country: movieData.country,
                director: movieData.director,
                duration: movieData.duration,
                year: movieData.year,
                description: movieData.description,
                image: `https://api.nomoreparties.co/${movieData.image.url}`,
                trailerLink: movieData.trailerLink,
                thumbnail: `https://api.nomoreparties.co/${movieData.image.url}`,
                movieId: movieData.id,
                nameRU: movieData.nameRU,
                nameEN: movieData.nameEN
            })
        })
        .then(res => this._checkResponse(res));
    }

    deleteMovie(movieId) {
        return fetch(`${this._url}/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._getToken(),
                'Content-Type': 'application/json'
            }
        })
        .then(res => this._checkResponse(res));
    }
}

export const mainApi = new MainApi(mainApiUrl);