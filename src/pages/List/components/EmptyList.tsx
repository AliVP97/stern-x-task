import { FunctionComponent } from "react";
import { Button } from "../../../components";

export const EmptyList: FunctionComponent = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 rounded-xl bg-gray-50">
      <div className=" text-2xl font-normal text-[#99999B]">
        No note added to this device yet
      </div>
      <Button leftIcon>Add Note</Button>
    </div>
  );
};
