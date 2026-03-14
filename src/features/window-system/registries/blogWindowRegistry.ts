import type { WindowDefinition } from "../windowDefinitions";

export const blogWindowRegistry: Record<string, WindowDefinition> = {
  blogOne: {
    id: "blogOne",
    icon: "note",
    title: "Blog One",
    defaultWidth: 500,
    defaultHeight: 400,
    defaultX: 160,
    defaultY: 100,
  },
  blogTwo: {
    id: "blogTwo",
    icon: "note",
    title: "Blog Two",
    defaultWidth: 500,
    defaultHeight: 400,
    defaultX: 240,
    defaultY: 140,
  },
};