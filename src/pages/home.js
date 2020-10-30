import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Home(props) {
  return (
    <StyledDiv>
      <h1>home page</h1>
    </StyledDiv>
  );
}
