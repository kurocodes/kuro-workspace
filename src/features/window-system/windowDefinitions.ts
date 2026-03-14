import type { ComponentType } from "react";

export type IconType = "folder" | "note" | "mail";

export type WindowDefinition = {
  id: string;
  icon?: IconType;
  title: string;
  defaultWidth: number;
  defaultHeight: number;
  defaultX?: number;
  defaultY?: number;
  backgroundImage?: string;
  content?: ComponentType;
};

// updated windowDefinitions.ts

// updated Desktop.tsx

// updated homeWindowRegistry.ts

// one or two sample content components

// DesktopIcon.tsx too, if you changed it