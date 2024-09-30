import { Tech } from "./tech";
import { Video } from "./video";

export interface Project {
  id: string;
  title: string;
  summary: string;
  description?: string;
  category: string;
  tags: string[];
  features?: string;
  techStack?: Tech[];
  githubRepoUrl: string;
  thumbnail: string;
  gallery?: string[];
  videos?: Video[];
  startDate?: string;
  endDate?: string;
  link: string;

}
