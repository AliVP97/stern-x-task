import { FunctionComponent } from "react";
import useLocalStorage from "use-local-storage";

import { NoteCardProps } from "../../modules";
import { EmptyList, NoteList } from "./components";

export const List: FunctionComponent = () => {
  const [noteList] = useLocalStorage<NoteCardProps[]>("note-list", []);

  return <>{noteList.length === 0 ? <EmptyList /> : <NoteList />}</>;
};
