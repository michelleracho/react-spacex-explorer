import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { login, logout } from '../services/firebase';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  background-color: var(--primary-brand-color);
  box-shadow: 1px 1px 10px 1px var(--light-shadow);

  h1 a:link,
  h1 a:visited {
    font-family: var(--logo-font);
    color: var(--secondary-brand-color);
    text-decoration: none;
  }

  span,
  span a:link,
  span a:visited {
    font-weight: 700;
    cursor: pointer;
    margin-right: 20px;
    color: var(--secondary-brand-color);
    text-decoration: none;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  margin-left: 30px;

  div {
    display: flex;
    align-items: center;
  }

  img {
    height: 50px;
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
        <span onClick={login}>Login</span>
      )}
    </StyledHeader>
  );
}
