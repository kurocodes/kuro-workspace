import type { ProjectData } from "../../../features/window-system/definitions/workWindowDefinitions";

export default function ProjectContent({ project }: { project: ProjectData }) {
  return (
    <div className="px-4 py-2.5 text-outline text-sm leading-4.5">
      <div className="py-1.5 flex flex-col gap-4">
        <a
          href={
            project.links?.find((link) => link.label === "Demo")?.href ||
            project.links?.[0]?.href
          }
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <img src={project.thumbnail} alt={project.title} className="" />
        </a>

        <div className="flex flex-col gap-2">
          <p>{project.description}</p>

          <div className="flex flex-wrap items-center gap-2">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="inline-block bg-outline/10 text-outline/80 px-2 py-1 rounded-md text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
