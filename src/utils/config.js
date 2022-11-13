export const GLOBAL_URL = 'https://api.nomoreparties.co';
export const BASE_URL = 'http://localhost:3030';

export const intToTime = (time) => {
  const hours = Math.trunc(time / 60);
  const minutes = time % 60;
  return hours === 0 ? `${minutes}м` : `${hours}ч ${minutes}м`;
};

const PAGE_SIZE_1280 = 12;
const PAGE_SIZE_1024 = 8;
const PAGE_SIZE_425 = 5;

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
