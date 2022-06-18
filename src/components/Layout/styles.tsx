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

export const Main = styled.main<{ mobileOpened: boolean }>`
  flex: 1;
  margin: 4rem 6rem;
  width: calc(100vw - 12rem);
  @media (max-width: ${layout.width.px1280}) {
    margin: 4rem 2rem;
    width: calc(100vw - 4rem);
  }
  @media (max-width: ${layout.width.px960}) {
    margin: 0 4rem;
    width: calc(100vw - 8rem);
    display: ${({ mobileOpened }) => (mobileOpened ? "none" : "unset")};
  }
`;

export const Menu = styled.ul<{ mobileOpened: boolean }>`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 4rem;
  @media (max-width: ${layout.width.px1280}) {
    padding: 0 2rem;
  }
  @media (max-width: ${layout.width.px960}) {
    & > li:not(:first-child) {
      display: ${({ mobileOpened }) => (mobileOpened ? "flex" : "none")};
    }
  }
`;

export const MenuHeader = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: #2a2a2a;
    display: block;
    padding: 1rem;
    text-decoration: none;
  }
  div {
    display: none;
  }
  @media (max-width: ${layout.width.px960}) {
    width: 100%;
    div {
      display: block;
    }
  }
`;

export const MenuIcon = styled.div`
  padding: 1rem;
  div {
    width: 2.1rem;
    height: 0.3rem;
    background-color: #28234a;
    margin: 0.3rem 0;
  }
`;

export const MenuItem = styled.li<{ active: boolean; opened?: boolean }>`
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  a {
    color: #2a2a2a;
    display: block;
    padding: 0.5rem 1rem;
    text-decoration: none;
    font-weight: ${(props) => (props.active ? "bold" : "normal")};
  }
  span {
    margin-top: ${(props) => (props.opened ? "0.3rem" : "-0.3rem")};
    transform: ${(props) => (props.opened ? "rotate(0deg)" : "rotate(180deg)")};
  }
`;
