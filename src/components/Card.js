import React, { useState } from 'react';
import styled from 'styled-components';

import CardModal from './CardModal';

const StyledCard = styled.li`
  font-size: 2rem;
  padding: 1rem;
  text-align: center;
  display: flex;
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
`;

export default function Card(props) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <StyledCard onClick={openModal}>{props.mission_name}</StyledCard>
      <CardModal {...props} showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}
