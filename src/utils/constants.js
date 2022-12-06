export const URL = {
  beatfilmMovies: 'https://api.nomoreparties.co',
  // localApi: 'https://api.khnychkov.nomoredomains.icu',
  localApi: 'http://localhost:3030',
};

export const PAGE_SIZE = {
  desktop: {
    width: 1024,
    cards: {
      total: 12,
      load: 3,
    },
  },
  table: {
    width: 501,
    cards: {
      total: 8,
      load: 2,
    },
  },
  mobile: {
    width: 500,
    cards: {
      total: 5,
      load: 2,
    },
  },
};

export const MOVIE_DURATION = 40;

export const MESSAGE = {
  incorrectEmail: 'Некорректный адрес e-mail.',
  incorrectName:
    'Имя должно содержать только латиницу, кириллицу, пробел или дефис.',
  enterKeyword: 'Нужно ввести ключевое слово',
  catchError: 'Что-то пошло не так! Попробуйте ещё раз.',
  notFound: 'Ничего не найдено',
  queryError:
    'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
  defaultMessage: 'Введите ключевое слово для поиска',
};
