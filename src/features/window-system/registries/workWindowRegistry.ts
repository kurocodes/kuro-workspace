import type { WindowDefinition } from "../windowDefinitions";

export const workWindowRegistry: Record<string, WindowDefinition> = {
  projectOne: {
    id: "projectOne",
    icon: "folder",
    title: "Project One",
    defaultWidth: 600,
    defaultHeight: 450,
    defaultX: 140,
    defaultY: 90,
  },
  projectTwo: {
    id: "projectTwo",
    icon: "folder",
    title: "Project Two",
    defaultWidth: 600,
    defaultHeight: 450,
    defaultX: 220,
    defaultY: 130,
  },
};