import { expect, test } from "@playwright/test";

const routes = ["/", "/services", "/work", "/work/linkedin-outreach-crm", "/work/bookkeeping-digital-foundation-concept", "/about", "/start-a-project", "/privacy", "/terms"];

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

test("CRM case study exposes a safe external demo link", async ({ page }) => {
  await page.goto("/work/linkedin-outreach-crm");
  const link = page.getByRole("link", { name: /open the live login/i });
  await expect(link).toHaveAttribute("href", "https://linked-in-outreach-crm-mvp-lac.vercel.app/login");
  await expect(link).toHaveAttribute("target", "_blank");
});

test("bookkeeping concept is explicitly labelled as fictional work", async ({ page }) => {
  await page.goto("/work/bookkeeping-digital-foundation-concept");
  await expect(page.getByText(/fictional example/i).first()).toBeVisible();
  await expect(page.getByText(/not client work/i).first()).toBeVisible();
  await expect(page.getByText(/cannot demonstrate client results/i)).toBeVisible();
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
