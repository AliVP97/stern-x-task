import { NoteCardProps } from "../modules";

export const countTags = (noteLists: NoteCardProps[]) => {
  const allTags = noteLists.map(({ tag: { text } }) => text);

  const tagList: { [key: string]: number } = {};
  let total = 0;

  allTags.forEach((tag) => {
    tagList[tag] ? (tagList[tag] = tagList[tag] + 1) : (tagList[tag] = 1);

    total++;
  });

  return Object.entries({ All: total, ...tagList });
};
