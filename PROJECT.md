# Projet Cars Pat

> État d'initialisation : `INITIALIZED`

Cars Pat est une carrosserie automobile située à Mazargues, Marseille. Cette
refonte 2026 transforme le template Starter IA Qwik en site vitrine local,
rapide, accessible et orienté prise de contact.

## Identité

- Nom : Cars Pat — refonte 2026
- Type : site vitrine local pour un atelier de carrosserie
- Dépôt de travail : https://github.com/DevWeb13/starter-ia-qwik-test
- Branche de mission : `work/01-initialize-cars-pat`
- Stack : Qwik City, TypeScript, sortie statique, Three.js chargé à la demande

## Sources de cadrage

- Production observée le 1er août 2026 : https://www.cars-pat.fr/
- Dépôt historique en lecture seule : https://github.com/DevWeb13/CarsPat
- Le dépôt historique réellement accessible contient un ancien site statique
  HTML/SCSS publié en 2021. Il ne contient pas l'application Next.js 13
  mentionnée dans le brief ; cette divergence est conservée comme limite.

## Problème à résoudre

Présenter le savoir-faire de l'atelier avec une identité plus précise et plus
contemporaine, tout en donnant rapidement accès aux prestations, aux
réalisations, aux avis, aux coordonnées et à une demande de devis préparée.

## Utilisateurs

- Conducteurs de Marseille et des quartiers voisins après un accident ou un
  besoin de remise en peinture.
- Propriétaires qui cherchent un atelier local pour un pare-brise ou une
  estimation à partir de photos.

## Résultat attendu

Une première version réellement navigable sur mobile et desktop, utile sans
JavaScript ni WebGL, avec une expérience Three.js légère qui évoque une pièce
de carrosserie et ses reflets sans masquer le contenu.

## Fonctionnalités essentielles

- Présenter la carrosserie, la peinture, le pare-brise et les deux offres
  commerciales actuellement annoncées, avec leur statut à confirmer.
- Montrer des archives photographiques historiques sans les présenter comme
  des réalisations récentes vérifiées.
- Exposer les avis Google visibles sur la production, les coordonnées,
  horaires et réseaux sociaux vérifiés.
- Préparer une demande de devis avec champs obligatoires, ajout de photos et
  validation locale ; aucun envoi réel n'est activé dans cette mission.
- Fournir un référencement local de base : titres, Open Graph, données
  structurées, canonical, sitemap, robots et route 404.

## Non-objectifs

- Ajouter une base de données, une authentification, un CMS, un paiement ou une
  API d'envoi de formulaire.
- Déployer, modifier le domaine `cars-pat.fr`, le projet Vercel ou le site de
  production.
- Reproduire visuellement le site historique ou inventer des chiffres,
  témoignages, photographies ou engagements commerciaux.

## Contraintes durables

- HTML sémantique, TypeScript strict, sortie statique et JavaScript client
  limité au menu, au formulaire local et à la scène 3D.
- Three.js doit être importé à la demande, suspendu hors écran, réduit sur
  mobile et désactivé pour `prefers-reduced-motion` ou sans WebGL.
- Les images historiques sont réutilisées avec des dimensions, alternatives
  et chargements adaptés ; les droits et la fraîcheur des contenus doivent
  être confirmés avant publication.
- Les affirmations commerciales restent qualifiées tant que Cars Pat ne les a
  pas reconfirmées.

## Critères de réussite

- La page présente un parcours complet : accueil, prestations, archives,
  confiance, devis, coordonnées, réseaux sociaux, mentions et 404.
- Le contenu principal reste lisible et actionnable à 320 px, au clavier, avec
  les animations réduites et sans WebGL.
- Le build statique, le lint, TypeScript, les tests unitaires et Playwright
  passent ; aucune erreur importante n'apparaît dans le navigateur.
- Les documents du dépôt restent cohérents avec les faits réellement vérifiés.

## À confirmer auprès de Cars Pat avant mise en ligne

- Horaires, adresse, téléphones et adresse e-mail.
- Prestations toujours proposées.
- Conditions commerciales, notamment prise en charge de franchise et véhicule
  de prêt.
- Textes, ancienneté revendiquée et formulation des promesses.
- Photographies et autorisation de réutilisation des archives.
- Avis, note et nombre d'avis à afficher.
- Liens Facebook, TikTok et tout autre réseau social souhaité.
- Mentions légales, responsable de publication et politique de confidentialité.
