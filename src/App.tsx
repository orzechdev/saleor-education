import { useActor } from "@xstate/react";
import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { StateContext } from "./components/StateProvider";
import {
  designerMenuItems,
  developerMenuItems,
  DeveloperPath,
  DeveloperSetupPath,
  salespersonMenuItems,
} from "./misc/items";
import Designer from "./pages/Designer";
import Developer from "./pages/Developer";
import DeveloperSetup from "./pages/DeveloperSetup";
import DeveloperSetupFrontend from "./pages/DeveloperSetupFrontend";
import DeveloperSetupGetSaleorData from "./pages/DeveloperSetupGetSaleorData";
import DeveloperSetupGetSaleorDataClient from "./pages/DeveloperSetupGetSaleorDataClient";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Salesperson from "./pages/Salesperson";

interface AllowItem<T extends string | number | symbol> {
  allow: boolean;
  subAllowList?: Record<T, boolean>;
}

function App() {
  const globalServices = useContext(StateContext);
  const [developerState] = useActor(globalServices.developerStateService);

  const developerSetupMenuAllowList: Record<DeveloperSetupPath, boolean> = {
    frontend: !!(
      developerState.context.techStackStyle &&
      developerState.context.techStackFrontend &&
      !developerState.context.knowledge?.includes(
        developerState.context.techStackFrontend
      )
    ),
    "get-saleor-data": !!(
      developerState.context.techStackStyle &&
      developerState.context.techStackFrontend
    ),
    "get-saleor-data-client": !!(
      developerState.context.techStackStyle &&
      developerState.context.techStackFrontend
    ),
  };
  const developerMenuAllowList: Record<
    DeveloperPath,
    AllowItem<DeveloperSetupPath>
  > = {
    setup: {
      allow: !!(
        developerState.context.techStackStyle &&
        developerState.context.techStackFrontend
      ),
      subAllowList: developerSetupMenuAllowList,
    },
  };

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
                  .filter((item) => developerMenuAllowList[item.path].allow)
                  .map((item) => ({
                    ...item,
                    children: item.children?.filter(
                      (child) =>
                        developerMenuAllowList[item.path].subAllowList?.[
                          child.path
                        ]
                    ),
                  }))}
              />
            }
          >
            <Route index element={<Developer />} />
            {developerMenuAllowList.setup && (
              <Route path="setup" element={<DeveloperSetup />} />
            )}
            {developerSetupMenuAllowList["frontend"] && (
              <Route
                path="setup/frontend"
                element={<DeveloperSetupFrontend />}
              />
            )}
            {developerSetupMenuAllowList["get-saleor-data"] && (
              <Route
                path="setup/get-saleor-data"
                element={<DeveloperSetupGetSaleorData />}
              />
            )}
            {developerSetupMenuAllowList["get-saleor-data-client"] && (
              <Route
                path="setup/get-saleor-data-client"
                element={<DeveloperSetupGetSaleorDataClient />}
              />
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
