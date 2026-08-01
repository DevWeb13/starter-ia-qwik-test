# Initialiser ce dépôt

Utilise la description de projet fournie par l'utilisateur comme source principale, puis initialise ce template sans développer encore le produit complet.

## Procédure

1. Lis `AGENTS.md`, `PROJECT.md`, `STATUS.md`, `QUALITY.md`, `README.md` et inspecte la fondation Qwik.
2. Extrais uniquement les faits fournis : problème, utilisateurs, résultat, contraintes, fonctionnalités essentielles et non-objectifs.
3. Lorsque des détails secondaires manquent, formule des hypothèses explicites et réversibles. Pose une question seulement si une décision importante ne peut pas être prise sans inventer.
4. Remplace tous les marqueurs d'initialisation dans `PROJECT.md` et passe l'état à `INITIALIZED`.
5. Mets `STATUS.md` à jour avec l'état réellement vérifié, les incertitudes et une seule prochaine action.
6. Adapte `QUALITY.md` uniquement lorsque le projet impose des contrôles supplémentaires. Ne retire jamais les exigences de sécurité, TypeScript, build, accessibilité et tests.
7. Mets à jour le nom, la description et les métadonnées génériques de l'application sans ajouter de dépendance.
8. Crée `prompts/FIRST-MISSION.md` avec une mission petite, vérifiable et directement liée au premier résultat utile.
9. Ne crée pas encore `DECISIONS.md`, `ROADMAP.md`, `ARCHITECTURE.md`, `DESIGN.md`, d'agent personnalisé, de skill, de rule, de hook ou de MCP sauf nécessité démontrée et demande explicite.
10. N'ajoute ni authentification, ni base de données, ni paiement, ni API, ni service distant par réflexe.
11. Exécute les contrôles disponibles. Pour toute commande nécessitant le réseau, demande l'autorisation temporaire appropriée au lieu d'activer durablement le réseau dans `.codex/config.toml`.
12. Termine par un rapport indiquant les faits utilisés, les hypothèses, les fichiers modifiés, les contrôles et la première mission proposée.

## Critère de sortie

L'initialisation est réussie lorsque les documents ne contiennent plus de valeur modèle, qu'ils décrivent un projet précis et cohérent, et qu'une première mission limitée peut être lancée sans refaire le cadrage.
