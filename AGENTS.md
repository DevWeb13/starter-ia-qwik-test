# Consignes permanentes pour Codex

## Références

Avant toute modification, lire dans cet ordre :

1. `PROJECT.md` ;
2. `STATUS.md` ;
3. `QUALITY.md` ;
4. le brief ou le prompt courant.

Si `PROJECT.md` indique que le projet n'est pas initialisé, appliquer `prompts/INITIALIZE.md` avant toute fonctionnalité métier.

## Travail et Git

- Ne jamais modifier directement `main` ou `master`.
- Utiliser une branche dédiée par mission.
- Préserver les changements utilisateur hors périmètre.
- Un seul agent écrit dans les fichiers, Git ou les services externes.
- Ne jamais pousser, publier, déployer, fusionner ou supprimer sans autorisation humaine explicite.
- Ne jamais lire, afficher, transmettre ou committer un secret.

## Proportionnalité

- Réaliser la plus petite modification complète répondant au besoin.
- Ne pas ajouter de dépendance, service distant, authentification, base de données ou abstraction sans justification vérifiable.
- Ne pas créer les éléments Advanced (`.codex/agents`, `.agents/skills`, rules, hooks ou MCP) pendant une mission Core, sauf demande explicite et motivée.
- Poser une question uniquement lorsqu'une information manque réellement pour poursuivre sans inventer une décision importante.

## Contrôles

Après une modification applicative, exécuter les commandes pertinentes parmi :

```sh
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test:unit
pnpm build
pnpm test:e2e
```

Toujours vérifier aussi :

```sh
git diff --check
git status --short
```

Ne jamais annoncer une réussite sans preuve issue des contrôles exécutés. En cas d'impossibilité d'exécuter un contrôle, l'indiquer clairement.

## Rapport final

Résumer :

- les fichiers modifiés ;
- les décisions prises et hypothèses visibles ;
- les contrôles exécutés et leurs résultats ;
- les limites ou problèmes restants ;
- l'action humaine éventuellement nécessaire.
