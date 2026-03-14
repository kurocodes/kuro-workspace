import Desktop from "../components/layout/Desktop";
import { homeWindowRegistry } from "../features/window-system/registries/homeWindowRegistry";
import type { PageProps } from "../utils/types";

export default function Home(props: PageProps) {
  return <Desktop {...props} registry={homeWindowRegistry} />;
}
