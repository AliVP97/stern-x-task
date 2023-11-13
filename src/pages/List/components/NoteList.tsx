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
    <div className="flex h-full flex-col gap-y-5">
      <div className="flex gap-x-3">
        {countTags(noteList).map(([tag, count]) => (
          <Tab
            key={tag}
            active={tag === filterKeyword}
            onClick={() => setFilterKeyword(tag)}
          >{`${tag} (${count})`}</Tab>
        ))}
      </div>
      <div className="overflow-auto">
        <div className="flex flex-col gap-y-4">
          {filteredList.map((note) => (
            <NoteCard key={new Date(note.date).getTime()} {...note} />
          ))}
        </div>
      </div>
    </div>
  );
};
