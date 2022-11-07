export const GLOBAL_URL = 'https://api.nomoreparties.co';
export const BASE_URL = 'https://api.khnychkov.nomoredomains.icu';

export const intToTime = (time) => {
  const hours = Math.trunc(time / 60);
  const minutes = time % 60;
  return hours === 0 ? `${minutes}м` : `${hours}ч ${minutes}м`;
};

export const PAGE_SIZE = 12;

export const savedCards = [
  {
    _id: 63,
    title: 'Три камня для Жана Жене',
    duration: intToTime(7),
    image: `${GLOBAL_URL}/uploads/zagruzhennoe_edcf93eb96.jpeg`,
  },
  {
    _id: 65,
    title: 'Аманда *** Палмер без гроша',
    duration: intToTime(18),
    image: `${GLOBAL_URL}/uploads/full_Amanda_F_ing_Palmer_web_IMG_1015_cbc67aff4a.jpeg`,
  },
  {
    _id: 14,
    title: 'Ритмы свободы',
    duration: intToTime(73),
    image: `${GLOBAL_URL}/uploads/1_6a9e0669ca.jpeg`,
  },
];
