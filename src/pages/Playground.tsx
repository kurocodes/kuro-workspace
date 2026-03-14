import Desktop from "../components/layout/Desktop";
import { playgroundWindowRegistry } from "../features/window-system/registries/playgroundWindowRegistry";
import type { PageProps } from "../utils/types";

export default function Playground(props: PageProps) {
  return <Desktop {...props} registry={playgroundWindowRegistry} />;
}
