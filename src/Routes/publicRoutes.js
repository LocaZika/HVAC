import { Route } from "react-router-dom";
import { Home, About } from "../Pages";

export const publicRoutes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </>
);
