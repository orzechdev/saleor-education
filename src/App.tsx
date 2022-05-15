import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
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
          <Route path="developer" element={<Layout />}>
            <Route index element={<Developer />} />
          </Route>
          <Route path="designer" element={<Layout />}>
            <Route index element={<Designer />} />
          </Route>
          <Route path="salesperson" element={<Layout />}>
            <Route index element={<Salesperson />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
