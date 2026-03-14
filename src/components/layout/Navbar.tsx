import { NavLink } from "react-router-dom";
import { useThemeStore } from "../../features/theme/themeStore";
import { useKeyboard } from "../../hooks/useKeyboard";

export default function Navbar({
  toggleInteractive,
}: {
  toggleInteractive: () => void;
}) {
  const toggleTheme = useThemeStore((s) => s.toggleTheme);

  useKeyboard({ toggleTheme });

  const navLinkClass = ({ isActive }: { isActive: boolean }) => [
    "transition-opacity",
    "cursor-pointer",
    isActive ? "opacity-100 underline" : "opacity-70 hover:opacity-100",
  ].join(" ");

  return (
    <div className="w-full flex items-center justify-between px-2">
      {/* <div className="w-6 h-6 rounded-full overflow-hidden">
        <img src={kuro} alt="" className="aspect-square" />
      </div> */}
      <div className="text-sm font-semibold font-pixel text-ink flex gap-4">
        <NavLink to="/" className={navLinkClass}>Home</NavLink>
        <NavLink to="/work" className={navLinkClass}>Work</NavLink>
        <NavLink to="/playground" className={navLinkClass}>Playground</NavLink>
        <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
      </div>
      <div className="flex items-center gap-2">
        <div
          onClick={toggleInteractive}
          className="text-xs text-ink bg-fade px-1.5 py-0.5 rounded-lg cursor-pointer hover:outline-2 hover:outline-ink select-none"
        >
          Ctrl Alt I
        </div>
        <div
          onClick={toggleTheme}
          className="text-xs text-ink bg-fade px-1.5 py-0.5 rounded-lg cursor-pointer hover:outline-2 hover:outline-ink select-none"
        >
          Ctrl Alt T
        </div>
      </div>
    </div>
  );
}