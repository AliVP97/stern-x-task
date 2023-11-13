import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import New from "./pages/New";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="new" element={<New />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
