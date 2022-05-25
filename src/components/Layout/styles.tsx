import styled from "styled-components";
import { layout } from "../../consts";

export const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Nav = styled.nav`
  width: 340px;
  @media (max-width: ${layout.width.px1280}) {
    width: 300px;
  }
  @media (max-width: ${layout.width.px960}) {
    width: 100%;
  }
`;

export const Main = styled.main`
  flex: 1;
  margin: 4rem 6rem;
  @media (max-width: ${layout.width.px1280}) {
    margin: 4rem 2rem;
  }
  @media (max-width: ${layout.width.px960}) {
    margin: 0 4rem;
  }
`;

export const Menu = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 4rem;
  @media (max-width: ${layout.width.px1280}) {
    padding: 0 2rem;
  }
  @media (max-width: ${layout.width.px960}) {
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 3rem;
    gap: 0.5rem 1rem;
  }
`;

export const MenuHeader = styled.li`
  a {
    color: #2a2a2a;
    display: block;
    padding: 1rem;
    text-decoration: none;
  }
  @media (max-width: ${layout.width.px960}) {
    width: 100%;
  }
`;

export const MenuItem = styled.li<{ active: boolean }>`
  background: #fff;
  a {
    color: #2a2a2a;
    display: block;
    padding: 0.5rem 1rem;
    text-decoration: none;
    font-weight: ${(props) => (props.active ? "bold" : "normal")};
  }
  @media (max-width: ${layout.width.px960}) {
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      padding: 1rem 2rem;
    }
  }
`;
