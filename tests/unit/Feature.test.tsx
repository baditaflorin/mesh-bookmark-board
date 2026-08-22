import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Feature } from "../../src/Feature";

vi.mock("@baditaflorin/mesh-common", async () => {
  const actual = await vi.importActual<object>("@baditaflorin/mesh-common");
  return {
    ...actual,
    useSharedBookmarks: () => ({ bookmarks: [], add: () => true, remove: () => true }),
  };
});
describe("Bookmark Board", () => {
  it("offers a labeled link composer", () => {
    render(
      <Feature
        room={null}
        config={
          {
            appName: "Bookmark Board",
            description: "Links",
            accentHex: "#000",
            version: "test",
            commit: "test",
          } as never
        }
      />,
    );
    expect(screen.getByLabelText("Link title")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Save link" })).toBeDisabled();
  });
});
