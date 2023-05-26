import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { PrivateRoute } from '../private-route/private-route';
import { AddReview, Film, MainPage, MyList, NotFound, Player, SignIn } from '../../pages';
import FilmType from '../../types/film-type';
import ReviewType from '../../types/review-type';

type AppProps = {
  films: FilmType[];
  reviews: ReviewType[];
};

export const App = (props: AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.AddReview} element={<AddReview films={props.films}/>} />
      <Route path={AppRoute.Film} element={<Film films={props.films} reviews={props.reviews}/>} />
      <Route path={AppRoute.MainPage} element={<MainPage films={props.films}/>} />
      <Route path={AppRoute.MyList} element={
        <PrivateRoute authStatus={AuthStatus.NoAuth}>
          <MyList films={props.films}/>
        </PrivateRoute>
      }
      />
      <Route path={AppRoute.NotFound} element={<NotFound/>} />
      <Route path={AppRoute.Player} element={<Player films={props.films}/>} />
      <Route path={AppRoute.SignIn} element={<SignIn/>} />
    </Routes>
  </BrowserRouter>
);
