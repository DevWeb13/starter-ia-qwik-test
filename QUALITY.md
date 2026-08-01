# Qualité

## Définition de fini

Une modification est terminée seulement lorsque :

- le besoin demandé est couvert sans extension injustifiée du périmètre ;
- TypeScript reste strict et sans erreur ;
- le formatage et le lint sont verts ;
- les tests pertinents sont verts ;
- le build statique réussit ;
- le parcours principal reste utilisable au clavier et à 320 px ;
- aucun secret ni fichier local sensible n'est ajouté ;
- `PROJECT.md` et `STATUS.md` restent cohérents avec le résultat réel.
- Les données locales affichées reposent sur une source vérifiée et les
  éléments à confirmer ne sont pas présentés comme des garanties.
- Le formulaire de devis ne réalise aucun envoi réseau et annonce clairement
  son statut de prototype local.
- Three.js reste optionnel : le contenu, le contraste et l'appel à l'action
  fonctionnent avec le fallback statique, sans WebGL et avec les animations
  réduites.
- La scène 3D est suspendue lorsqu'elle n'est plus visible et limite son ratio
  de pixels sur les appareils modestes.

## Commandes obligatoires

```sh
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test:unit
pnpm build
pnpm test:e2e
```

Le raccourci suivant couvre tous les contrôles sauf Playwright :

```sh
pnpm check
```

Après le build, vérifier aussi le site avec Playwright en desktop et mobile :
capture visuelle, navigation clavier, formulaire local, menu mobile, route 404,
absence de débordement horizontal et absence d'erreur console importante.

## Règles Qwik

- Utiliser des composants Qwik natifs et la syntaxe `$` lorsque nécessaire.
- Éviter React et l'hydratation ajoutée par réflexe.
- Garder le JavaScript client au strict nécessaire.
- Utiliser Qwik City pour le routage.
- Conserver la sortie statique tant qu'une exigence serveur n'est pas démontrée.
- Ajouter un adaptateur serveur uniquement par décision explicite.

## Interface

- HTML sémantique et titres hiérarchisés.
- Navigation clavier complète et focus visible.
- Contrastes lisibles.
- Aucun débordement horizontal à 320 px.
- Respect de `prefers-reduced-motion`.
- Texte compréhensible sans dépendre de la couleur.
- Le fallback de la scène Three.js est présent dans le HTML initial.

## Sécurité

- Aucun secret dans Git, les journaux ou les rapports.
- Variables locales dans `.env`, jamais commitées.
- Valeurs publiques documentées dans `.env.example`.
- Aucune action externe destructive ou payante sans accord humain explicite.
- Réseau Codex désactivé par défaut.

## Gravité des défauts

- **Bloquant** : build impossible, perte de données, secret exposé, faille évidente ou parcours principal inutilisable.
- **Important** : régression fonctionnelle, accessibilité majeure, test essentiel absent ou documentation trompeuse.
- **Amélioration** : optimisation ou finition non indispensable à la livraison.

Aucun défaut bloquant ou important connu ne peut être présenté comme livré.
