import type { WindowDefinition } from "../windowDefinitions";

export const playgroundWindowRegistry: Record<string, WindowDefinition> = {
  experimentOne: {
    id: "experimentOne",
    icon: "folder",
    title: "Experiment One",
    defaultWidth: 600,
    defaultHeight: 450,
    defaultX: 140,
    defaultY: 90,
  },
  componentOne: {
    id: "componentOne",
    icon: "note",
    title: "Component One",
    defaultWidth: 500,
    defaultHeight: 400,
    defaultX: 220,
    defaultY: 120,
  },
};