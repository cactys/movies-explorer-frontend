export const GLOBAL_URL = 'https://api.nomoreparties.co';
export const BASE_URL = 'https://api.khnychkov.nomoredomains.icu';

export const intToTime = (time) => {
  const hours = Math.trunc(time / 60);
  const minutes = time % 60;
  return hours === 0 ? `${minutes}м` : `${hours}ч ${minutes}м`;
};

export const PAGE_SIZE = 12;
