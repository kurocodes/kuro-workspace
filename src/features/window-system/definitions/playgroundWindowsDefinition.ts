import type { WindowDefinition } from "./windowsDefinition";

export type ComponentLink = {
  label: string;
  href: string;
};

export type ComponentData = {
  id: string;
  title: string;
  summary?: string;
  description: string;
  tags: string[];
  links?: ComponentLink[];
  thumbnail?: string;
};

export type PlaygroundWindowDefinition = WindowDefinition & {
  component: ComponentData;
};
