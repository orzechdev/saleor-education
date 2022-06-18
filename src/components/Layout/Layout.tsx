import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { MenuItem, MenuPath, SubMenuPath } from "../../misc/items";
import Logo from "../Logo";
import * as S from "./styles";
import { getDefaultMenuItem } from "./utils";

interface LayoutProps {
  path: string;
  menuItems: MenuItem<MenuPath, SubMenuPath | undefined>[];
}

const Layout: React.FC<LayoutProps> = ({ path: mainPath, menuItems }) => {
  const location = useLocation();
  const [mobileOpened, setMobileOpened] = useState(false);
  const [openedMenuItem, setOpenedMenuItem] = useState<MenuPath | undefined>(
    getDefaultMenuItem(location.pathname, mainPath, menuItems)
  );

  const handleOpenMenuItem = (path: MenuPath | undefined) => {
    setOpenedMenuItem(openedMenuItem === path ? undefined : path);
  };

  useEffect(() => {
    setOpenedMenuItem(
      getDefaultMenuItem(location.pathname, mainPath, menuItems)
    );
  }, [location.pathname, mainPath, menuItems]);

  return (
    <S.Root>
      <S.Nav>
        <S.Menu mobileOpened={mobileOpened}>
          <S.MenuHeader>
            <Link to="/" onClick={() => setMobileOpened(false)}>
              <Logo />
            </Link>
            <S.MenuIcon onClick={() => setMobileOpened(!mobileOpened)}>
              <div></div>
              <div></div>
              <div></div>
            </S.MenuIcon>
          </S.MenuHeader>
          {menuItems.length > 0 && (
            <S.MenuItem
              active={location.pathname === `/${mainPath}`}
              onClick={() => handleOpenMenuItem(undefined)}
            >
              <Link to={`/${mainPath}`} onClick={() => setMobileOpened(false)}>
                Start
              </Link>
            </S.MenuItem>
          )}
          {menuItems.map(({ path, label, children }) => {
            const pathUrl = `/${mainPath}/${path}`;
            const pathActive = location.pathname.startsWith(pathUrl);
            const pathOpened = openedMenuItem === path;

            return (
              <>
                <S.MenuItem
                  active={pathActive}
                  opened={pathOpened}
                  onClick={() => handleOpenMenuItem(path)}
                >
                  <Link
                    to={pathUrl}
                    onClick={(event) => {
                      event.stopPropagation();
                      setMobileOpened(false);
                    }}
                  >
                    {label}
                  </Link>
                  {!!children?.length && <span>&#8963;</span>}
                </S.MenuItem>
                {pathOpened &&
                  children?.map(({ path: subPath, label }) => {
                    const subPathUrl = `/${mainPath}/${path}/${subPath}`;
                    const subPathActive = location.pathname === subPathUrl;

                    return (
                      <S.MenuItem active={subPathActive} subMenu={true}>
                        <Link
                          to={subPathUrl}
                          onClick={() => setMobileOpened(false)}
                        >
                          {label}
                        </Link>
                      </S.MenuItem>
                    );
                  })}
              </>
            );
          })}
        </S.Menu>
      </S.Nav>

      <S.Main mobileOpened={mobileOpened}>
        <Outlet />
      </S.Main>
    </S.Root>
  );
};
export default Layout;
