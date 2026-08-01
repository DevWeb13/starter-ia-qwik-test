# État du projet

Dernière vérification : 1er août 2026

## État actuel

- Fondation Qwik Core : prête.
- Initialisation métier : non commencée.
- Branche de référence du template : `main` après fusion de la première PR.
- Déploiement : non configuré.

## Ce qui existe réellement

- application Qwik City stable ;
- sortie statique ;
- TypeScript strict ;
- Vitest et Playwright ;
- CI GitHub Actions ;
- configuration Codex prudente ;
- documents Core et procédure d'initialisation.

## Ce qui n'existe pas

- fonctionnalités métier ;
- compte utilisateur ;
- base de données ;
- paiement ;
- API OpenAI ;
- agents Codex personnalisés ;
- skills, rules, hooks ou MCP actifs ;
- projet Vercel.

## Problèmes connus

- `PROJECT.md` contient encore des marqueurs d'initialisation.
- L'origine statique utilise `https://example.com` tant que `SITE_ORIGIN` n'est pas défini.

## Prochaine action unique

Appliquer `prompts/INITIALIZE.md` à partir de la description réelle du projet, puis remplacer cette section par la première mission limitée.
