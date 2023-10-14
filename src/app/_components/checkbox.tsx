"use client"

import { ChangeEvent, ElementRef, useRef } from "react"
import { Check } from "lucide-react"
import { useMutation } from "convex/react"

import { api } from "@/_generated/api"
import { Id } from "@/_generated/dataModel"
import { cn } from "@/lib/utils"

interface CheckboxProps {
  checked: boolean
  id: Id<"tasks">
}

export function Checkbox({ checked, id }: CheckboxProps) {
  const completeTask = useMutation(api.tasks.complete)
  const checkboxRef = useRef<ElementRef<"input">>(null)

  const handleCompleteTask = (e: ChangeEvent<HTMLInputElement>) => {
    completeTask({
      id,
      completed: e.target.checked
    })
  }

  return (
    <>
      <input
        ref={checkboxRef}
        type="checkbox"
        id={id}
        name={id}
        className="sr-only peer/checkbox"
        defaultChecked={checked}
        onChange={handleCompleteTask}
      />
      <label
        htmlFor={id}
        className={cn(
          "w-5 h-5 p-[2px] rounded-full border border-product-purple hover:cursor-pointer",
          checkboxRef.current?.checked && 'bg-product-purple'
        )}
      >
        <Check
          fontWeight={700}
          className={cn(
            "w-full h-full hidden",
            checkboxRef.current?.checked && 'block'
          )}
        />
      </label>
    </>
  )
}
