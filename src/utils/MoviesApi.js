import { moviesApiUrl } from "./constants";

class MoviesApi {
    constructor(apiUrl) {
        this._url = apiUrl;
    }

    _checkResponse(res) {
        if(res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`)
    }

    getFilms() {
        return fetch(this._url, {
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => this._checkResponse(res));
    }
}

export const moviesApi = new MoviesApi(moviesApiUrl);