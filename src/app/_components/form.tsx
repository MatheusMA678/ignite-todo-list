"use client"

import { useConvexAuth, useMutation } from "convex/react"
import { PlusCircle } from "lucide-react"
import { FormEvent, useState } from "react"
import { api } from "@/_generated/api"

export function Form() {
  const { isAuthenticated } = useConvexAuth()
  const [content, setContent] = useState('')
  const createTask = useMutation(api.tasks.create)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    createTask({
      content
    })

    setContent('')
  }

  return (
    <form onSubmit={handleSubmit} className="-mt-6 flex gap-2 items-stretch h-12">
      <input
        type="text"
        name="task"
        id="task"
        required
        placeholder={isAuthenticated ? "Adicione uma nova tarefa" : "Faça login"}
        className="flex-1 placeholder:text-base-gray-300 px-4 rounded-lg border-base-gray-700 bg-base-gray-500 border outline-none focus:border-product-purple transition-colors disabled:opacity-80"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={!isAuthenticated}
      />

      <button type="submit" disabled={!isAuthenticated} className="bg-product-blue-dark hover:bg-product-blue px-4 rounded-lg flex items-center gap-2 font-bold text-sm border-transparent focus:border-product-purple border outline-none transition-colors disabled:opacity-80 disabled:hover:bg-product-blue-dark disabled:cursor-not-allowed">
        Criar
        <PlusCircle size={18} />
      </button>
    </form>
  )
}
