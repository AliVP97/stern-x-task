import { FunctionComponent, lazy } from "react";

import { Header } from "../modules";
import { Outlet } from "react-router-dom";

const List = lazy(() => import("../pages/List"));

export const Layout: FunctionComponent = () => {
  return (
    <div className="flex h-[100dvh] flex-col font-['Lato']">
      <Header />
      <div className="mx-6 mb-8 mt-4 h-full">
        <List />
        <Outlet />
      </div>
    </div>
  );
};
