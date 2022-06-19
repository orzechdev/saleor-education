import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { useDeveloperAccessList } from "./hooks/useDeveloperAccessList";
import {
  designerMenuItems,
  developerMenuItems,
  salespersonMenuItems,
} from "./misc/items";
import Designer from "./pages/Designer";
import Developer from "./pages/Developer";
import DeveloperBuild, {
  DeveloperBuildSupportChannels,
  DeveloperBuildSupportLanguages,
  DeveloperBuildHomeShowcasePage,
  DeveloperBuildProductListPage,
  DeveloperBuildProductPage,
  DeveloperBuildCategoryMenu,
  DeveloperBuildCollectionMenu,
  DeveloperBuildCartPage,
  DeveloperBuildCheckoutPage,
  DeveloperBuildOrderPage,
} from "./pages/DeveloperBuild";
import DeveloperDeploy from "./pages/DeveloperDeploy";
import DeveloperSetup, {
  DeveloperSetupFrontend,
  DeveloperSetupGetSaleorData,
  DeveloperSetupGetSaleorDataClient,
} from "./pages/DeveloperSetup";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Salesperson from "./pages/Salesperson";

function App() {
  const developerAccessList = useDeveloperAccessList();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route
            path="developer"
            element={
              <Layout
                path="developer"
                menuItems={developerMenuItems
                  .filter((item) => developerAccessList[item.path].allow)
                  .map((item) => ({
                    ...item,
                    children: item.children?.filter(
                      (child) =>
                        developerAccessList[item.path].subAccessList?.[
                          child.path
                        ]
                    ),
                  }))}
              />
            }
          >
            <Route index element={<Developer />} />
            {developerAccessList.setup && (
              <Route path="setup" element={<DeveloperSetup />} />
            )}
            {developerAccessList.setup.subAccessList?.["frontend"] && (
              <Route
                path="setup/frontend"
                element={<DeveloperSetupFrontend />}
              />
            )}
            {developerAccessList.setup.subAccessList?.["get-saleor-data"] && (
              <Route
                path="setup/get-saleor-data"
                element={<DeveloperSetupGetSaleorData />}
              />
            )}
            {developerAccessList.setup.subAccessList?.[
              "get-saleor-data-client"
            ] && (
              <Route
                path="setup/get-saleor-data-client"
                element={<DeveloperSetupGetSaleorDataClient />}
              />
            )}
            {developerAccessList.build && (
              <Route path="build" element={<DeveloperBuild />} />
            )}
            {developerAccessList.build.subAccessList?.["support-channels"] && (
              <Route
                path="build/support-channels"
                element={<DeveloperBuildSupportChannels />}
              />
            )}
            {developerAccessList.build.subAccessList?.["support-languages"] && (
              <Route
                path="build/support-languages"
                element={<DeveloperBuildSupportLanguages />}
              />
            )}
            {developerAccessList.build.subAccessList?.[
              "home-showcase-page"
            ] && (
              <Route
                path="build/home-showcase-page"
                element={<DeveloperBuildHomeShowcasePage />}
              />
            )}
            {developerAccessList.build.subAccessList?.["product-list-page"] && (
              <Route
                path="build/product-list-page"
                element={<DeveloperBuildProductListPage />}
              />
            )}
            {developerAccessList.build.subAccessList?.["product-page"] && (
              <Route
                path="build/product-page"
                element={<DeveloperBuildProductPage />}
              />
            )}
            {developerAccessList.build.subAccessList?.["category-menu"] && (
              <Route
                path="build/category-menu"
                element={<DeveloperBuildCategoryMenu />}
              />
            )}
            {developerAccessList.build.subAccessList?.["collection-menu"] && (
              <Route
                path="build/collection-menu"
                element={<DeveloperBuildCollectionMenu />}
              />
            )}
            {developerAccessList.build.subAccessList?.["cart-page"] && (
              <Route
                path="build/cart-page"
                element={<DeveloperBuildCartPage />}
              />
            )}
            {developerAccessList.build.subAccessList?.["checkout-page"] && (
              <Route
                path="build/checkout-page"
                element={<DeveloperBuildCheckoutPage />}
              />
            )}
            {developerAccessList.build.subAccessList?.["order-page"] && (
              <Route
                path="build/order-page"
                element={<DeveloperBuildOrderPage />}
              />
            )}
            {developerAccessList.deploy && (
              <Route path="deploy" element={<DeveloperDeploy />} />
            )}
          </Route>
          <Route
            path="designer"
            element={<Layout path="designer" menuItems={designerMenuItems} />}
          >
            <Route index element={<Designer />} />
          </Route>
          <Route
            path="salesperson"
            element={
              <Layout path="salesperson" menuItems={salespersonMenuItems} />
            }
          >
            <Route index element={<Salesperson />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
