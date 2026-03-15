import type { ReactNode } from "react";

export type IconType = "folder" | "note" | "mail";

export type WindowDefinition = {
  id: string;
  icon?: IconType;
  title: string;
  defaultWidth: number;
  defaultHeight?: number;
  defaultX?: number;
  defaultY?: number;
  backgroundImage?: string;
  renderContent?: () => ReactNode;
};