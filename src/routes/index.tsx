import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { CORE_FILES, INITIALIZATION_STEPS } from "~/lib/starter";

export default component$(() => (
  <>
    <a class="skip-link" href="#main-content">
      Aller au contenu
    </a>

    <header class="site-header">
      <a class="brand" href="/" aria-label="Starter IA Qwik, accueil">
        <span class="brand-mark" aria-hidden="true">
          S
        </span>
        <span>Starter IA Qwik</span>
      </a>
      <a
        class="header-link"
        href="https://github.com/DevWeb13/starter-ia-qwik"
        target="_blank"
        rel="noreferrer"
      >
        Voir sur GitHub
      </a>
    </header>

    <main id="main-content">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow">Template Core · Qwik City · Codex</p>
          <h1 id="hero-title">
            Une fondation Qwik prête à comprendre votre projet.
          </h1>
          <p class="hero-text">
            Décrivez le résultat attendu. Codex initialise le contexte, les
            règles et la première mission sans ajouter de complexité inutile.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="#initialize">
              Voir le démarrage
            </a>
            <a class="button button-secondary" href="#core-files">
              Explorer le Core
            </a>
          </div>
        </div>

        <aside class="status-card" aria-label="État du template">
          <div class="status-line">
            <span>Fondation</span>
            <strong>Prête</strong>
          </div>
          <div class="status-line">
            <span>Réseau Codex</span>
            <strong>Désactivé</strong>
          </div>
          <div class="status-line">
            <span>Fonctions Advanced</span>
            <strong>Absentes</strong>
          </div>
          <div class="status-line">
            <span>Sortie</span>
            <strong>Statique</strong>
          </div>
        </aside>
      </section>

      <section class="section" aria-labelledby="workflow-title">
        <div class="section-heading">
          <p class="eyebrow">Parcours</p>
          <h2 id="workflow-title">
            Trois étapes avant le premier développement.
          </h2>
        </div>
        <ol class="steps">
          {INITIALIZATION_STEPS.map((step, index) => (
            <li key={step}>
              <span aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="initialize"
        class="section initialize"
        aria-labelledby="initialize-title"
      >
        <div class="section-heading">
          <p class="eyebrow">Initialisation</p>
          <h2 id="initialize-title">
            Une demande suffit pour produire un contexte propre.
          </h2>
        </div>
        <pre class="prompt">
          <code>{`Initialise ce dépôt pour créer un site Qwik destiné à un artisan plombier à Marseille.
Il doit présenter ses services, améliorer son référencement local et permettre une demande de devis.`}</code>
        </pre>
        <p class="supporting-text">
          La procédure remplit les documents, rend les hypothèses visibles et
          prépare une première mission limitée. Elle ne construit pas
          automatiquement un SaaS complet.
        </p>
      </section>

      <section id="core-files" class="section" aria-labelledby="files-title">
        <div class="section-heading">
          <p class="eyebrow">Noyau</p>
          <h2 id="files-title">
            Sept fichiers de travail, chacun avec un rôle précis.
          </h2>
        </div>
        <ul class="file-grid">
          {CORE_FILES.map((file) => (
            <li key={file}>
              <code>{file}</code>
            </li>
          ))}
        </ul>
      </section>

      <section class="section principles" aria-labelledby="principles-title">
        <div class="section-heading">
          <p class="eyebrow">Principes</p>
          <h2 id="principles-title">
            Peu de fichiers, des limites explicites.
          </h2>
        </div>
        <div class="principle-grid">
          <article>
            <h3>Prudent par défaut</h3>
            <p>
              Écriture limitée au dépôt, approbation à la demande et réseau
              désactivé.
            </p>
          </article>
          <article>
            <h3>Vérifiable</h3>
            <p>
              Lint, TypeScript, tests, build statique et parcours Playwright en
              CI.
            </p>
          </article>
          <article>
            <h3>Sans suréquipement</h3>
            <p>
              Pas d'agent personnalisé, de skill, de hook ou de MCP tant que le
              besoin n'est pas démontré.
            </p>
          </article>
        </div>
      </section>
    </main>

    <footer>
      <p>Starter IA Qwik · MIT · Core avant Advanced.</p>
    </footer>
  </>
));

export const head: DocumentHead = {
  title: "Starter IA Qwik — Template Core prêt pour Codex",
  meta: [
    {
      name: "description",
      content:
        "Template Qwik City stable avec contexte projet, contrôles et initialisation guidée pour Codex.",
    },
  ],
};
