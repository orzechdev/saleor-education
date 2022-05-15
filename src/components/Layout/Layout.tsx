import { Link, Outlet } from "react-router-dom";
import Logo from "../Logo";
import * as S from "./styles";

const Layout: React.FC = () => {
  return (
    <S.Root>
      <nav>
        <S.Menu>
          <S.MenuHeader>
            <Link to="/">
              <Logo />
            </Link>
          </S.MenuHeader>
        </S.Menu>
      </nav>

      <Outlet />
    </S.Root>
  );
};
export default Layout;
