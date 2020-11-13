import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModal = styled.div`
  width: 50rem;
  min-height: 30rem;
  padding: 1rem;
  background-color: var(--secondary-brand-color);
  color: var(--primary-brand-color);
  position: relative;
  border-radius: 1.2rem;
  border: 0.3rem solid var(--primary-brand-color);
  box-shadow: 1px 1px 1.5rem 1px var(--light-shadow);
  overflow: hidden;
  position: relative;
  font-size: 1.3rem;

  button {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    outline: none;
    border: none;
    background-color: transparent;
    font-size: 2rem;
    margin-right: 1rem;
  }

  h1 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 0.5rem;
  }

  span {
    font-weight: 700;
  }

  p {
    margin: 1rem;
  }
`;

export default function CardModal(props) {
  const closeModal = () => {
    props.setShowModal(prev => !prev);
  };

  return (
    <>
      {props.showModal ? (
        <StyledContainer onClick={closeModal}>
          <StyledModal onClick={e => e.stopPropagation()}>
            <button aria-label="close" onClick={closeModal}>
              ✖
            </button>
            <h1>{props.mission_name}</h1>
            <ul>
              <li>
                Flight Number: <span>{props.flight_number}</span>
              </li>
              <li>
                Mission Name: <span>{props.mission_name}</span>
              </li>
              <li>
                {/* Launch Year: <span>{props.launch_year}</span> */}
                Launch Date: <span>{props.launch_date_local.slice(0, 10)}</span>
              </li>
              <li>
                Launch Site: <span>{props.launch_site.site_name_long}</span>
              </li>
              <li>
                Rocket Name: <span>{props.rocket.rocket_name}</span>
              </li>
              <li>
                Details: <p>{props.details}</p>
              </li>
            </ul>
          </StyledModal>
        </StyledContainer>
      ) : null}
    </>
  );
}
