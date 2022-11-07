import { GLOBAL_URL, BASE_URL } from './config';

class Api {
  constructor({ baseUrl, globalUrl, headers, body }) {
    this._globalUrl = globalUrl;
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._body = body;
  }

  _checkingResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._globalUrl}/beatfilm-movies`, {
      method: 'GET',
    }).then(this._checkingResponse);
  }

  getCurrentMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
      body: this._body,
    }).then(this._checkingResponse);
  }

  getAllPromise() {
    return Promise.all()
  }
}

export const api = new Api({
  globalUrl: GLOBAL_URL,
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    password: '12345678',
    email: 'cac@ya.ru',
  }),
});
