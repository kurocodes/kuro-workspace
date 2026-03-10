import { useEffect } from "react";
import { useWindowManager } from "../../features/window-system/useWindowManager";
import { windowRegistry } from "../../features/window-system/windowRegistry";
import Window from "../ui/window/Window";
import WindowTriggerIcon from "../ui/icons/WindowTriggerIcon";

export default function Desktop({
  backgroundImage,
}: {
  backgroundImage?: string;
}) {
  const { windows, open, close, move, focus } = useWindowManager();

  useEffect(() => {
    open("about");
    open("contact");
    open("notes");
    open("featuredBlog");
  }, []);

  return (
    <div
      className="relative w-full bg-gradient inset-radius-t flex-1 overflow-hidden"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {!backgroundImage && (
        <div className="absolute inset-0 h-full flex flex-col justify-around">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="bg-panel w-full h-1 opacity-20 brightness-125"
            ></div>
          ))}
        </div>
      )}

      <WindowTriggerIcon title="About" onClick={() => open("about")} />

      {windows.map((instance) => {
        const definition = windowRegistry[instance.id];

        return (
          <Window
            key={instance.id}
            title={definition.title}
            x={instance.x}
            y={instance.y}
            zIndex={instance.zIndex}
            width={definition.defaultWidth}
            height={definition.defaultHeight}
            handleFocus={() => focus(instance.id)}
            handleMove={(dx, dy) => move(instance.id, dx, dy)}
            handleClose={() => close(instance.id)}
          >
            <div className="p-4 text-outline">{definition.title} Content</div>
          </Window>
        );
      })}
    </div>
  );
}
