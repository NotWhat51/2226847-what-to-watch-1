import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const PromoFilm = {
  nameFilm: 'A Clockworkk Orange',
  genreFilm: 'fantasy',
  releaseYearFilm: 1971
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App nameFilm={PromoFilm.nameFilm} genreFilm={PromoFilm.genreFilm} releeseYearFilm={PromoFilm.releaseYearFilm} />
  </React.StrictMode>,
);
