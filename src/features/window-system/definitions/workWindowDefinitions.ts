import type { WindowDefinition } from "./windowDefinitions";

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectData = {
  id: string;
  title: string;
  summary?: string;
  description: string;
  tech: string[];
  role?: string;
  status?: string;
  features?: string[];
  links?: ProjectLink[];
  thumbnail?: string;
};

export type WorkWindowDefinition = WindowDefinition & {
  project: ProjectData;
};
