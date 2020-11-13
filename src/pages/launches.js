import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Card from '../components/Card';
import Pagination from '../components/Pagination';

import { getLaunchData } from '../services/spacex-api';

const StyledUl = styled.ul`
  min-height: 60vh;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 15px auto;
`;

export default function Launches(props) {
  const [launchData, setLaunchData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [sortOrder, setSortOrder] = useState('desc');

  useEffect(() => {
    // fetch API data
    async function fetchData() {
      setIsLoading(true);
      const data = await getLaunchData(sortOrder);
      setLaunchData(data);
      setIsLoading(false);
    }
    fetchData();
  }, [sortOrder]);

  const handleSort = e => {
    setSortOrder(e.target.value);
  };

  // change current page
  const updatePage = pageNumber => {
    setCurrentPage(pageNumber);
  };

  // get launches to display
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentLaunches = launchData.slice(firstItemIndex, lastItemIndex);

  const cards = currentLaunches.map(launch => <Card key={launch.flight_number} {...launch} />);

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  return (
    <div>
      <select onChange={handleSort}>
        <option value="desc">Newest first</option>
        <option value="asc">Oldest first</option>
      </select>

      <section>
        <StyledUl>{cards}</StyledUl>
      </section>

      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={launchData.length}
        updatePage={updatePage}
        currentPage={currentPage}
      />
    </div>
  );
}
