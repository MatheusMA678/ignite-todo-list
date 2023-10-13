import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  tasks: defineTable({
    content: v.string(),
    completed: v.boolean(),
    userId: v.string()
  })
  .index("by_user", ["userId"])
})