import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Layout = lazy(() => import("./Layout"));
const New = lazy(() => import("./pages/New"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="new" element={<New />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
