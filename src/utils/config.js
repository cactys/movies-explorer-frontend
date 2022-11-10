export const GLOBAL_URL = 'https://api.nomoreparties.co';
export const BASE_URL = 'http://localhost:3030';

export const intToTime = (time) => {
  const hours = Math.trunc(time / 60);
  const minutes = time % 60;
  return hours === 0 ? `${minutes}м` : `${hours}ч ${minutes}м`;
};

export const PAGE_SIZE_1280 = 12;
export const PAGE_SIZE_1024 = 8;
export const PAGE_SIZE_425 = 5;

