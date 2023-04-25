import { useState } from "react";
import { Trash, Check as CheckIcon, PencilSimple } from "@phosphor-icons/react";
import * as Checkbox from "@radix-ui/react-checkbox";

import { DataTypes } from "../types";

interface TaskProps {
  task: DataTypes;
  deleteTask: (taskToDelete: string) => void;
  updateContent: (id: string, newContent: string) => void;
  updateCompleted: (id: string, newCompletedState: boolean) => void;
}

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  content: string;
  updateTask: (content: string) => void;
}

export function Task({
  task,
  deleteTask,
  updateContent,
  updateCompleted,
}: TaskProps) {
  const [isChecked, setIsChecked] = useState(task.completed);
  const [showModal, setShowModal] = useState(false);

  const handleUpdateTask = (content: string) => {
    updateContent(task.id, content);
  };

  const handleUpdateIsCompleted = () => {
    setIsChecked(!isChecked);
    updateCompleted(task.id, !isChecked);
  };

  return (
    <div className="flex items-start justify-between gap-4 p-5 w-full bg-base-gray-400 border-base-gray-500 rounded-lg border group">
      <Checkbox.Root
        checked={isChecked}
        onCheckedChange={handleUpdateIsCompleted}
        className={`w-4 h-4 rounded-full transition border ${
          isChecked
            ? "border-product-purple bg-product-purple"
            : "border-product-blue"
        } hover:border-product-purple`}
      >
        <Checkbox.Indicator className="flex items-center justify-center">
          <CheckIcon size={12} weight="bold" color="white" />
        </Checkbox.Indicator>
      </Checkbox.Root>

      <p
        className={`text-sm justify-self-start flex-1 ${
          task.completed && "line-through text-base-gray-200"
        }`}
      >
        {task.content}
      </p>
      <div className="flex items-center gap-2">
        <button
          onClick={() => {
            setShowModal(!showModal);
          }}
          className="text-base-gray-300 hover:text-product-blue transition"
        >
          <PencilSimple size={22} weight="bold" />
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="text-base-gray-300 hover:text-base-danger transition"
        >
          <Trash size={22} weight="bold" />
        </button>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        content={task.content}
        updateTask={handleUpdateTask}
      />
    </div>
  );
}

function Modal({ content, showModal, setShowModal, updateTask }: ModalProps) {
  const [newContentValue, setNewContentValue] = useState(content);

  const handleSubmitUpdateTask = (e: React.FormEvent) => {
    e.preventDefault();
    updateTask(newContentValue);
    setShowModal(false);
  };

  const handleNewContentValueChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewContentValue(e.target.value);
  };

  return (
    <>
      <div
        className={`${
          showModal ? "block" : "hidden"
        } left-0 right-0 top-0 h-screen fixed bg-base-gray-500/50`}
      />
      <section
        className={`${
          showModal ? "flex" : "hidden"
        } z-10 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-fit rounded-lg border border-base-gray-400 bg-base-gray-500 flex-col gap-8 p-8`}
      >
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">Editar tarefa</h2>
          <p className="text-sm text-base-gray-200">
            Escreveu errado? Edite sua tarefa abaixo:
          </p>
        </div>
        <form
          className="flex flex-col gap-4 w-full"
          onSubmit={handleSubmitUpdateTask}
        >
          <input
            className="bg-base-gray-400 rounded-lg h-12 w-full px-4 outline-none focus:ring-2 ring-product-blue transition"
            value={newContentValue}
            onChange={handleNewContentValueChange}
          />
          <input
            type="submit"
            className="w-full h-12 flex items-center justify-center rounded-lg bg-product-blue hover:bg-product-blue-dark transition cursor-pointer font-bold"
            value="Salvar"
          />
        </form>
      </section>
    </>
  );
}
