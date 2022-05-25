import * as S from "./styles";
import Logo from "../../components/Logo";

const Home: React.FC = () => {
  return (
    <S.Root>
      <S.Header>
        <S.HeaderTitleLink to="/">
          <Logo />
        </S.HeaderTitleLink>
        <S.HeaderMenu>
          <S.HeaderMenuItem to="/developer">
            <>
              <h2>Developer &rarr;</h2>
              <p>Development guide</p>
            </>
          </S.HeaderMenuItem>
          <S.HeaderMenuItem to="/designer">
            <>
              <h2>Designer &rarr;</h2>
              <p>Design guide</p>
            </>
          </S.HeaderMenuItem>
          <S.HeaderMenuItem to="/salesperson">
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
