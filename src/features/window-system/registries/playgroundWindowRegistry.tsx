import ComponentContent from "../../../components/window-content/playground-window-content/ComponentContent";
import { components } from "../../../data/components";
import type { PlaygroundWindowDefinition } from "../definitions/playgroundWindowsDefinition";

export const playgroundWindowRegistry: Record<
  string,
  PlaygroundWindowDefinition
> = Object.fromEntries(
  components.map((component, index) => [
    component.id,
    {
      id: component.id,
      icon: "folder",
      title: component.title,
      defaultWidth: 300,
      defaultX: 140 + index * 60,
      defaultY: 90 + index * 40,
      renderContent: () => <ComponentContent component={component} />,
      component,
    },
  ]),
);
