// import { SunDim } from "lucide-react"
// import { kuro } from "../../assets/assets"
import { useThemeStore } from "../../features/theme/themeStore";
import { useKeyboard } from "../../hooks/useKeyboard";

export default function Navbar() {
  const toggle = useThemeStore((s) => s.toggleTheme);

  useKeyboard(toggle);

  return (
    <div className="w-full flex items-center justify-between px-2">
      {/* <div className="w-6 h-6 rounded-full overflow-hidden">
        <img src={kuro} alt="" className="aspect-square" />
      </div> */}
      <div className="text-sm font-semibold font-pixel text-ink flex gap-4">
        <span>Home</span>
        <span>Work</span>
        <span>Playground</span>
        <span>Blog</span>
      </div>
      <div>
        <div
          onClick={toggle}
          className="text-xs text-ink/60 outline-1 outline-fade px-1 py-0.5 rounded-lg cursor-pointer hover:outline-2 hover:outline-ink select-none"
        >
          Ctrl Alt T
        </div>
      </div>
    </div>
  );
}
