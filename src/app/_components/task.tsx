"use client"

import { Id } from "@/_generated/dataModel";
import { Checkbox } from "./checkbox";
import { PencilLine, Trash2 } from "lucide-react";
import { ActionButton } from "./action-button";
import { ChangeEvent, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/_generated/api";

interface TaskProps {
  task: {
    _id: Id<"tasks">;
    content: string;
    completed: boolean;
  }
}

export function Task({ task }: TaskProps) {
  const [content, setContent] = useState(task.content)
  const editTask = useMutation(api.tasks.editContent)

  const handleContentChange = () => {
    editTask({
      id: task._id,
      content
    })
  }

  return (
    <div className="w-full flex items-center px-4 rounded-lg bg-base-gray-400 h-16 gap-4 group">
      <Checkbox checked={task.completed} id={task._id} />
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onBlur={handleContentChange}
        className="bg-transparent outline-none flex-1 border-b border-transparent focus:border-product-purple transition-colors"
      />
      <ActionButton
        className="hover:text-base-danger"
        icon={Trash2}
        id={task._id}
        type="delete"
      />
    </div>
  )
}
