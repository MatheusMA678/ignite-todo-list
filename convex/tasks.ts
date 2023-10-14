import { v } from 'convex/values'
import { mutation, query } from './_generated/server'

export const create = mutation({
  args: {
    content: v.string(),
  },
  async handler(ctx, args) {
    const identity = await ctx.auth.getUserIdentity()

    if (!identity) {
      return
    }

    const userId = identity.subject

    return await ctx.db.insert("tasks", {
      content: args.content,
      userId,
      completed: false
    })
  },
})

export const get = query(async (ctx) => {
  const identity = await ctx.auth.getUserIdentity()

  if (!identity) {
    return
  }

  const userId = identity.subject

  return await ctx.db.query("tasks")
    .filter((q) => q.eq(q.field("userId"), userId))
    .order('desc')
    .collect()
})

export const complete = mutation({
  args: {
    id: v.id("tasks"),
    completed: v.boolean()
  },
  async handler(ctx, args) {
    const task = await ctx.db.get(args.id)

    if (!task) {
      throw new Error('Tarefa não encontrada')
    }

    return await ctx.db.patch(task._id, {
      completed: args.completed,
      completedAt: new Date().toString()
    })
  }
})

export const deleteById = mutation({
  args: {
    id: v.id("tasks")
  },
  async handler(ctx, args) {
    const task = await ctx.db.get(args.id)

    if (!task) {
      throw new Error('Tarefa não encontrada')
    }

    return await ctx.db.delete(task._id)
  }
})

export const editContent = mutation({
  args: {
    id: v.id("tasks"),
    content: v.string(),
  },
  async handler(ctx, args) {
    const task = await ctx.db.get(args.id)

    if (!task) {
      throw new Error('Tarefa não encontrada.')
    }

    return await ctx.db.patch(task._id, {
      content: args.content,
      updatedAt: new Date().toString()
    })
  }
})