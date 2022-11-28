import { Route, Routes } from "react-router-dom";
import { LayoutDefault } from "../layouts/layout-default";
import { Home } from "../pages/home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}