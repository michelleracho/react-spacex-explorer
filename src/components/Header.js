import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { logout } from '../services/firebase';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3.5rem;
  background-color: var(--primary-brand-color);
  box-shadow: 1px 1px 10px 1px var(--light-shadow);

  h1 {
    font-size: 5rem;
    font-family: var(--logo-font);
  }

  span {
    font-size: 2rem;
    font-weight: 700;
    cursor: pointer;
    margin-right: 2rem;
    color: var(--secondary-brand-color);
  }

  a,
  a:link,
  a:visited {
    color: var(--secondary-brand-color);
    text-decoration: none;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  margin-left: 3rem;

  div {
    display: flex;
    align-items: center;
  }

  img {
    height: 5rem;
    border-radius: 50%;
  }
`;

export default function Header(props) {
  return (
    <StyledHeader>
      <h1>
        <Link to="/">SpaceX Explorer</Link>
      </h1>

      {props.authenticated ? (
        <StyledNav>
          <span>
            <Link to="/launches">Launches</Link>
          </span>
          <div>
            <span onClick={logout}>Logout</span>
            <img src={props.avatar} alt="User Profile" />
          </div>
        </StyledNav>
      ) : (
        <span>
          <Link to="/login">Login</Link>
        </span>
      )}
    </StyledHeader>
  );
}
