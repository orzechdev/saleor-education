import { Link, Outlet, useLocation } from "react-router-dom";
import { MenuItem, MenuPath } from "../../misc/items";
import Logo from "../Logo";
import * as S from "./styles";

interface LayoutProps {
  path: string;
  menuItems: MenuItem<MenuPath>[];
}

const Layout: React.FC<LayoutProps> = ({ path, menuItems }) => {
  const location = useLocation();

  return (
    <S.Root>
      <S.Nav>
        <S.Menu>
          <S.MenuHeader>
            <Link to="/">
              <Logo />
            </Link>
          </S.MenuHeader>
          {menuItems.length > 0 && (
            <S.MenuItem active={location.pathname === `/${path}`}>
              <Link to={`/${path}`}>Start</Link>
            </S.MenuItem>
          )}
          {menuItems.map(({ path: subPath, label }) => {
            const subPathUrl = `/${path}/${subPath}`;
            return (
              <S.MenuItem active={location.pathname === subPathUrl}>
                <Link to={subPathUrl}>{label}</Link>
              </S.MenuItem>
            );
          })}
        </S.Menu>
      </S.Nav>

      <S.Main>
        <Outlet />
      </S.Main>
    </S.Root>
  );
};
export default Layout;
