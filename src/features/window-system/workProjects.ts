import { project_imgs } from "../../assets/assets";
import type { ProjectData } from "./definitions/workWindowDefinitions";

export const workProjects: ProjectData[] = [
  {
    id: "kuro-sketch",
    title: "KuroSketch",
    summary:
      "A minimal sketching app built from scratch to learn how drawing tools work internally.",
    description:
      "KuroSketch is a canvas-based drawing app focused on understanding the fundamentals behind tools like lines, shapes, text, undo/redo, pan, zoom, and element interactions. Instead of copying a whiteboard app at the surface level, the project was built step by step to explore rendering logic, geometry, state history, and interaction systems in a deeper way.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "HTML Canvas API",
      "Rough.js",
      "Tailwind CSS",
      "Motion",
    ],
    role: "Frontend Developer",
    status: "Completed",
    features: [
      "Freehand pencil, line, rectangle, circle, and text tools",
      "Select, move, and erase elements",
      "Undo / redo history system",
      "Pan and zoom support",
      "Light and dark theme toggle",
      "Keyboard shortcuts",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/kurocodes/KuroSketch" },
      { label: "Demo", href: "https://kuro-sketch.vercel.app/" },
    ],
    thumbnail: project_imgs.kuro_sketch,
  },
  {
    id: "zantetsu-store",
    title: "Zantetsu Store",
    summary:
      "An anime-themed fullstack e-commerce website focused on clean browsing, dynamic filtering, and a smooth shopping experience.",
    description:
      "Zantetsu Store is a stylish anime merch e-commerce project built to explore fullstack product browsing, filtering, and search experiences in a more realistic storefront setup. The project focuses on clean UI, responsive interactions, and practical features like category and anime-based filtering, sorting, pagination, and URL-synced state for shareable views.",
    tech: ["React", "React Query", "Express.js", "MongoDB", "Tailwind CSS"],
    role: "Fullstack Developer",
    status: "Completed",
    features: [
      "Product filtering by category, anime, and price",
      "Real-time URL sync for filters and page state",
      "Client-side sorting without unnecessary backend calls",
      "Clean pagination for browsing large product lists",
      "Anime-themed responsive storefront UI",
    ],
    links: [{ label: "GitHub", href: "https://github.com/kurocodes/Zantetsu" }],
    thumbnail: project_imgs.zantetsu,
  },
  {
    id: "nekonime",
    title: "NekoNime",
    summary:
      "A fullstack anime platform where users can explore anime details, manage watchlists, rate titles, and join discussions.",
    description:
      "NekoNime is a cozy anime-focused web platform built to combine anime discovery, personal tracking, and community interaction in one place. Users can browse anime data through the AniList API, organize titles into personal lists, interact through comments and replies, and manage their own profile experience with authentication and profile images.",
    tech: [
      "React",
      "Tailwind CSS",
      "React Router",
      "Axios",
      "React Hook Form",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "AniList GraphQL API",
      "Cloudinary",
      "Vite",
    ],
    role: "Fullstack Developer",
    status: "In Progress",
    features: [
      "Browse anime details using the AniList API",
      "Manage watchlists like watching, completed, dropped, and on-hold",
      "Comment and reply system with pagination",
      "Like system for comments and replies",
      "User authentication with signup and login",
      "User profiles with profile pictures, usernames, and anime lists",
    ],
    links: [{ label: "GitHub", href: "https://github.com/kurocodes/NekoNime" }],
    thumbnail: project_imgs.nekonime,
  },
  {
    id: "wonderlust",
    title: "Wonderlust",
    summary:
      "An Airbnb-style booking platform where users can explore listings, share places, and leave reviews.",
    description:
      "Wonderlust is a fullstack booking platform inspired by Airbnb, built around listing discovery, user-generated places, and community reviews. Users can browse stays, create and manage their own listings, upload images, explore locations through an integrated map, and interact through reviews and ratings.",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "EJS",
      "Passport.js",
      "Express Session",
      "MapLibre GL",
      "Cloudinary",
      "Multer",
    ],
    role: "Fullstack Developer",
    status: "Completed",
    features: [
      "User authentication and authorization",
      "Create, edit, and delete place listings",
      "Integrated map for viewing listing locations",
      "User reviews and rating system",
      "Image upload and cloud storage for listings",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/kurocodes/WonderLust" },
    ],
    thumbnail: project_imgs.wonderlust,
  },
  {
    id: "vibcon-2025",
    title: "VIBCON 2025",
    summary:
      "An official conference website built for VIBCON 2025 to present event information, registrations, submissions, and travel details.",
    description:
      "VIBCON 2025 is the official website for the XXX Annual Convention of the Indian Society for Veterinary Immunology & Biotechnology, hosted by ICAR-IVRI Mukteswar. The project was built as a real-world information hub for conference attendees, with sections for the program, abstract submission, registration, travel details, contact, and event highlights, along with form workflows connected to Google Sheets.",
    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Google Apps Script",
      "Google Sheets",
      "Google Maps",
    ],
    role: "Fullstack Developer",
    status: "Completed",
    features: [
      "Responsive conference website with structured event information",
      "Abstract submission form integrated with Google Sheets",
      "Feedback and support forms for participants",
      "Program, registration, travel, and venue information pages",
      "Embedded map for location guidance",
      "Deployed frontend and backend setup",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/kurocodes/VIBCON2025" },
    ],
    thumbnail: project_imgs.vibcon,
  },
];
