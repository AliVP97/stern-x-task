import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../modules";

export const Layout: FunctionComponent = () => {
  return (
    <div className="flex h-[100dvh] flex-col font-['Lato']">
      <Header />
      <div className="mx-6 mb-8 mt-4 h-full">
        <Outlet />
      </div>
    </div>
  );
};
