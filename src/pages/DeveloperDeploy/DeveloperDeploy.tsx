import React from "react";
import * as S from "./styles";

const DeveloperDeploy: React.FC = () => {
  return (
    <S.Root>
      <S.Title>Development guide - Deploy</S.Title>
      <S.Options>
        <p>
          Once you have build your storefront you can deploy it to the Saleor
          Cloud. In order to do so, first you can install Saleor CLI via npm:
        </p>
        <pre>
          <code>npm i -g saleor@latest</code>
        </pre>
      </S.Options>
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
export default DeveloperDeploy;
