import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Menu = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MenuHeader = styled.li`
  a {
    color: #2a2a2a;
    display: block;
    padding: 1rem;
    text-decoration: none;
  }
`;
