import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  tasks: defineTable({
    content: v.string(),
    completed: v.boolean(),
    userId: v.string(),
    updatedAt: v.optional(v.string()),
    completedAt: v.optional(v.string())
  })
  .index("by_user", ["userId"])
})