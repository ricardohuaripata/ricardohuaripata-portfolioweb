import { Video } from "./video";

export interface Project {
  id: string;
  title: string;
  summary: string;
  description?: string;
  category: string;
  tags: string[];
  features?: string;
  githubRepoUrl: string;
  thumbnail: string;
  videos?: Video[];
  startDate?: string;
  endDate?: string;
  link: string;

}
