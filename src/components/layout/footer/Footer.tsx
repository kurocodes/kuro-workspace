import { kuro } from "../../../assets/assets";
import Links from "./Links";

export default function Footer() {
  return (
    <div className="relative w-full flex justify-between items-center border-t-4 border-outline bg-outline">
      <div className="h-full place-content-center flex-1 bg-surface rounded-e-card rounded-bl-card">
        <div className="w-fit flex items-center gap-1 bg-outline rounded-e-full">
          <div className="font-pixel font-medium text-6xl text-ink leading-0 max-sm:hidden select-none">
            KURO
          </div>
          <div className="overflow-hidden aspect-square size-14 p-1">
            <img src={kuro} alt="" className="rounded-full" />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        Display
      </div>

      <div className="flex h-full">
        <div className="z-1 flex h-full w-30 gap-4 text-outline">
          <div className="w-full flex items-center justify-center mx-1">
            <video
              autoPlay
              loop
              muted
              playsInline
              src="https://api.trace.moe/video/vqme4SWuGd0ZAqsERrij9tz?size=l"
              className="rounded-card"
            ></video>
          </div>
        </div>

        <Links />
      </div>
    </div>
  );
}
