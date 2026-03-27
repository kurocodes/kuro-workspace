import type { ComponentData } from "../features/window-system/definitions/playgroundWindowsDefinition";

export const components: ComponentData[] = [
  {
    id: "stacklet-notifications",
    title: "Stacklet Notifications",
    description: `A smooth, stacked notification system powered by a reusable layout engine.
    Cards collapse into a layered stack and expand fluidly on interaction, creating a sense of depth and motion without overwhelming the UI.`,
    tags: ["React", "Animation", "Stack", "Hover", "UI", "Motion"],
    links: [
      { label: "GitHub", href: "https://github.com/kurocodes/Stacklet" },
      {
        label: "Try it Yourself",
        href: "https://kuro-motion-lab.vercel.app/stacklet-notifications",
      },
    ],
  },
  {
    id: "stacklet-avatar-stack",
    title: "Stacklet Avatar Stack",
    description: `A compact avatar stack that expands into a fully visible list with soft, layered animations.
    Perfect for representing users, teams, or participants with a clean and interactive presentation.`,
    tags: ["React", "Avatar", "Stack", "Hover", "UI", "Motion"],
    links: [
      { label: "GitHub", href: "https://github.com/kurocodes/Stacklet" },
      {
        label: "Try it Yourself",
        href: "https://kuro-motion-lab.vercel.app/stacklet-avatar-stack",
      },
    ],
  },
  {
    id: "morph-menu",
    title: "Morph Menu",
    description: `A fluid, morphing menu that transforms seamlessly from a button into a contextual panel.
    Adapts direction and alignment dynamically, creating a polished, tactile interaction that feels alive.`,
    tags: ["React", "Menu", "Animation", "Motion", "Interaction", "UI"],
    links: [
      { label: "GitHub", href: "https://github.com/kurocodes/Morph-Menu" },
      {
        label: "Try it Yourself",
        href: "https://kuro-motion-lab.vercel.app/morph-menu",
      },
    ],
  },
  {
    id: "interactive-card-stack",
    title: "Interactive Card Stack",
    description: `A tactile card stack with smooth 3D drag interactions and physics-based motion.
    Cards tilt, move, and reorder naturally, creating a satisfying, real-world feel in a fully reusable system.`,
    tags: ["React", "3D", "Drag", "Animation", "Motion", "Interaction"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/kurocodes/interactive-card-stack",
      },
      {
        label: "Try it Yourself",
        href: "https://kuro-motion-lab.vercel.app/interactive-card-stack",
      },
    ],
  },
  {
    id: "interactive-cursor",
    title: "Interactive Cursor",
    description: `A smooth, animated cursor that follows movement with spring-based physics and subtle hover interactions.
    Supports magnetic effects and customizable styling, turning the pointer into an interactive part of the UI.`,
    tags: ["React", "Cursor", "Animation", "Hover", "Motion", "Interaction"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/kurocodes/Interactive-Cursor-Effect",
      },
      {
        label: "Try it Yourself",
        href: "https://kuro-motion-lab.vercel.app/interactive-cursor",
      },
    ],
  },
  {
    id: "scroll-focus-list",
    title: "Scroll Focus List",
    description: `A scroll-driven list where items smoothly scale, fade, and shift into focus as they reach the center of the viewport.
    Creates a calm, premium browsing experience that naturally guides user attention..
    Supports magnetic effects and customizable styling, turning the pointer into an interactive part of the UI.`,
    tags: ["React", "Scroll", "Animation", "Motion", "UI", "Lenis"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/kurocodes/Scroll-Focus-List",
      },
      {
        label: "Try it Yourself",
        href: "https://kuro-motion-lab.vercel.app/scroll-focus-list",
      },
    ],
  },
  {
    id: "block-slider",
    title: "Block Slider",
    description: `A tactile slider with smooth, spring-based motion and intelligent handle behavior.
    The handle dynamically adapts around text, creating a polished interaction that feels precise and responsive.`,
    tags: ["React", "Slider", "Drag", "Interaction", "Motion", "UI"],
    links: [
      {
        label: "Try it Yourself",
        href: "https://kuro-motion-lab.vercel.app/block-slider",
      },
    ],
  },
  {
    id: "glide-tip-toolbar",
    title: "Glide Tip Toolbar",
    description: `A fluid tooltip system that glides seamlessly across toolbar items with shared motion and dynamic alignment.
    Instead of appearing abruptly, the tooltip moves as a single entityâ€”creating a smooth, continuous interaction across triggers.`,
    tags: ["React", "Tooltip", "Hover", "Animation", "Motion", "UI"],
    links: [
      { label: "GitHub", href: "https://github.com/kurocodes/Glide-Tip" },
      {
        label: "Try it Yourself",
        href: "https://kuro-motion-lab.vercel.app/glide-tip-toolbar",
      },
    ],
  },
  {
    id: "glide-tip-indicator",
    title: "Glide Tip Indicator",
    description: `A minimal, motion-driven tooltip indicator that transitions smoothly between steps or elements.
    Designed for guided flows and status indicators, it maintains continuity while adapting position and content dynamically.`,
    tags: ["React", "Tooltip", "Indicator", "Animation", "Motion", "UI"],
    links: [
      { label: "GitHub", href: "https://github.com/kurocodes/Glide-Tip" },
      {
        label: "Try it Yourself",
        href: "https://kuro-motion-lab.vercel.app/glide-tip-indicator",
      },
    ],
  },
  {
    id: "animated-gooey-bar",
    title: "Animated Gooey Bar",
    description: `A macOS-inspired menu bar featuring fluid, gooey dropdown animations and soft micro-interactions.
    Built with SVG filters and shared layout motion to create organic, responsive UI transitions.`,
    tags: ["React", "Menu", "Animation", "SVG", "Motion", "UI"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/kurocodes/Animated-Gooey-Bar",
      },
      {
        label: "Try it Yourself",
        href: "https://kuro-motion-lab.vercel.app/animated-gooey-bar",
      },
    ],
  },
  {
    id: "scroll-velocity-marquee",
    title: "Scroll Velocity Marquee",
    description: `An infinite marquee that reacts to scroll speed and direction, accelerating and reversing in real time.
    Adds energy and motion to sections with a dynamic, scroll-linked animation.`,
    tags: ["React", "Scroll", "Animation", "Motion", "Marquee", "Lenis"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/kurocodes/Scroll-Velocity-Marquee",
      },
      {
        label: "Try it Yourself",
        href: "https://kuro-motion-lab.vercel.app/scroll-velocity-marquee",
      },
    ],
  },
  {
    id: "motion-dock",
    title: "Motion Dock",
    description: `A proximity-based dock where items scale and lift smoothly based on cursor position.
    Inspired by macOS, it uses physics-driven motion and cosine-based scaling for a responsive, playful interaction.`,
    tags: ["React", "Hover", "Animation", "Motion", "Interaction", "UI"],
    links: [
      { label: "GitHub", href: "https://github.com/kurocodes/Motion-Dock" },
      {
        label: "Try it Yourself",
        href: "https://kuro-motion-lab.vercel.app/motion-dock",
      },
    ],
  },
  {
    id: "staggered-text",
    title: "Staggered Text",
    description: `A layered text animation where characters transition in a staggered sequence on hover, creating a smooth vertical reveal effect.
    Each letter moves independently, producing a rhythmic, wave-like motion that feels clean, responsive, and expressive.`,
    tags: ["React", "Text", "Hover", "Animation", "Motion", "UI"],
    links: [
      {
        label: "Try it Yourself",
        href: "https://kuro-motion-lab.vercel.app/staggered-text",
      },
    ],
  },
];
