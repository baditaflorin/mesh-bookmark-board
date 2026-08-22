export default async function bookmarkBoardScenario(a, b) {
  await a.getByLabel("Link title").fill("Mesh Common demos");
  await a.getByLabel("Link URL").fill("https://baditaflorin.github.io/mesh-common/demos/");
  await a.getByRole("button", { name: "Save link" }).click();
  await b.getByRole("link", { name: "Mesh Common demos" }).waitFor({ timeout: 10000 });
  await a.waitForTimeout(1200);
}
