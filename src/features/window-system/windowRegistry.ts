export type WindowDefinition = {
  id: string;
  icon?: "folder" | "note" | "mail";
  title: string;
  defaultWidth: number;
  defaultHeight: number;
  defaultX?: number;
  defaultY?: number;
  backgroundImage?: string;
};

export const windowRegistry: Record<string, WindowDefinition> = {
  about: {
    id: "about",
    icon: "folder",
    title: "About",
    defaultWidth: 500,
    defaultHeight: 400,
    defaultX: 120,
    defaultY: 80,
  },
  gallery: {
    id: "gallery",
    icon: "folder",
    title: "Gallery",
    defaultWidth: 600,
    defaultHeight: 450,
    defaultX: 200,
    defaultY: 120,
  },
  featuredWork: {
    id: "featuredWork",
    icon: "folder",
    title: "Featured Work",
    defaultWidth: 600,
    defaultHeight: 450,
    defaultX: 260,
    defaultY: 160,
  },
  featuredExperiment: {
    id: "featuredExperiment",
    icon: "folder",
    title: "Featured Experiment",
    defaultWidth: 600,
    defaultHeight: 450,
    defaultX: 80,
    defaultY: 140,
  },
  notes: {
    id: "notes",
    icon: "note",
    title: "Notes",
    defaultWidth: 400,
    defaultHeight: 500,
    defaultX: 150,
    defaultY: 70,
  },
  contact: {
    id: "contact",
    icon: "mail",
    title: "Contact",
    defaultWidth: 400,
    defaultHeight: 300,
    defaultX: 120,
    defaultY: 80,
  },
  featuredBlog: {
    id: "featuredBlog",
    icon: "note",
    title: "Featured Blog",
    defaultWidth: 500,
    defaultHeight: 400,
    defaultX: 160,
    defaultY: 100,
  },
};
