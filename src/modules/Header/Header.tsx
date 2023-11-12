import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "use-local-storage";

import { Button } from "../../components";
import { NoteCardProps } from "../NoteCard";

import MacbookIcon from "../../assets/Macbook.png";

export const Header: FunctionComponent = () => {
  const [noteList] = useLocalStorage<NoteCardProps[]>("note-list", []);
  const navigate = useNavigate();

  const addNote = useCallback(() => navigate("new"), [navigate]);

  return (
    <div
      style={{
        background:
          "radial-gradient(27383.93% 123.81% at 0% 25.57%, #E7EDF5 0%, #E7F5F2 100%)",
      }}
      className="mx-6 flex items-center justify-between rounded-b-xl px-6 py-3"
    >
      <div className="flex items-center gap-x-3 rounded-b-xl">
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
      {noteList.length > 0 && (
        <Button leftIcon onClick={addNote}>
          Add Note
        </Button>
      )}
    </div>
  );
};
