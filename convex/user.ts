import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

//signup
export const signup = mutation({
  args: {
    username: v.string(),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("users")
      .filter((q) =>
        q.eq(q.field("username"), args.username)
      )
      .first();

    if (existing) {
      throw new Error("User already exists");
    }

    return await ctx.db.insert("users", args);
  },
});

//login
export const login = query({
  args: {
    username: v.string(),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("users")
      .filter((q) =>
        q.and(
          q.eq(q.field("username"), args.username),
          q.eq(q.field("password"), args.password)
        )
      )
      .first();
  },
});