import { project } from "./parser.js";

export const getProjectBySlug = (slug) => {
  return project.find((project) => project.slug === slug);
};

export const getAllProjectsSlug = () => {
  return project.map((project) => project.slug);
};
