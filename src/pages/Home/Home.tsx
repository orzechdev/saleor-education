import * as S from "./styles";
import logo from "./logo.svg";
import Logo from "../../components/Logo";

const Home: React.FC = () => {
  return (
    <S.Root>
      <S.Header>
        <S.HeaderTitleLink href="/">
          <Logo />
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
    </S.Root>
  );
};
export default Home;
