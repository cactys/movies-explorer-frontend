import {
  MOVIE_DURATION,
  PAGE_SIZE_1024,
  PAGE_SIZE_1280,
  PAGE_SIZE_425,
} from './constants';

export const intToTime = (time) => {
  const hours = Math.trunc(time / 60);
  const minutes = time % 60;
  return hours === 0 ? `${minutes}м` : `${hours}ч ${minutes}м`;
};

export const pageSize = () => {
  if (window.innerWidth <= 500) {
    return PAGE_SIZE_425;
  }
  if (window.innerWidth > 1024) {
    return PAGE_SIZE_1280;
  } else {
    return PAGE_SIZE_1024;
  }
};

export const getSavedMovie = (arr, movie) => {
  return arr.find((item) => {
    return item.movieId === (movie.id || movie.movieId);
  });
};

export const filterShortCheckbox = (checked, movies) => {
  if (checked) {
    return movies.filter((movie) => movie.duration < MOVIE_DURATION);
  } else {
    return movies;
  }
};

export const searchMovie = (movies, query) => {
  const movieByUserQuery = movies.filter((movie) => {
    const nameRu = String(movie.nameRU).toLowerCase().trim();
    const nameEn = String(movie.nameEN).toLowerCase().trim();
    const userMovie = query.toLowerCase().trim();
    return nameRu.indexOf(userMovie) !== -1 || nameEn.indexOf(userMovie) !== -1;
  });

  return movieByUserQuery;
};
