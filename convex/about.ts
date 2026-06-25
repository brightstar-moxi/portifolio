import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("about").collect();
  },
});

export const create = mutation({
  args: {
    aboutme: v.string(),
    noofprojects: v.string(),
    yearofexperience: v.string(),
    noofclients: v.string(),
    skills: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("about", args);
  },
});

export const update = mutation({
  args: {
    id: v.id("about"),
    aboutme: v.string(),
    noofprojects: v.string(),
    yearofexperience: v.string(),
    noofclients: v.string(),
    skills: v.string(),
  },
  handler: async (ctx, args) => {
    const { id, ...data } = args;
    await ctx.db.patch(id, data);
  },
});
// export const update = mutation({
//   args: {
//     id: v.id("home"),
//     heading: v.string(),
//     summary: v.string(),
//   },
//   handler: async (ctx, args) => {
//     const { id, ...data } = args;
//     await ctx.db.patch(id, data);
//   },
// });


export const remove = mutation({
  args: {
    id: v.id("about"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});