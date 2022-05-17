import styled from "styled-components";

export const Root = styled.div`
  text-align: center;
`;

export const Header = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderTitleLink = styled.a`
  text-decoration: none;
  margin: 20vmin 0 0 0;
`;
export const HeaderTitle = styled.h1`
  color: #6099ff;
  font-size: 1.4rem;
`;
export const HeaderTitleLogo = styled.img`
  margin: 0 -0.4rem 0 0;
`;

export const HeaderMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 14vmin 0 20vmin 0;
`;

export const HeaderMenuItem = styled.a`
  width: 200px;
  color: #28234a;
  background: #fff;
  border: 1px solid #00000018;
  border-radius: 1rem;
  text-align: left;
  text-decoration: none;
  padding: 1rem 2rem;
  transition: box-shadow 0.3s ease-in-out;
  font-size: 1rem;
  &:hover {
    box-shadow: 0 1rem 2rem #00000008, 0 0.6rem 1rem #00000010;
  }
  h2 {
    font-size: 1.2rem;
  }
`;
