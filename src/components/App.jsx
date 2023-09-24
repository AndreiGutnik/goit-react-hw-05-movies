import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Layout } from 'components/Layout/Layout';
import { routes } from 'routes';

const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Reviews = lazy(() =>
  import('../components/Reviews/MovieReviews/Reviews')
);
const Cast = lazy(() => import('../components/Cast/MovieCast/Cast'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={routes.MOVIES} element={<Movies />} />
          <Route path={routes.MOVIEDETAILS} element={<MovieDetails />}>
            <Route path={routes.CAST} element={<Cast />} />
            <Route path={routes.REVIEWS} element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
    </>
  );
};
