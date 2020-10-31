import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  padding: 1rem;
  background-color: var(--primary-brand-color);
  color: var(--secondary-brand-color);

  p {
    z-index: 100;
  }
`;

export default function Footer(props) {
  return (
    <StyledFooter>
      <p>Copyright &copy; {new Date().getFullYear()} All Rights Reserved </p>
    </StyledFooter>
  );
}
