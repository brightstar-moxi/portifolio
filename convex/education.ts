import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("education").collect();
  },
});

export const create = mutation({
  args: {
    degree: v.string(),
    year: v.string(),
    college: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("education", args);
  },
});

export const update = mutation({
  args: {
    id: v.id("education"),
    degree: v.string(),
    year: v.string(),
    college: v.string(),
  },
  handler: async (ctx, args) => {
    const { id, ...data } = args;
    await ctx.db.patch(id, data);
  },
});