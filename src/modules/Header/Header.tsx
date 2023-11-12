import { FunctionComponent } from "react";

import MacbookIcon from "../../assets/Macbook.png";

export const Header: FunctionComponent = () => {
  return (
    <div
      style={{
        background:
          "radial-gradient(27383.93% 123.81% at 0% 25.57%, #E7EDF5 0%, #E7F5F2 100%)",
      }}
      className="mx-6 flex items-center gap-x-3 rounded-b-xl px-6 py-3"
    >
      <div className="aspect-square w-16">
        <img src={MacbookIcon} />
      </div>
      <div>
        <div className="text-2xl font-bold text-gray-800">
          Farhad's macBook's Notes
        </div>
        <div className="text-sm font-normal leading-4 text-gray-700">
          Helps you submit notices & remind them
        </div>
      </div>
    </div>
  );
};
