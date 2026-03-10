export type WindowDefinition = {
  id: string;
  title: string;
  defaultWidth: number;
  defaultHeight: number;
  backgroundImage?: string;
};

export const windowRegistry: Record<string, WindowDefinition> = {
  about: {
    id: "about",
    title: "About",
    defaultWidth: 500,
    defaultHeight: 400,
  },
  gallery: {
    id: "gallery",
    title: "Gallery",
    defaultWidth: 600,
    defaultHeight: 450,
  },
  featuredWork: {
    id: "featuredWork",
    title: "Featured Work",
    defaultWidth: 600,
    defaultHeight: 450,
  },
  featuredExperiment: {
    id: "featuredExperiment",
    title: "Featured Experiment",
    defaultWidth: 600,
    defaultHeight: 450,
  },
  notes: {
    id: "notes",
    title: "Notes",
    defaultWidth: 400,
    defaultHeight: 500,
  },
  contact: {
    id: "contact",
    title: "Contact",
    defaultWidth: 400,
    defaultHeight: 300,
  },
  featuredBlog: {
    id: "featuredBlog",
    title: "Featured Blog",
    defaultWidth: 500,
    defaultHeight: 400,
  },
};
