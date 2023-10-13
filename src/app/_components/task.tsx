import { Id } from "@/_generated/dataModel";

interface TaskProps {
  task: {
    _id: Id<"tasks">;
    _creationTime: number;
    content: string;
    completed: boolean;
    userId: string;
  }
}

export function Task({ task }: TaskProps) {
  return (
    <div className="w-full flex items-center px-4 rounded-lg border border-base-gray-400 h-16 gap-4">
      <label htmlFor="complete" className="w-4 h-4 rounded-full bg-base-gray-400 hover:cursor-pointer">
        <input type="checkbox" id="complete" name="complete" className="sr-only" />
      </label>
      <span className="flex-1">{task.content}</span>
    </div>
  )
}
