import React from 'react';
import styled from 'styled-components';

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  margin-top: 3rem;
`;

const StyledLi = styled.li`
  width: 5rem;
  height: 1.2rem;
  text-align: center;
  cursor: pointer;

  &:not(:last-child) {
    border-right: 1px solid var(--light-shadow);
  }
`;

export default function Pagination({ itemsPerPage, totalItems, updatePage, currentPage }) {
  const pageNumbers = [];
  let totalPages = Math.ceil(totalItems / itemsPerPage);

  // get total amount of page numbers
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <StyledUl>
      {pageNumbers.map(page => (
        <StyledLi
          key={page}
          onClick={() => updatePage(page)}
          style={{
            fontSize: page === currentPage ? '2rem' : '1.2rem'
          }}
        >
          {page}
        </StyledLi>
      ))}
    </StyledUl>
  );
}
