"use client"

import { api } from "@/_generated/api"
import { useConvexAuth, useQuery } from "convex/react"
import { Skeleton } from "./skeleton"
import { Task } from "./task"

export function Tasks() {
  const { isAuthenticated } = useConvexAuth()
  const tasks = useQuery(api.tasks.get)

  return (
    <main className="flex flex-col gap-4 mt-8">
      {isAuthenticated
        ? tasks
          ? tasks.map(task => <Task key={task._id} task={task} />)
          : (
            <div>
              <strong>Ops... Parece que você não criou nenhuma tarefa.</strong>
            </div>
          )
        : (
          <div>
            <strong>Faça login para criar tarefas!</strong>
          </div>
        )
      }
    </main>
  )
}
