import { useNavigate } from "react-router-dom";
import { display_vid, kuro } from "../../../assets/assets";
import { displayItems } from "../../../data/display";
import ImageMarquee from "./ImageMarquee";
import Links from "./Links";
import { useWindowManager } from "../../../features/window-system/useWindowManager";
import type { MarqueeItem } from "../../../utils/types";
import { workWindowRegistry } from "../../../features/window-system/registries/workWindowRegistry";
import { playgroundWindowRegistry } from "../../../features/window-system/registries/playgroundWindowRegistry";

export default function Footer() {
  const navigate = useNavigate();
  const { open } = useWindowManager();

  const handleMarqueeClick = (item: MarqueeItem) => {
    if (item.type === "project") {
      navigate("/work");

      const project = workWindowRegistry[item.id];

      if (project) {
        setTimeout(() => {
          open(project);
        }, 100);
      }
    }

    if (item.type === "component") {
      navigate("/playground");

      const component = playgroundWindowRegistry[item.id];

      if (component) {
        setTimeout(() => {
          open(component);
        }, 100);
      }
    }
  };

  return (
    <div className="relative w-full h-18 flex justify-between items-center border-t-4 border-outline bg-outline">
      <div className="relative h-full place-content-center flex-1 rounded-e-card rounded-bl-card bg-surface overflow-hidden">
        <div className="relative z-1 w-fit flex items-center gap-1 bg-outline rounded-e-full">
          <div className="font-pixel font-medium text-6xl text-ink leading-0 max-sm:hidden select-none">
            KURO
          </div>
          <div className="overflow-hidden aspect-square size-14 p-1">
            <img src={kuro} alt="" className="rounded-full" />
          </div>
        </div>

        {/* Infinite Image Marquee */}
        <div className="absolute inset-0 flex items-center overflow-hidden">
          <ImageMarquee items={displayItems} onItemClick={handleMarqueeClick} />
        </div>
      </div>

      <div className="relative z-1 flex h-full">
        <div className="flex w-30 gap-4 text-outline">
          <div className="w-full flex items-center justify-center mx-1">
            <video
              autoPlay
              loop
              muted
              playsInline
              src={display_vid}
              className="rounded-card"
            ></video>
          </div>
        </div>

        <Links />
      </div>
    </div>
  );
}
