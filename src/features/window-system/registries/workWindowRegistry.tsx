import ProjectContent from "../../../components/window-content/project-window-content/ProjectContent";
import type { WorkWindowDefinition } from "../definitions/workWindowsDefinition";
import { projects } from "../../../data/projects";

export const workWindowRegistry: Record<string, WorkWindowDefinition> =
  Object.fromEntries(
    projects.map((project, index) => [
      project.id,
      {
        id: project.id,
        icon: "folder",
        title: project.title,
        defaultWidth: 500,
        defaultX: 140 + index * 60,
        defaultY: 90 + index * 40,
        renderContent: () => <ProjectContent project={project} />,
        project,
      },
    ]),
  );
