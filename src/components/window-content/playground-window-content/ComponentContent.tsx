import type { ComponentData } from "../../../features/window-system/definitions/playgroundWindowsDefinition";

export default function ComponentContent({
  component,
}: {
  component: ComponentData;
}) {
  const hasLinks = (component.links?.length ?? 0) > 0;

  return (
    <div className="px-4 py-2.5 text-outline text-sm leading-4.5">
      <div className="py-1.5 flex flex-col gap-4">
        {/* <a
          href={
            com.links?.find((link) => link.label === "Demo")?.href ||
            project.links?.[0]?.href
          }
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full aspect-940/447 bg-outline/5 overflow-hidden"
        >
          <img src={project.thumbnail} alt={project.title} className="w-full h-full object-contain" />
        </a> */}

        <div className="flex flex-col gap-2">
          <p>{component.description}</p>


          <div className="flex flex-wrap items-center gap-2">
            {component.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-outline/10 text-outline/80 px-2 py-1 rounded-md text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {hasLinks ? (
            <div className="flex flex-wrap items-center gap-2">
              {component.links!.map((link) => (
                <a
                  key={`${link.label}-${link.href}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md border border-outline/20 bg-outline/5 px-2 py-1 text-xs font-medium text-outline/80 transition-colors hover:bg-outline/10 hover:text-outline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
