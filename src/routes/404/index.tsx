import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => (
  <>
    <a class="skip-link" href="#main-content">
      Aller au contenu
    </a>
    <main id="main-content" class="not-found">
      <div class="container not-found__inner">
        <p class="kicker">Erreur 404 · atelier introuvable</p>
        <h1>
          Cette page a quitté <em>la ligne.</em>
        </h1>
        <p>
          Le lien demandé n’existe pas. Revenez à l’atelier Cars Pat pour
          retrouver les prestations et le formulaire de devis.
        </p>
        <a class="button button--bright" href="/">
          Retour à l’accueil <span aria-hidden="true">↗</span>
        </a>
      </div>
    </main>
  </>
));

export const head: DocumentHead = {
  title: "Page introuvable — Cars Pat",
  meta: [
    {
      name: "description",
      content: "La page Cars Pat demandée est introuvable.",
    },
  ],
};
