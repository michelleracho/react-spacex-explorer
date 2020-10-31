import React from 'react';
import styled from 'styled-components';

// images
import rocket from '../img/rocket.png';
import fire from '../img/fire.png';
import earth from '../img/earth.png';

const StyledDiv = styled.div`
  position: relative;
  max-width: 1440px;
  width: 100%;
  height: 80vh;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  color: var(--secondary-brand-color);

  h1 {
    margin-top: 15rem;
  }
`;

const StyledEarth = styled.img`
  width: 40%;
  height: auto;
  position: absolute;
  bottom: -25%;
  left: 0;
  z-index: 1;
  border-radius: 50%;
`;

const StyledRocket = styled.picture`
  position: absolute;
  /* left: 14rem; */
  /* bottom: 10rem; */
  right: 0;
  top: -10%;
  width: 15%;
  transform: rotate(-60deg);

  img {
    position: relative;
    height: auto;
  }

  /* rocket */
  img:first-child {
    z-index: 3;
    width: 100%;
  }

  /* fire */
  img:last-child {
    z-index: 2;
    bottom: 7.5rem;
    left: 5.6rem;
    width: 50%;
  }
`;

export default function Home(props) {
  return (
    <StyledDiv>
      {props.authenticated ? <h1>Welcome, {props.name}!</h1> : <h1>Welcome!</h1>}

      <div>
        <StyledRocket>
          <img src={rocket} alt="rocket" />
          <img src={fire} alt="fire" />
        </StyledRocket>

        <StyledEarth src={earth} alt="earth" />
      </div>
    </StyledDiv>
  );
}
