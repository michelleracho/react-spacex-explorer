import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

export default function Footer(props) {
  return (
    <StyledFooter>
      <p>Copyright &copy; {new Date().getFullYear()} All Rights Reserved </p>
    </StyledFooter>
  );
}
