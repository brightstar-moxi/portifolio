import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  home: defineTable({
    heading: v.string(),
    summary: v.string(),
  }),

  about: defineTable({
    aboutme: v.string(),
    noofprojects: v.string(),
    yearofexperience: v.string(),
    noofclients: v.string(),
    skills: v.string(),
  }),

  experience: defineTable({
    position: v.string(),
    company: v.string(),
    duration: v.string(),
    location: v.string(),
    jobprofile: v.string(),
  }),

  education: defineTable({
    degree: v.string(),
    year: v.string(),
    college: v.string(),
  }),

  projects: defineTable({
    name: v.string(),
    technologies: v.string(),
    website: v.string(),
    github: v.string(),
     image: v.optional(v.string()),
  }),

  contact: defineTable({
    name: v.string(),
    email: v.string(),
    message: v.string(),
    status: v.string(),
  }),

  users: defineTable({
    username: v.string(),
    password: v.string(),
  }),
});