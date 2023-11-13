import { FunctionComponent, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import {
  Button,
  ComboBox,
  Description,
  Form,
  IconButton,
  Textfield,
} from "../../components";
import { relativeDate } from "../../utils";

import ArrowIcon from "../../assets/Double Alt Arrow Right.svg?react";
import NotesIcon from "../../assets/Notes.svg?react";
import useLocalStorage from "use-local-storage";
import { NoteCardProps } from "../../modules";

// type FormFields = {
//   title: string;
//   priority: string;
//   description?: string;
// };

export const New: FunctionComponent = () => {
  const [noteList, setNoteList] = useLocalStorage<NoteCardProps[]>(
    "note-list",
    [],
  );
  const navigate = useNavigate();
  const useFormMethods = useForm<FieldValues>();

  const goHome = useCallback(() => navigate("/"), [navigate]);

  const onSubmit: SubmitHandler<FieldValues> = useCallback(
    (data: FieldValues) =>
      new Promise((resolve) => {
        const now = new Date();

        resolve(
          setNoteList([
            ...noteList,
            {
              date: relativeDate(now),
              time: `${now.getHours()}:${now.getMinutes()}`,
              author: "Ali Valipour",
              title: data.title,
              tag: {
                text: data.priority,
                variant:
                  (data.priority === "Critical" && "danger") ||
                  (data.priority === "Checked" && "done") ||
                  "info",
              },
              description: data.description || "",
            },
          ]),
        );
      }),
    [noteList],
  );

  useEffect(() => {
    useFormMethods.formState.isSubmitSuccessful && navigate("/");
  }, [useFormMethods.formState.isSubmitSuccessful]);

  return (
    <div className="absolute right-0 top-0 h-full w-2/3 bg-white shadow-[-4px_0px_24px_0px_rgba(169,169,169,0.31)]">
      <div className="inline-flex w-full items-center justify-between py-3 pe-6 ps-3">
        <div className=" text-base font-normal text-gray-700">Add New Note</div>
        <IconButton onClick={goHome}>
          <ArrowIcon />
        </IconButton>
      </div>
      <Form
        className="mx-auto flex w-2/5 flex-col gap-y-12"
        useFormMethods={useFormMethods}
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-y-6">
          <div className="flex items-center justify-center gap-x-2">
            <NotesIcon />
            <div className="text-lg font-bold text-gray-700">
              Create New Notes
            </div>
          </div>
          <div className="flex flex-col gap-y-6">
            <Textfield
              name="title"
              label="Title"
              rules={{
                required: "Title is required",
                minLength: {
                  value: 3,
                  message: "At least 3 charecter is required for Title",
                },
              }}
            />
            <ComboBox
              name="priority"
              label="Priority"
              data={[
                { value: "Critical", label: "Critical" },
                { value: "IT", label: "IT" },
                { value: "HR", label: "HR" },
              ]}
            />
            <Description
              name="description"
              placeholder="Description goes here"
            />
          </div>
        </div>
        <div className="flex w-full gap-x-3">
          <Button variant={"outline"} className="w-full">
            Cancel
          </Button>
          <Button type="submit" className="w-full">
            Add
          </Button>
        </div>
      </Form>
    </div>
  );
};
