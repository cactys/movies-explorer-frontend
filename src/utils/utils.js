import { MOVIE_DURATION, } from './constants';

export const intToTime = (time) => {
  const hours = Math.trunc(time / 60);
  const minutes = time % 60;
  return hours === 0 ? `${minutes}м` : `${hours}ч ${minutes}м`;
};

// export const pageSize = () => {
//   if (window.innerWidth <= 500) {
//     return PAGE_SIZE[425];
//   }
//   if (window.innerWidth > 1024) {
//     return PAGE_SIZE[1280];
//   } else {
//     return PAGE_SIZE[1024];
//   }
// };

export const getSavedMovie = (arr, movie) => {
  return arr.find((item) => {
    return item.movieId === (movie.id || movie.movieId);
  });
};

export const filterShortCheckbox = (movies) => {
  return Array.isArray(movies)
    ? movies.filter((movie) => movie.duration < MOVIE_DURATION)
    : null;
};

export const filterSearchMovie = (movies, query, shortCheckbox) => {
  const movieByUserQuery = movies.filter((movie) => {
    const nameRu = String(movie.nameRU).toLowerCase().trim();
    const nameEn = String(movie.nameEN).toLowerCase().trim();
    const userMovie = query.toLowerCase().trim();
    return nameRu.indexOf(userMovie) !== -1 || nameEn.indexOf(userMovie) !== -1;
  });

  return movieByUserQuery;
};
