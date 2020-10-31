import React from 'react';
import styled from 'styled-components';

// images
import rocket from '../img/rocket.png';
import fire from '../img/fire.png';
import earth from '../img/earth-2.png';

const StyledDiv = styled.div`
  position: relative;
  width: 80vw;
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
  /* border: 2px solid; */
  border-radius: 50%;
`;

const StyledRocket = styled.picture`
  position: absolute;
  left: 14rem; // 12rem;
  bottom: 10rem;
  width: 15%; // 20%;

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
    bottom: 5.5rem; // 7rem;
    left: 4rem;
    width: 50%; // 60%
  }
`;

export default function Home(props) {
  return (
    <StyledDiv>
      <h1>home page</h1>

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
