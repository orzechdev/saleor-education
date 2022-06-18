import React from "react";
import * as S from "./styles";

const DeveloperBuildCategoryMenu: React.FC = () => {
  return (
    <S.Root>
      <S.Title>Development guide - Category menu</S.Title>
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
export default DeveloperBuildCategoryMenu;
