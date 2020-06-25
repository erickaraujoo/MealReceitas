import styled from "styled-components";

import { theme }  from './../../../styles';

export const Category = styled.div`
  width: 100%;
  height: auto;
  background: ${theme.colors.darkRed};
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 0.28571429rem;

  @media (min-width: 700px) {
    grid-column: 1;
  }

  div#titleCategory {
    display: flex;
    align-items: center;
    padding: 0.5rem 1em;
  }

  img {
    width: 25px;
    height: auto;
    margin-right: 1rem;
  }

  p {
    color: ${theme.colors.white};
    font-size: 1.25rem;
  }

  ol.list-category {
    display: block;

    li {
      list-style: none;
      background: ${theme.colors.white};
      padding: 1em;
      font-size: 1rem;
      height: 50px;
      display: flex;
      align-items: center;
      border-bottom: solid 1px rgba(0, 0, 0, 0.15);
      transition: filter 0.1s;
    }

    li:last-child {
      border-radius: 0 0 0.28571429rem 0.28571429rem;
    }

    li:hover {
      filter: brightness(95%);
      cursor: pointer;
    }
  }
`;
