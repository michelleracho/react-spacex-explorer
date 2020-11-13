import React from 'react';
import styled from 'styled-components';

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 10rem;
`;

const StyledLi = styled.li`
  padding: 0.5rem 0;
  width: 5rem;
  text-align: center;
  cursor: pointer;

  &:not(:last-child) {
    border-right: 1px solid var(--light-shadow);
  }

  a {
    text-decoration: none;
    color: currentColor;
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
        <StyledLi key={page} onClick={() => updatePage(page)}>
          <a
            href="#"
            style={{
              fontSize: page === currentPage ? '2rem' : '1.2rem'
            }}
          >
            {page}
          </a>
        </StyledLi>
      ))}
    </StyledUl>
  );
}
