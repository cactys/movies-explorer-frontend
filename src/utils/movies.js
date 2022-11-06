import { URL } from './content';

class Movies {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _checkingResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._url}/beatfilm-movies`, {
      method: 'GET',
    }).then(this._checkingResponse);
  }
}

const MOVIES_API = {
  baseUrl: `${URL}`,
  // headers: {
  //   'Content-Type': 'application/json',
  // },
};

const movies = new Movies(MOVIES_API);

export default movies;
