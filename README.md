# Cars Pat — refonte 2026

Première version Qwik City du site vitrine de Cars Pat, atelier de carrosserie
à Mazargues, Marseille.

## Développement local

```sh
pnpm install
pnpm dev
```

Puis ouvrir `http://127.0.0.1:5173`.

Les contrôles principaux sont disponibles avec :

```sh
pnpm check
pnpm test:e2e
```

## Périmètre

Le site présente les prestations, les archives photographiques historiques, les
informations locales actuellement visibles en production, une demande de devis
locale avec ajout de photos et un fallback sans WebGL. Le formulaire ne transmet
aucune donnée dans cette mission.

Les faits à reconfirmer avant publication sont listés dans
[`PROJECT.md`](PROJECT.md) et [`STATUS.md`](STATUS.md).

## Stack

- Qwik City 1.20.0 et TypeScript strict
- Sortie statique
- Three.js chargé uniquement lorsque la scène est visible
- Vitest et Playwright avec Chromium
- pnpm et lockfile versionné

## Sources de cadrage

- Production : https://www.cars-pat.fr/
- Archive historique en lecture seule : https://github.com/DevWeb13/CarsPat

Licence MIT pour la fondation du template. Les droits et autorisations des
contenus Cars Pat restent à confirmer avec leur propriétaire.
