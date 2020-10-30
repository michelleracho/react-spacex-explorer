import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.6rem;
  border: 0.3rem solid var(--primary-brand-color);
  border-radius: 1.2rem;
  width: 30rem;
  height: 15rem;
  color: var(--primary-brand-color);
  box-shadow: 1px 1px 0.5rem 1px var(--light-shadow);

  &:hover {
    box-shadow: 1px 1px 1.5rem 1px var(--light-shadow);
  }
`;

export default function Card(props) {
  return (
    <StyledCard>
      <h3>{props.missionName}</h3>
    </StyledCard>
  );
}
