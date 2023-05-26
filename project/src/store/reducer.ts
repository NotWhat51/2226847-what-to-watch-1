import { createReducer } from '@reduxjs/toolkit';
import { ALL_GENRE, DEFAULT_GENRE } from '../const';
import { changeGenre,filterFilmsByCurrentGenre, fillFilms } from './action';
import FilmType from '../types/film-type';

const initState: {
  films: FilmType[];
  filteredFilms: FilmType[];
  currentGenre: string;
} = {
  films: [],
  filteredFilms: [],
  currentGenre: DEFAULT_GENRE,
};

const reducer = createReducer(initState, ((builder) => {
  builder.addCase(changeGenre, (state, action) => {
    state.currentGenre = action.payload.newGenre;
  })
    .addCase(fillFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(filterFilmsByCurrentGenre, (state) => {
      state.filteredFilms = state.currentGenre === ALL_GENRE ? state.films : state.films.filter((film) => film.genre === state.currentGenre);
    });
}));

export default reducer;
