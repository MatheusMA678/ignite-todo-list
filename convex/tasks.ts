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