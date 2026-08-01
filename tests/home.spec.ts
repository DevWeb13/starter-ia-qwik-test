import { expect, test } from "@playwright/test";

test("présente le parcours d'initialisation", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Starter IA Qwik/);
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Une fondation Qwik prête à comprendre votre projet.",
    }),
  ).toBeVisible();
  await expect(
    page.getByText("prompts/INITIALIZE.md", { exact: true }),
  ).toBeVisible();
  await expect(page.getByText("Fonctions Advanced")).toBeVisible();
});

test("reste utilisable sans débordement horizontal", async ({ page }) => {
  await page.goto("/");
  const hasHorizontalOverflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth >
      document.documentElement.clientWidth,
  );

  expect(hasHorizontalOverflow).toBe(false);
});
