import { Route, Routes } from "react-router-dom";
import { ArticleDetail } from "../components/shared/article/detail";
import { LayoutDefault } from "../layouts/layout-default";
import { About } from "../pages/about";
import { Contact } from "../pages/contact";
import { Home } from "../pages/home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:slug" element={<ArticleDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}