import { useWindowManager } from "../../features/window-system/useWindowManager";
import { windowRegistry } from "../../features/window-system/windowRegistry";
import Window from "../ui/window/Window";
import DesktopIcon from "../ui/icons/DesktopIcon";
import { AnimatePresence } from "motion/react";
import Scene from "../../features/canvas/Scene";
import { useState } from "react";
import { wallpaper } from "../../assets/assets";

export default function Desktop({
  backgroundImage,
}: {
  backgroundImage?: string;
}) {
  const { windows, close, toggle, move, focus } = useWindowManager();

  const [isInteractive, setIsInteractive] = useState(true);

  return (
    <div
      className="relative w-full bg-gradient inset-radius-t flex-1 overflow-hidden"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "right center",
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

      {isInteractive && <Scene image={wallpaper} />}

      <div className="absolute top-4 left-4 grid grid-cols-2 gap-6">
        {Object.values(windowRegistry).map((win) => (
          <DesktopIcon
            key={win.id}
            title={win.title}
            onClick={() => toggle(win.id)}
          />
        ))}
      </div>

      <AnimatePresence>
        {windows.map((instance) => {
          const definition = windowRegistry[instance.id];

          return (
            <Window
              key={instance.id}
              title={definition.title}
              x={instance.x}
              y={instance.y}
              zIndex={instance.zIndex}
              width={instance.width ?? definition.defaultWidth}
              height={instance.height ?? definition.defaultHeight}
              handleFocus={() => focus(instance.id)}
              handleMove={(dx, dy) => move(instance.id, dx, dy)}
              handleClose={() => close(instance.id)}
            >
              <div className="p-4 text-outline">{definition.title} Content</div>
            </Window>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
