import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import {
  designerMenuItems,
  developerMenuItems,
  salespersonMenuItems,
} from "./misc/items";
import Designer from "./pages/Designer";
import Developer from "./pages/Developer";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Salesperson from "./pages/Salesperson";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route
            path="developer"
            element={<Layout path="developer" menuItems={developerMenuItems} />}
          >
            <Route index element={<Developer />} />
            <Route path="chapter-1" element={<Developer />} />
            <Route path="chapter-2" element={<Developer />} />
            <Route path="chapter-3" element={<Developer />} />
          </Route>
          <Route
            path="designer"
            element={<Layout path="designer" menuItems={designerMenuItems} />}
          >
            <Route index element={<Designer />} />
            <Route path="chapter-1" element={<Designer />} />
            <Route path="chapter-2" element={<Designer />} />
            <Route path="chapter-3" element={<Designer />} />
          </Route>
          <Route
            path="salesperson"
            element={
              <Layout path="salesperson" menuItems={salespersonMenuItems} />
            }
          >
            <Route index element={<Salesperson />} />
            <Route path="chapter-1" element={<Salesperson />} />
            <Route path="chapter-2" element={<Salesperson />} />
            <Route path="chapter-3" element={<Salesperson />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
