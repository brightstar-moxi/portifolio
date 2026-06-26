import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("contact").collect();
  },
});
export const create = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
  status: v.optional(v.string()),
  },

  handler: async (ctx, args) => {
    return await ctx.db.insert("contact", {
      ...args,
      status: "New",
    });
  },
});

export const markAsRead = mutation({
  args: {
    id: v.id("contact"),
  },

  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      status: "Read",
    });
  },
});
export const remove = mutation({
  args: {
    id: v.id("contact"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});