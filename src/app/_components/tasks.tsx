"use client"

import { api } from "@/_generated/api"
import { useConvexAuth, useQuery } from "convex/react"
import { Skeleton } from "./skeleton"
import { Task } from "./task"

export function Tasks() {
  const { isAuthenticated, isLoading } = useConvexAuth()
  const tasks = useQuery(api.tasks.get)

  const completedTasks = tasks?.filter(task => task.completed === true)

  if (isLoading) {
    return (
      <main className="flex flex-col gap-4 mt-8">
        <Skeleton className="w-full h-16" />
        <Skeleton className="w-full h-16" />
      </main>
    )
  }

  if (!isLoading && !isAuthenticated) {
    return (
      <main className="mt-8 flex-1 flex items-center justify-center">
        <strong>Faça login para registrar tarefas</strong>
      </main>
    )
  }

  if (isAuthenticated && !isLoading) {
    return (
      <main className="flex flex-1 flex-col gap-6 mt-8">
        <div className="flex justify-between items-center">
          <div className="text-sm space-x-2 font-medium">
            <span className="text-product-blue">Tarefas criadas</span>
            <span className="bg-base-gray-400 px-2 py-1 rounded-full">{tasks?.length}</span>
          </div>
          <div className="text-sm space-x-2 font-medium">
            <span className="text-product-purple">Tarefas completas</span>
            <span className="bg-base-gray-400 px-2 py-1 rounded-full">{completedTasks?.length} de {tasks?.length}</span>
          </div>
        </div>
        {tasks?.length !== 0
          ? (
            <div className="flex flex-col gap-4">
              {tasks?.map(task => <Task key={task._id} task={task} />)}
            </div>
          )
          : (
            <div className="flex-1 flex items-center justify-center">
              <strong className="text-base-gray-200">
                Parece que você ainda não criou nenhuma tarefa.
              </strong>
            </div>
          )}
      </main>
    )
  }
}
