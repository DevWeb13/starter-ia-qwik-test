# Starter IA Qwik

Template Qwik City stable, prêt à être initialisé avec Codex à partir d'une description de projet.

## Objectif

Ce dépôt fournit une fondation volontairement courte : une application Qwik fonctionnelle, des contrôles automatisés et le contexte minimal dont Codex a besoin pour commencer proprement. Il ne contient ni SaaS, ni authentification, ni base de données, ni paiement, ni serveur MCP activé.

## Démarrage

1. Utilisez ce dépôt comme template GitHub.
2. Clonez votre nouveau dépôt.
3. Ouvrez-le avec Codex.
4. Donnez votre objectif puis demandez à Codex d'appliquer [`prompts/INITIALIZE.md`](prompts/INITIALIZE.md).

Exemple :

```text
Initialise ce dépôt pour créer un site Qwik destiné à un artisan plombier à Marseille.
Il doit présenter ses services, améliorer son référencement local et permettre une demande de devis.
```

L'initialisation doit remplir les documents de contexte, adapter les critères de qualité, préparer une première mission limitée et laisser la fondation technique vérifiable.

## Fichiers Core

| Chemin                     | Rôle                                                |
| -------------------------- | --------------------------------------------------- |
| `AGENTS.md`                | Règles permanentes de travail dans le dépôt         |
| `PROJECT.md`               | But durable, utilisateurs, périmètre et contraintes |
| `STATUS.md`                | État vérifié, problèmes connus et prochaine action  |
| `QUALITY.md`               | Définition de fini et commandes obligatoires        |
| `prompts/INITIALIZE.md`    | Procédure de première initialisation                |
| `.codex/config.toml`       | Permissions prudentes propres au projet             |
| `.github/workflows/ci.yml` | Contrôles GitHub Actions                            |

## Commandes

```sh
corepack enable
pnpm install
pnpm dev
pnpm check
pnpm test:e2e
```

`pnpm check` exécute le formatage, le lint, TypeScript, les tests unitaires et le build statique. Les tests Playwright sont séparés afin de conserver une boucle locale rapide.

## Choix techniques

- Qwik City 1.20.0 stable ; la bêta Qwik 2 n'est pas utilisée.
- TypeScript strict.
- Sortie statique par défaut.
- Vitest pour les tests unitaires.
- Playwright avec Chromium pour les parcours desktop et mobile.
- pnpm et lockfile versionné.
- Aucun modèle Codex imposé.
- Réseau désactivé par défaut dans le sandbox Codex.

## Sécurité

Ne commitez jamais de secret, de jeton, de fichier `.env`, de données d'authentification ou de fichiers locaux provenant de `~/.codex/`. Le dépôt ne contient que des réglages partageables au niveau du projet.

## Hors du Core

Les agents personnalisés, skills, rules, hooks, serveurs MCP, profils personnels et documents d'architecture détaillés appartiennent à une future variante Advanced. Ils ne doivent être ajoutés que lorsqu'un projet réel justifie leur coût et leur maintenance.

## Documentation officielle

- Qwik : https://qwik.dev/docs/
- Qwik City : https://qwik.dev/docs/qwikcity/
- Codex et `AGENTS.md` : https://developers.openai.com/codex/agent-configuration/agents-md
- Configuration Codex : https://developers.openai.com/codex/config-file/config-basic

Licence MIT.
