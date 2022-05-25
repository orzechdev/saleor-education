import { useActor } from "@xstate/react";
import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { StateContext } from "./components/StateProvider";
import {
  designerMenuItems,
  developerMenuItems,
  DeveloperPath,
  salespersonMenuItems,
} from "./misc/items";
import Designer from "./pages/Designer";
import Developer from "./pages/Developer";
import DeveloperSetup from "./pages/DeveloperSetup";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Salesperson from "./pages/Salesperson";

function App() {
  const globalServices = useContext(StateContext);
  const [developerState] = useActor(globalServices.developerStateService);

  const developerMenuAllowList: Record<DeveloperPath, boolean> = {
    setup: !!(
      developerState.context.techStackStyle &&
      developerState.context.techStackFrontend
    ),
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
                menuItems={developerMenuItems.filter(
                  (item) => developerMenuAllowList[item.path]
                )}
              />
            }
          >
            <Route index element={<Developer />} />
            {developerMenuAllowList.setup && (
              <Route path="setup" element={<DeveloperSetup />} />
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
