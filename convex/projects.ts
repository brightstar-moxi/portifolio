// import { query, mutation } from "./_generated/server";
// import { v } from "convex/values";

// export const get = query({
//   args: {},
//   handler: async (ctx) => {
//     return await ctx.db.query("projects").collect();
//   },
// });

// export const create = mutation({
//   args: {
//     name: v.string(),
//     technologies: v.string(),
//     website: v.string(),
//     github: v.string(),
//   },
//   handler: async (ctx, args) => {
//     return await ctx.db.insert("projects", args);
//   },
// });

// export const update = mutation({
//   args: {
//     id: v.id("projects"),
//     name: v.string(),
//     technologies: v.string(),
//     website: v.string(),
//     github: v.string(),
//   },
//   handler: async (ctx, args) => {
//     const { id, ...data } = args;
//     await ctx.db.patch(id, data);
//   },
// });

import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("projects").collect();
  },
});

export const create = mutation({
  args: {
    name: v.string(),
    technologies: v.string(),
    website: v.string(),
    github: v.string(),
     image: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("projects", args);
  },
});

export const update = mutation({
  args: {
    id: v.id("projects"),
    name: v.string(),
    technologies: v.string(),
    website: v.string(),
    github: v.string(),
     image: v.string(),
  },
  handler: async (ctx, args) => {
    const { id, ...data } = args;
    await ctx.db.patch(id, data);
  },
});

export const remove = mutation({
  args: {
    id: v.id("projects"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});