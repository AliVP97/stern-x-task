import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Layout = lazy(() => import("./Layout"));
const List = lazy(() => import("./pages/List"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<List />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
