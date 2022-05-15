import React from "react";
import * as S from "./App.styles";
import logo from "./logo.svg";

function App() {
  return (
    <S.App>
      <S.Header>
        <S.HeaderTitleLink href="/">
          <S.HeaderTitle>
            <S.HeaderTitleLogo src={logo} alt="logo" />
            education
          </S.HeaderTitle>
        </S.HeaderTitleLink>
        <S.HeaderMenu>
          <S.HeaderMenuItem href="/developer">
            <>
              <h2>Developer &rarr;</h2>
              <p>Development guide</p>
            </>
          </S.HeaderMenuItem>
          <S.HeaderMenuItem href="/designer">
            <>
              <h2>Designer &rarr;</h2>
              <p>Design guide</p>
            </>
          </S.HeaderMenuItem>
          <S.HeaderMenuItem href="/salesperson">
            <>
              <h2>Salesperson &rarr;</h2>
              <p>Store management guide</p>
            </>
          </S.HeaderMenuItem>
        </S.HeaderMenu>
      </S.Header>
    </S.App>
  );
}

export default App;
