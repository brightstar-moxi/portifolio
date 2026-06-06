import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("experience").collect();
  },
});

export const create = mutation({
  args: {
    position: v.string(),
    company: v.string(),
    duration: v.string(),
    location: v.string(),
    jobprofile: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("experience", args);
  },
});

export const update = mutation({
  args: {
    id: v.id("experience"),
    position: v.string(),
    company: v.string(),
    duration: v.string(),
    location: v.string(),
    jobprofile: v.string(),
  },
  handler: async (ctx, args) => {
    const { id, ...data } = args;
    await ctx.db.patch(id, data);
  },
});