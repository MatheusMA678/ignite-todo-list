"use client"

import { api } from "@/_generated/api"
import { Id } from "@/_generated/dataModel"
import { cn } from "@/lib/utils"
import { useMutation } from "convex/react"
import { LucideIcon } from "lucide-react"

interface ActionButtonProps {
  icon: LucideIcon
  className?: string
  id: Id<"tasks">
  type: "delete" | "edit"
}

export function ActionButton({ icon: Icon, className, id, type }: ActionButtonProps) {
  const deleteTask = useMutation(api.tasks.deleteById)
  const editTask = useMutation(api.tasks.editContent)

  const handleDeleteTask = () => {
    deleteTask({
      id,
    })
  }

  const handleEditTask = () => {
    editTask({
      id,
      content: "Editado"
    })
  }

  return (
    <button
      className={cn(
        "w-8 h-8 flex items-center justify-center text-base-gray-300 transition-colors",
        className
      )}
      onClick={type === "delete" ? handleDeleteTask : handleEditTask}
    >
      <Icon size={22} />
    </button>
  )
}
