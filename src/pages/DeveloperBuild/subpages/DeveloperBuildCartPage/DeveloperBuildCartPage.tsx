import React from "react";
import * as S from "./styles";

const DeveloperBuildCartPage: React.FC = () => {
  return (
    <S.Root>
      <S.Title>Development guide - Cart page</S.Title>
      <S.Options>...</S.Options>
      <S.Actions>
        <S.LeftActions>
          <S.LeftActionItem to="/developer/build">
            <h2>&larr; Back</h2>
          </S.LeftActionItem>
        </S.LeftActions>
      </S.Actions>
    </S.Root>
  );
};
export default DeveloperBuildCartPage;
