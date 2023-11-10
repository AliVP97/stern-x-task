import { FunctionComponent } from "react";
import { Tag } from "../../components";

import MenuIcon from "../../assets/menu.svg?react";

export type NoteCardProps = {
  date: string;
  time: string;
  author: string;
  title: string;
  tag: string;
  description: string;
};

export const NoteCard: FunctionComponent<NoteCardProps> = ({
  date,
  time,
  author,
  title,
  tag,
  description,
}) => {
  return (
    <div className="relative flex w-full flex-col gap-y-3 rounded-lg border border-gray-100 bg-white p-3 pb-5 hover:border-[#CACACD] active:border-2 active:border-[#99999B]">
      <div className="flex gap-x-1 text-xs text-gray-800">
        {date}
        <span className="text-gray-400">@</span>
        {time}
        <span className="text-gray-400">by</span>
        {author}
      </div>
      <div className="flex gap-x-2">
        <div className="text-lg font-bold leading-6">{title}</div>
        {tag && <Tag>{tag}</Tag>}
      </div>
      <div className="text-sm leading-4">{description}</div>
      <MenuIcon className=" absolute right-3 top-3" />
    </div>
  );
};
