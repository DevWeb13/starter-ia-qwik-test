# État du projet

Dernière vérification : 1er août 2026

## État actuel

- Branche active : `work/01-initialize-cars-pat`.
- Première version Cars Pat : implémentée et vérifiée localement.
- Fondation : Qwik City 1.20.0, TypeScript strict, sortie statique, Vitest et
  Playwright.
- Routes générées : accueil, `/mentions-legales/` et page 404 statique.
- Déploiement et projet Vercel : non configurés et hors périmètre.

## Ce qui est livré

- Navigation desktop et mobile accessible, sections atelier, prestations,
  archives, confiance, devis, contact et pied de page.
- Formulaire de devis local avec validation native, contrôle des photos et
  message explicite : aucune donnée n'est envoyée.
- Scène Three.js procédurale d'une surface de carrosserie : import dynamique,
  arrêt hors écran, animation desktop uniquement, fallback statique, réduction
  mobile et désactivation pour `prefers-reduced-motion` ou WebGL indisponible.
- Images historiques candidates converties en WebP et chargées avec
  dimensions, alternatives et lazy loading adaptés.
- Titres, description, Open Graph, Twitter Card, canonical Cars Pat, données
  structurées `AutoBodyShop`, sitemap, robots et favicon.
- Documentation durable initialisée, première mission décrite et tests adaptés
  aux parcours réels.

## Faits vérifiés dans la production

- Cars Pat est présenté comme carrosserie et atelier à Mazargues, Marseille.
- Prestations affichées : carrosserie, peinture, remplacement de pare-brise,
  prise en charge de franchise et prêt de véhicule.
- Coordonnées affichées : 1 rue Denis Magdelon, 13009 Marseille,
  carrosse-pat@hotmail.fr, 04 91 40 28 01 et 06 15 61 49 14.
- Horaires affichés : lundi à vendredi, 08h00–12h00 et 14h00–18h30.
- La production affichait 4,7/5 et 40 avis Google au moment de la vérification,
  ainsi que Facebook et TikTok.

## Faits vérifiés dans le dépôt historique

- `DevWeb13/CarsPat` est un site statique HTML/SCSS de 2021 avec cinq pages de
  service et des images de carrosserie, peinture, atelier et véhicules.
- Il contient des séquences Mercedes et Peugeot 504, une vue d'atelier et une
  photo de façade utilisées dans la nouvelle version comme archives.
- Il ne contient pas de code Next.js 13 malgré la description du brief.

## Contrôles exécutés

- `pnpm format:check` : OK.
- `pnpm lint` : OK.
- `pnpm typecheck` : OK.
- `pnpm test:unit` : OK, 4 tests.
- `pnpm build` : OK, 3 pages statiques générées.
- `pnpm test:e2e` : OK, 17 tests réussis et 1 scénario ignoré sur le projet
  desktop ; desktop et mobile couverts.
- Vérification visuelle Playwright : captures desktop et mobile, navigation
  clavier, console sans erreur importante, reduced motion et fallback WebGL.

## Incertitudes et limites

- Horaires, coordonnées, prestations, conditions de franchise et véhicule de
  prêt doivent être reconfirmés par Cars Pat.
- Droits, date et statut des photographies historiques doivent être validés
  avant publication comme portfolio.
- Note, nombre et textes des avis sont un instantané de production.
- Mentions légales, responsable de publication et politique de confidentialité
  restent à compléter avec Cars Pat.
- Le build conserve un chunk Three.js dynamique d'environ 734 kB brut (189 kB
  gzip) ; il n'est pas chargé sur mobile ou en animation réduite, mais une
  mesure PageSpeed sur l'environnement de publication reste à faire.
- `agent-browser` n'est pas installé dans l'environnement ; la vérification
  navigateur a été réalisée avec Playwright Chromium.

## Prochaine action unique

Faire valider par Cars Pat les coordonnées, offres commerciales, droits médias,
avis et mentions légales, puis décider séparément de l’intégration réelle du
formulaire et d’un éventuel déploiement.
