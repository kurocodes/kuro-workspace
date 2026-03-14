import Desktop from "../components/layout/Desktop";
import { blogWindowRegistry } from "../features/window-system/registries/blogWindowRegistry";
import type { PageProps } from "../utils/types";

export default function Blog(props: PageProps) {
  return <Desktop {...props} registry={blogWindowRegistry} />;
}
