import React from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Login(props) {
  if (props.authenticated) {
    return <Redirect to="/launches" />;
  }

  return (
    <StyledDiv>
      <h1>Login page</h1>
    </StyledDiv>
  );
}
