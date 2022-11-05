const URL = 'https://api.nomoreparties.co';

const intToTime = (time) => {
  const hours = Math.trunc(time / 60);
  const minutes = time % 60;
  return hours === 0 ? `${minutes}м` : `${hours}ч ${minutes}м`;
};

export const PAGE_SIZE = 12;

export const cards = [
  {
    _id: 1,
    title: '«Роллинг Стоунз» в изгнании',
    duration: intToTime(61),
    image: `${URL}/uploads/stones_in_exile_b2f1b8f4b7.jpeg`,
  },
  {
    _id: 2,
    title: `All Tomorrow's Parties`,
    duration: intToTime(82),
    image: `${URL}/uploads/all_tommoros_parties_33a125248d.jpeg`,
  },
  {
    _id: 3,
    title: ' Без обратного пути',
    duration: intToTime(104),
    image: `${URL}/uploads/blur_a43fcf463d.jpeg`,
  },
  {
    _id: 4,
    title: 'Bassweight',
    duration: intToTime(61),
    image: `${URL}/uploads/zagruzhennoe_113f557116.jpeg`,
  },
  {
    _id: 5,
    title: 'Taqwacore: The Birth of Punk Islam',
    duration: intToTime(80),
    image: `${URL}/uploads/taqwacore2_2f487d2e74.jpeg`,
  },
  {
    _id: 6,
    title: 'Фавела на взрыве',
    duration: intToTime(80),
    image: `${URL}/uploads/881707734_640_d6a3a43358.jpeg`,
  },
  {
    _id: 7,
    title: 'Постеры, сошедшие со стен',
    duration: intToTime(72),
    image: `${URL}/uploads/posters_came_from_the_walls_2009_001_posters_180fe1a19f.jpeg`,
  },
  {
    _id: 8,
    title: 'Soul Power',
    duration: intToTime(92),
    image: `${URL}/uploads/images_5bfcbf36e6.jpeg`,
  },
  {
    _id: 9,
    title: ' 196 ударов в минуту',
    duration: intToTime(60),
    image: `${URL}/uploads/zagruzhennoe_1_fd5faff237.jpeg`,
  },
  {
    _id: 10,
    title: ' Hit So Hard: Школа жизни Патти Шемель',
    duration: intToTime(103),
    image: `${URL}/uploads/images_244e1fd56f.jpeg`,
  },
  {
    _id: 11,
    title: ' Баллада о Дженезисе и Леди Джей',
    duration: intToTime(65),
    image: `${URL}/uploads/ballad_of_genesis_and_lady_jaye_10c27afa96.jpeg`,
  },
  {
    _id: 12,
    title: 'Виллалобос',
    duration: intToTime(110),
    image: `${URL}/uploads/590x400_2eccd40a93.jpeg`,
  },
  {
    _id: 13,
    title: 'Между дьяволом и глубоким синим морем',
    duration: intToTime(89),
    image: `${URL}/uploads/8647b36126befd6051c83ae66339d7f71ecbaa0d_752489df96.jpeg`,
  },
  {
    _id: 14,
    title: 'Ритмы свободы',
    duration: intToTime(73),
    image: `${URL}/uploads/1_6a9e0669ca.jpeg`,
  },
  {
    _id: 15,
    title: 'Сепарадо!',
    duration: intToTime(84),
    image: `${URL}/uploads/zagruzhennoe_cba9c9f900.jpeg`,
  },
  {
    _id: 16,
    title: ' С ног на голову: История Creation records',
    duration: intToTime(101),
    image: `${URL}/uploads/b452eefcd7d441e79b2f5ae291b7_2c0c62fa89.jpeg`,
  },
  {
    _id: 17,
    title: 'Я всё ещё здесь',
    duration: intToTime(108),
    image: `${URL}/uploads/280x178_2_f2eee77cae.jpeg`,
  },
  {
    _id: 18,
    title: 'Большие надежды',
    duration: intToTime(72),
    image: `${URL}/uploads/zagruzhennoe_1_dc1a2c8f7d.jpeg`,
  },
  {
    _id: 19,
    title: 'Whateverest',
    duration: intToTime(15),
    image: `${URL}/uploads/704543546_960_d6340bce70.jpeg`,
  },
  {
    _id: 61,
    title: 'Когда Бьорк встретила Аттенборо',
    duration: intToTime(47),
    image: `${URL}/uploads/When_Bjoerk_Met_Attenborough_Title_Card_d6a713d2b4.png`,
  },
  {
    _id: 63,
    title: 'Три камня для Жана Жене',
    duration: intToTime(7),
    image: `${URL}/uploads/zagruzhennoe_edcf93eb96.jpeg`,
  },
  {
    _id: 64,
    title: 'Повинуйся художнику',
    duration: intToTime(14),
    image: `${URL}/uploads/maxresdefault_88702f9bc0.jpeg`,
  },
  {
    _id: 65,
    title: 'Аманда *** Палмер без гроша',
    duration: intToTime(18),
    image: `${URL}/uploads/full_Amanda_F_ing_Palmer_web_IMG_1015_cbc67aff4a.jpeg`,
  },
  {
    _id: 66,
    title: 'Алан Вега. Миллион мечтаний',
    duration: intToTime(16),
    image: `${URL}/uploads/a048f25d_cc42_4c2c_aa8d_5878118806d7_ffd3e73bf8.jpeg`,
  },
];

export const savedCards = [
  {
    _id: 63,
    title: 'Три камня для Жана Жене',
    duration: intToTime(7),
    image: `${URL}/uploads/zagruzhennoe_edcf93eb96.jpeg`,
  },
  {
    _id: 65,
    title: 'Аманда *** Палмер без гроша',
    duration: intToTime(18),
    image: `${URL}/uploads/full_Amanda_F_ing_Palmer_web_IMG_1015_cbc67aff4a.jpeg`,
  },
  {
    _id: 14,
    title: 'Ритмы свободы',
    duration: intToTime(73),
    image: `${URL}/uploads/1_6a9e0669ca.jpeg`,
  },
];
