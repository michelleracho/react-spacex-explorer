import React from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { login } from '../services/firebase';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  text-align: center;
  margin-top: 5rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
  }

  button {
    font-size: 2rem;
    cursor: pointer;
    color: var(--primary-brand-color);
    border: none;
    outline: none;
    background-color: transparent;
    padding: 0.5rem;
    transition: letter-spacing 0.2s;
  }

  button:hover:not(:disabled) {
    letter-spacing: 2px;
    font-weight: 700;
  }

  button:disabled {
    font-size: 1.3rem;
    color: var(--light-shadow);
    cursor: not-allowed;
  }
`;

export default function Login(props) {
  if (props.authenticated) {
    return <Redirect to="/launches" />;
  }

  return (
    <StyledDiv>
      <h1>Login with</h1>

      <ul>
        <li>
          <button onClick={login}>Google</button>
        </li>
        <li>
          <button disabled>Facebook</button>
        </li>
        <li>
          <button disabled>Twitter</button>
        </li>
        <li>
          <button disabled>Email</button>
        </li>
      </ul>
    </StyledDiv>
  );
}
