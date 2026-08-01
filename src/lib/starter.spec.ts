import { describe, expect, it } from "vitest";
import {
  ADVANCED_PATH_PREFIXES,
  CORE_FILES,
  INITIALIZATION_STEPS,
} from "./starter";

describe("Starter IA Core", () => {
  it("expose un noyau court sans doublon", () => {
    expect(new Set(CORE_FILES).size).toBe(CORE_FILES.length);
    expect(CORE_FILES).toContain("AGENTS.md");
    expect(CORE_FILES).toContain("prompts/INITIALIZE.md");
    expect(CORE_FILES.length).toBeLessThanOrEqual(8);
  });

  it("garde les fonctions Advanced hors du noyau", () => {
    for (const path of ADVANCED_PATH_PREFIXES) {
      expect(CORE_FILES.some((file) => file.startsWith(path))).toBe(false);
    }
  });

  it("propose un parcours en trois étapes", () => {
    expect(INITIALIZATION_STEPS).toHaveLength(3);
  });
});
