import { Link } from "react-router-dom";
import styled from "styled-components";

export const Root = styled.div`
  font-size: 1.4rem;
`;

export const Title = styled.h2`
  margin: 0 0 4rem 0;
`;

export const SubTitle = styled.h3`
  margin: 0 0 2rem 0;
`;

export const Options = styled.div`
  margin: 0 0 4rem 0;
  font-size: 1.2rem;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftActions = styled.div`
  display: flex;
  justify-content: left;
`;

export const RightActions = styled.div`
  display: flex;
  justify-content: right;
`;

export const ActionItem = styled(Link)`
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

export const RightActionItem = styled(ActionItem)`
  text-align: right;
`;

export const LeftActionItem = styled(ActionItem)`
  text-align: left;
`;
