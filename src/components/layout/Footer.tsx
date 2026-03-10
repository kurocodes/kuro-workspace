import { kuro } from "../../assets/assets";

export default function Footer() {
  return (
    <div className="relative w-full flex justify-between items-center border-t-4 border-outline bg-paper">
      <div className="z-1 flex items-center gap-1 bg-outline rounded-e-full">
        <div className="font-pixel font-medium text-6xl text-ink leading-0">
          KURO
        </div>
        <div className="overflow-hidden aspect-square size-14 p-1">
          <img src={kuro} alt="" className="rounded-full" />
        </div>
      </div>

      <div className="absolute inset-0 place-content-center p-2 flex items-center justify-center">
        Display
      </div>

      <div className="z-1 flex h-full w-40 gap-4 bg-outline rounded-s-full text-ink">
        <div className="h-full w-full flex items-center justify-center p-2">
          Links
        </div>
      </div>
    </div>
  );
}
