export type PageProps = {
    backgroundImage?: string;
    isInteractive: boolean;
    toggleInteractive?: () => void;
}

export type MarqueeItem = {
    src: string;
    type: "component" | "project";
    id: string;
}