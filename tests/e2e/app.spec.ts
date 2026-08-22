import { expect, test } from "@playwright/test";
test("loads the bookmark composer", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByLabel("Link title")).toBeVisible();
  await expect(page.getByLabel("Link URL")).toBeVisible();
});
