import React, { useState } from 'react';
import styled from 'styled-components';

import CardModal from './CardModal';

const StyledCard = styled.li`
  font-size: 2rem;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.6rem;
  border: 0.3rem solid var(--primary-brand-color);
  border-radius: 1.2rem;
  width: 30rem;
  height: 15rem;
  color: var(--secondary-brand-color);
  box-shadow: 1px 1px 0.5rem 1px var(--light-shadow);
  cursor: pointer;

  &:hover {
    box-shadow: 1px 1px 1.5rem 1px var(--light-shadow);
  }

  span {
    font-size: 1.3rem;
    color: var(--light-shadow);
    margin-top: 0.5rem;
  }
`;

export default function Card(props) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      {/* <h1>{props.flight_number}</h1> */}
      <StyledCard onClick={openModal}>
        {props.mission_name}
        <span>{props.launch_year}</span>
      </StyledCard>
      <CardModal {...props} showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}
