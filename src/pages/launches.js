import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Card from '../components/Card';

import { getLaunchData } from '../services/spacex-api';

const StyledDiv = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 15px auto;
  }
`;

export default function Launches(props) {
  const [launchData, setLaunchData] = useState([]); // start with no data

  // similar to componentDidMount() and componentDidUpdate() in class based components
  useEffect(() => {
    // fetch API data
    async function fetchData() {
      const data = await getLaunchData();
      setLaunchData(data);
    }
    fetchData();
  }, []); // add blank array to not act like componentDidUpdate()

  const Cards = launchData.map(launch => (
    <Card key={launch.flight_number} missionName={launch.mission_name} />
  ));

  return (
    <StyledDiv>
      <section>{Cards}</section>
    </StyledDiv>
  );
}
