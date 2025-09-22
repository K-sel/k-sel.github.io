import { projects } from "./parser.js";

export const getProjectBySlug = (slug) => {
  return projects.find((project) => project.slug === slug);
}

export const getAllProjectsSlug = () => {
    return projects.map((project) => project.slug);
}