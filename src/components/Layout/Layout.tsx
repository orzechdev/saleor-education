import { Link, Outlet } from "react-router-dom";
import { MenuItem, MenuPath } from "../../misc/items";
import Logo from "../Logo";
import * as S from "./styles";

interface LayoutProps {
  path: string;
  menuItems: MenuItem<MenuPath>[];
}

const Layout: React.FC<LayoutProps> = ({ path, menuItems }) => {
  return (
    <S.Root>
      <S.Nav>
        <S.Menu>
          <S.MenuHeader>
            <Link to="/">
              <Logo />
            </Link>
          </S.MenuHeader>
          {/* <S.MenuItem>
            <Link to={`/${path}`}>Start</Link>
          </S.MenuItem>
          {menuItems.map(({ path: subPath, label }) => (
            <S.MenuItem>
              <Link to={`/${path}/${subPath}`}>{label}</Link>
            </S.MenuItem>
          ))} */}
        </S.Menu>
      </S.Nav>

      <S.Main>
        <Outlet />
      </S.Main>
    </S.Root>
  );
};
export default Layout;
