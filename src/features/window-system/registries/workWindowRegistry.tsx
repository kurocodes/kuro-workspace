import ProjectContent from "../../../components/window-content/project-window-content/ProjectContent";
import type { WorkWindowDefinition } from "../definitions/workWindowDefinitions";
import { workProjects } from "../../../utils/workProjects";

export const workWindowRegistry: Record<string, WorkWindowDefinition> = Object.fromEntries(
  workProjects.map((project, index) => [
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
  ])
)
