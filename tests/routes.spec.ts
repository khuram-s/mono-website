import { expect, test } from "@playwright/test";

const routes = ["/", "/services", "/work", "/work/bookkeeping-digital-foundation-concept", "/about", "/start-a-project", "/privacy", "/terms"];

for (const route of routes) {
  test(`${route} renders with one primary heading`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.ok()).toBeTruthy();
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("main")).toBeVisible();
  });
}

test("primary journey reaches the start page", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: /book a discovery call/i }).first().click();
  await expect(page).toHaveURL(/\/start-a-project$/);
  await expect(page.getByRole("heading", { name: /useful first conversation/i })).toBeVisible();
});

test("Northline is framed as an independent Mono Code project", async ({ page }) => {
  for (const route of ["/", "/work", "/work/bookkeeping-digital-foundation-concept"]) {
    await page.goto(route);
    await expect(page.getByText(/independent project/i).first()).toBeVisible();
    await expect(page.getByText(/fictional|not client work|no client/i)).toHaveCount(0);
  }

  await expect(page.getByText(/strategy, design, and responsive front-end/i).first()).toBeVisible();
  await expect(page.getByText(/what the work demonstrates/i).first()).toBeVisible();
});

test("withdrawn CRM case study remains unavailable", async ({ page }) => {
  const response = await page.goto("/work/linkedin-outreach-crm");
  expect(response?.status()).toBe(404);
});

test("legal links are present in the footer", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: "Privacy" })).toHaveAttribute("href", "/privacy");
  await expect(page.getByRole("link", { name: "Terms" })).toHaveAttribute("href", "/terms");
});

test("start page uses the approved calendar and verified contact inbox", async ({ page }) => {
  await page.goto("/start-a-project");
  await expect(page.getByRole("link", { name: /open booking calendar/i })).toHaveAttribute("href", "https://calendar.app.google/b4sK6vopgYTupQKX6");
  await expect(page.getByRole("link", { name: "khuram@monocode.space" }).first()).toHaveAttribute("href", "mailto:khuram@monocode.space");
});
