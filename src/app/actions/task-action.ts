"use server";

import { z } from "zod";
import { action } from "@/lib/safe-action";
import { api } from "../../../convex/_generated/api";
import { useMutation } from "convex/react";

const schema = z.object({
  task: z.string()
});

export const createTask = action(schema, async ({ task }) => {
  return {
    success: "Tarefa criada!",
    task
  }
});