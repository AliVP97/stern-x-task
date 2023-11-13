import { FunctionComponent, useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";

import { Tab } from "../../../components";
import { NoteCard, NoteCardProps } from "../../../modules";
import { countTags } from "../../../utils";

export const NoteList: FunctionComponent = () => {
  const [noteList] = useLocalStorage<NoteCardProps[]>("note-list", []);

  const [filterKeyword, setFilterKeyword] = useState("All");
  const [filteredList, setFilteredList] = useState<NoteCardProps[]>(noteList);

  useEffect(() => {
    filterKeyword === "All"
      ? setFilteredList(noteList)
      : setFilteredList(
          noteList.filter(({ tag: { text } }) => filterKeyword === text),
        );
  }, [filterKeyword, noteList]);

  return (
    <div>
      <div className="flex gap-x-3">
        {countTags(noteList).map(([tag, count]) => (
          <Tab
            active={tag === filterKeyword}
            onClick={() => setFilterKeyword(tag)}
          >{`${tag} (${count})`}</Tab>
        ))}
      </div>
      {filteredList.map((note) => (
        <NoteCard key={Number(note.date)} {...note} />
      ))}
    </div>
  );
};
