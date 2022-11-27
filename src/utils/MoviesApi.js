import { URL } from './constants';

class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkingResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      method: 'GET',
    }).then(this._checkingResponse);
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: URL.beatfilmMovies,
  headers: {
    'Content-Type': 'application/json',
  },
});
