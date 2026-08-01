import { expect, test } from "@playwright/test";

test.describe("Cars Pat", () => {
  test("présente le parcours principal", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Cars Pat/);
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /La carrosserie, au millimètre/i,
      }),
    ).toBeVisible();
    await expect(
      page.locator("main").getByText("Prestations", { exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /Les traces du geste/i }),
    ).toBeVisible();
    await expect(
      page.locator("#devis").getByText("Demande de devis", { exact: true }),
    ).toBeVisible();
    await expect(
      page.getByText("Aucune donnée n’est envoyée", { exact: false }),
    ).toBeVisible();
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

  test("valide le parcours de formulaire sans envoi réseau", async ({
    page,
  }) => {
    await page.goto("/#devis");
    await page.locator('[name="name"]').fill("Visiteur de test");
    await page.locator('[name="email"]').fill("visiteur@cars-pat.test");
    await page.locator('[name="phone"]').fill("0600000000");
    await page.locator('[name="message"]').fill("Test local du formulaire.");
    await page.locator('[name="consent"]').check();
    await page.locator('[name="photos"]').setInputFiles({
      name: "dommage.png",
      mimeType: "image/png",
      buffer: Buffer.from("fake-image"),
    });
    await expect(
      page.getByText("1 photo prête", { exact: false }),
    ).toBeVisible();
    await page.getByRole("button", { name: /Valider la demande/i }).click();
    await expect(
      page.getByText("Demande validée localement", { exact: false }),
    ).toBeVisible();
  });

  test("expose les routes de confiance et de repli", async ({ page }) => {
    await page.goto("/mentions-legales/");
    await expect(page).toHaveTitle(/Mentions légales/);
    await expect(
      page.getByRole("heading", { name: /Mentions légales/i }),
    ).toBeVisible();

    await page.goto("/404/");
    await expect(page).toHaveTitle(/Page introuvable/);
    await expect(
      page.getByRole("heading", { name: /a quitté la ligne/i }),
    ).toBeVisible();
  });

  test("ne produit pas d’erreur console importante au chargement", async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    page.on("pageerror", (error) => errors.push(error.message));

    await page.goto("/");
    await page.waitForTimeout(800);

    expect(errors).toEqual([]);
  });

  test("met le lien d’évitement au premier passage clavier", async ({
    page,
  }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    await expect(
      page.getByRole("link", { name: "Aller au contenu" }),
    ).toBeFocused();
  });

  test("permet d’ouvrir le menu au clavier sur petit écran", async ({
    page,
  }) => {
    const viewport = page.viewportSize();
    test.skip(!viewport || viewport.width > 800, "Parcours mobile uniquement");

    await page.goto("/");
    const menu = page.getByRole("button", { name: /Ouvrir le menu/i });
    await menu.focus();
    await page.keyboard.press("Enter");
    await expect(
      page.getByRole("button", { name: /Fermer le menu/i }),
    ).toBeVisible();
    await expect(
      page.getByRole("navigation", { name: "Navigation principale" }),
    ).toBeVisible();
  });

  test("respecte les animations réduites", async ({ page }) => {
    await page.addInitScript({
      content: `
        let rafCount = 0;
        const nativeRequestAnimationFrame = window.requestAnimationFrame;
        window.requestAnimationFrame = (callback) => {
          rafCount += 1;
          return nativeRequestAnimationFrame.call(window, callback);
        };
        Object.defineProperty(window, "__carsPatRafCount", {
          get: () => rafCount,
        });
      `,
    });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    await page.waitForTimeout(800);

    expect(
      await page.evaluate(
        () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      ),
    ).toBe(true);
    expect(
      await page.evaluate(
        () =>
          (window as Window & { __carsPatRafCount?: number })
            .__carsPatRafCount ?? 0,
      ),
    ).toBe(0);
  });

  test("conserve le fallback si WebGL est indisponible", async ({ page }) => {
    await page.addInitScript({
      content: `
        const nativeGetContext = HTMLCanvasElement.prototype.getContext;
        HTMLCanvasElement.prototype.getContext = function (contextId) {
          if (["webgl", "webgl2", "experimental-webgl"].includes(contextId)) {
            throw new Error("WebGL disabled for fallback verification");
          }
          return nativeGetContext.apply(this, arguments);
        };
      `,
    });
    await page.goto("/");
    await page.waitForTimeout(800);

    await expect(page.locator(".paint-surface__fallback")).toBeVisible();
    if ((page.viewportSize()?.width ?? 0) > 800) {
      await expect(page.locator(".paint-surface__canvas")).toHaveJSProperty(
        "hidden",
        true,
      );
    }
  });
});
