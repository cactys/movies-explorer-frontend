import { GLOBAL_URL, BASE_URL } from './config';

class Api {
  constructor({ baseUrl, globalUrl, headers }) {
    this._globalUrl = globalUrl;
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
    return fetch(`${this._globalUrl}/beatfilm-movies`, {
      method: 'GET',
    }).then(this._checkingResponse);
  }

  getUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    }).then(this._checkingResponse);
  }

  editUser(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then(this._checkingResponse);
  }

  getCurrentMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    }).then(this._checkingResponse);
  }

  getAllPromise() {
    return Promise.all();
  }
}

export const api = new Api({
  globalUrl: GLOBAL_URL,
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
