import Desktop from "../components/layout/Desktop";
import { workWindowRegistry } from "../features/window-system/registries/workWindowRegistry";
import type { PageProps } from "../utils/types";

export default function Work(props: PageProps) {
  return <Desktop {...props} registry={workWindowRegistry} />;
}
