import { describe, expect, it } from "vitest";
import {
  CONTACT,
  QUOTE_FORM_LIMITS,
  REVIEW_SNAPSHOT,
  SERVICES,
  SOCIAL_LINKS,
} from "./cars-pat";

describe("Données Cars Pat", () => {
  it("conserve les coordonnées vérifiées de la production", () => {
    expect(CONTACT.address).toBe("1 rue Denis Magdelon");
    expect(CONTACT.postalCode).toBe("13009 Marseille");
    expect(CONTACT.phoneHref).toBe("+33491402801");
    expect(CONTACT.email).toBe("carrosse-pat@hotmail.fr");
  });

  it("présente les cinq entrées de prestations annoncées", () => {
    expect(SERVICES).toHaveLength(5);
    expect(SERVICES.map((service) => service.title)).toEqual([
      "Carrosserie",
      "Peinture automobile",
      "Pare-brise",
      "Franchise",
      "Véhicule de prêt",
    ]);
  });

  it("garde les limites du parcours local de devis explicites", () => {
    expect(QUOTE_FORM_LIMITS.maxFiles).toBe(9);
    expect(QUOTE_FORM_LIMITS.maxFileSizeMb).toBe(32);
    expect(QUOTE_FORM_LIMITS.acceptedTypes).toContain("image/webp");
  });

  it("référence uniquement les réseaux visibles dans la production", () => {
    expect(SOCIAL_LINKS.map((social) => social.label)).toEqual([
      "Facebook",
      "TikTok",
    ]);
    expect(REVIEW_SNAPSHOT.rating).toBe("4,7");
    expect(REVIEW_SNAPSHOT.count).toBe("40");
  });
});
