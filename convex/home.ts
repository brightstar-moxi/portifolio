import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("home").collect();
  },
});

export const create = mutation({
  args: {
    heading: v.string(),
    summary: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("home", args);
  },
});