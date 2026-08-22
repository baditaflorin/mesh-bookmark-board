import { createMeshConfig } from "@baditaflorin/mesh-common";

export const config = createMeshConfig({
  appName: "Bookmark Board",
  description: "A peer-attributed shared board for useful links in the room.",
  accentHex: "#b87822",
  version: __APP_VERSION__,
  commit: __GIT_COMMIT__,
});
