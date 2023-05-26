import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { PrivateRoute } from '../private-route/private-route';
import { AddReview, Film, MainPage, MyList, NotFound, Player, SignIn } from '../../pages';
import ReviewType from '../../types/review-type';
import { Spinner } from '../spinner/spinner';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { filterFilmsByCurrentGenre } from '../../store/action';

type AppProps = {
  reviews: ReviewType[];
};

export const App = (props: AppProps): JSX.Element => {
  const dispatch = useAppDispatch();
  dispatch(filterFilmsByCurrentGenre());
  const isDataLoading = useAppSelector((state) => state.isDataLoading);

  if (isDataLoading) {
    return (<Spinner/>);
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.AddReview} element={<AddReview />} />
          <Route path={AppRoute.Film} element={<Film reviews={props.reviews} />} />
          <Route path={AppRoute.MainPage} element={<MainPage />} />
          <Route path={AppRoute.MyList} element={
            <PrivateRoute authStatus={AuthStatus.NoAuth}>
              <MyList />
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.NotFound} element={<NotFound/>} />
          <Route path={AppRoute.Player} element={<Player />} />
          <Route path={AppRoute.SignIn} element={<SignIn/>} />
        </Routes>
      </BrowserRouter>
    );
  }
};
