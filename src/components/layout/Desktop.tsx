import type { WindowDefinition } from "../../features/window-system/definitions/windowsDefinition";
import { useWindowManager } from "../../features/window-system/useWindowManager";
import { useKeyboard } from "../../hooks/useKeyboard";
import DesktopIcon from "../ui/icons/DesktopIcon";
import Scene from "../../features/canvas/Scene";
import { AnimatePresence } from "motion/react";
import Window from "../ui/window/Window";
import { useLoadingStore } from "../../features/loading/loadingStore";
import { useEffect } from "react";

export default function Desktop({
  backgroundImage,
  isInteractive,
  toggleInteractive,
  registry,
}: {
  backgroundImage?: string;
  isInteractive: boolean;
  toggleInteractive?: () => void;
  registry: Record<string, WindowDefinition>;
}) {
  const finish = useLoadingStore((s) => s.finish);
  const start = useLoadingStore((s) => s.start);
  const { windows, open, close, toggle, move, focus } = useWindowManager();

  useKeyboard({ toggleInteractive });

  useEffect(() => {
    Object.values(registry)
      .filter((def) => def.defaultOpen)
      .forEach((def) => open(def));
  }, [open, registry]);

  return (
    <div
      className="relative w-full bg-gradient inset-radius-t flex-1 overflow-hidden"
      style={
        backgroundImage && !isInteractive
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }
          : undefined
      }
    >
      {/* {isInteractive && (
        <div className="absolute inset-0 h-full flex flex-col justify-around">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="bg-panel w-full h-1 opacity-20 brightness-125"
            ></div>
          ))}
        </div>
      )} */}

      {backgroundImage && isInteractive && (
        <Scene image={backgroundImage} onReady={finish} onStart={start} />
      )}

      <div className="absolute p-2 sm:p-4 sm:h-full flex sm:flex-col flex-wrap gap-6">
        {Object.values(registry).map((win) => (
          <DesktopIcon
            key={win.id}
            title={win.title}
            icon={win.icon}
            onClick={() => toggle(win)}
          />
        ))}
      </div>

      <AnimatePresence>
        {windows
          .filter((instance) => instance.isOpen && registry[instance.id])
          .map((instance) => {
            const definition = registry[instance.id];

            return (
              <Window
                key={instance.id}
                title={definition.title}
                x={instance.x}
                y={instance.y}
                zIndex={instance.zIndex}
                width={instance.width ?? definition.defaultWidth}
                height={instance.height ?? definition.defaultHeight ?? "auto"}
                handleFocus={() => focus(instance.id)}
                handleMove={(dx, dy) => move(instance.id, dx, dy)}
                handleClose={() => close(instance.id)}
              >
                {definition.renderContent ? (
                  definition.renderContent()
                ) : (
                  <div className="p-4 text-outline">
                    {definition.title} Content
                  </div>
                )}
              </Window>
            );
          })}
      </AnimatePresence>
    </div>
  );
}
