export const CORE_FILES = [
  "AGENTS.md",
  "PROJECT.md",
  "STATUS.md",
  "QUALITY.md",
  "prompts/INITIALIZE.md",
  ".codex/config.toml",
  ".github/workflows/ci.yml",
] as const;

export const INITIALIZATION_STEPS = [
  "Décrivez le résultat attendu.",
  "Demandez à Codex d'appliquer prompts/INITIALIZE.md.",
  "Vérifiez le contexte et lancez la première mission.",
] as const;

export const ADVANCED_PATH_PREFIXES = [
  ".codex/agents/",
  ".codex/rules/",
  ".codex/hooks.json",
  ".agents/skills/",
] as const;
