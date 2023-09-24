import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import {
  HeaderStyled,
  LayoutStyled,
  Logo,
  NavList,
  Navigation,
  StyledLink,
} from './Layout.styled';
import { routes } from 'routes';

export function Layout() {
  return (
    <>
      <HeaderStyled>
        <LayoutStyled>
          <Navigation>
            <Link to="/">
              <Logo
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="logo"
              />
            </Link>
            <NavList>
              <li>
                <StyledLink to={routes.HOME}>Home</StyledLink>
              </li>
              <li>
                <StyledLink to={routes.MOVIES}>Movies</StyledLink>
              </li>
            </NavList>
          </Navigation>
        </LayoutStyled>
      </HeaderStyled>
      <main>
        <Suspense
          fallback={
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#3F51B5"
              ariaLabel="three-dots-loading"
              wrapperStyle={{ justifyContent: 'center' }}
              wrapperClassName=""
              visible={true}
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
