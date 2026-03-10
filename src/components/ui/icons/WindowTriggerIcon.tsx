import FolderIcon from "./FolderIcon";

interface WindowTriggerIconProps {
  title: string;
  onClick: () => void;
}

export default function WindowTriggerIcon({
  title,
  onClick,
}: WindowTriggerIconProps) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center gap-2 w-fit relative z-1"
    >
      <FolderIcon />

      <div className="bg-paper border-medium border-outline rounded-card px-2 text-sm text-outline font-medium">
        {title}
      </div>
    </div>
  );
}
