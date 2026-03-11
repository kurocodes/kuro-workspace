type WindowIconVariant = "maximize" | "close";

interface WindowIconProps {
  variant: WindowIconVariant;
  onClick?: () => void;
}

export default function WindowIcon({ variant, onClick }: WindowIconProps) {
  return (
    <div
      onPointerDown={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      // onClick={(e) => {
      //   e.stopPropagation();
      //   onClick?.();
      // }}
      className="group"
    >
      {variant === "maximize" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-outline"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            className="group-hover:fill-outline"
          />
          <rect
            x="8"
            y="8"
            width="8"
            height="8"
            rx="1"
            className="stroke-outline group-hover:stroke-ink"
          />
        </svg>
      )}

      {variant === "close" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-outline"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect
            width="18"
            height="18"
            x="3"
            y="3"
            rx="2"
            ry="2"
            className="group-hover:fill-outline"
          />
          <path
            d="m15 9-6 6"
            stroke="currentColor"
            className="stroke-outline group-hover:stroke-ink"
          />
          <path
            d="m9 9 6 6"
            stroke="currentColor"
            className="stroke-outline group-hover:stroke-ink"
          />
        </svg>
      )}
    </div>
  );
}
