import { expect, test } from "@playwright/test";

test("homepage remains usable at tablet and wide-desktop widths", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "chromium", "Run once in Chromium");

  for (const viewport of [{ width: 768, height: 1024 }, { width: 1920, height: 1080 }]) {
    await page.setViewportSize(viewport);
    await page.goto("/");
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    expect(overflow).toBeFalsy();
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  }
});

test("reduced-motion preference is honored", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "chromium", "Run once in Chromium");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const duration = await page.locator(".button").first().evaluate((element) => getComputedStyle(element).transitionDuration);
  expect(Number.parseFloat(duration)).toBeLessThanOrEqual(0.00001);
});
