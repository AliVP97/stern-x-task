import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Loader } from "./components/Loader";
import { ToastProvider } from "./components";

const Layout = lazy(() => import("./layout"));
const New = lazy(() => import("./pages/New"));

const App = () => {
  return (
    <ToastProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Layout />
              </Suspense>
            }
          >
            <Route
              path="new"
              element={
                <Suspense fallback={<Loader />}>
                  <New />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
};

export default App;
