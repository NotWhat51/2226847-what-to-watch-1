import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../route';
import { PrivateRoute } from '../private-route/private-route';
import { AddReview, Film, MainPage, MyList, NotFound, Player, SignIn } from '../../pages';
import { MainPageProps } from '../../pages/main-page/main-page';

export const App = (props: MainPageProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.AddReview} element={<AddReview/>} />
      <Route path={AppRoute.Film} element={<Film/>} />
      <Route path={AppRoute.MainPage} element={<MainPage {...props}/>} />
      <Route path={AppRoute.MyList} element={
        <PrivateRoute authStatus={AuthStatus.NoAuth}>
          <MyList/>
        </PrivateRoute>
      }
      />
      <Route path={AppRoute.NotFound} element={<NotFound/>} />
      <Route path={AppRoute.Player} element={<Player/>} />
      <Route path={AppRoute.SignIn} element={<SignIn/>} />
    </Routes>
  </BrowserRouter>
);
