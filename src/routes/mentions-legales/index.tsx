import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { CONTACT, SITE_URL } from "~/lib/cars-pat";

export default component$(() => (
  <>
    <a class="skip-link" href="#main-content">
      Aller au contenu
    </a>
    <header class="site-header">
      <div class="container site-header__inner">
        <a class="brand" href="/" aria-label="Cars Pat, accueil">
          <span class="brand__mark" aria-hidden="true">
            CP
          </span>
          <span class="brand__name">
            Cars <em>Pat</em>
          </span>
        </a>
        <a class="site-nav__cta" href="/">
          Retour à l’accueil <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
    <main id="main-content" class="simple-page">
      <div class="container simple-page__inner">
        <p class="kicker">Cars Pat · version de travail</p>
        <h1>
          Mentions <em>légales.</em>
        </h1>
        <p class="simple-page__lead">
          Cette page rassemble les informations visibles dans la version de
          travail. Les mentions de l’exploitant, de l’éditeur et de la politique
          de confidentialité doivent être validées par Cars Pat avant toute mise
          en ligne définitive.
        </p>
        <div class="legal-layout">
          <section>
            <p class="kicker kicker--dark">Informations de contact</p>
            <h2>Cars Pat</h2>
            <p>
              {CONTACT.address}, {CONTACT.postalCode}
              <br />
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              <br />
              <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>
            </p>
          </section>
          <section>
            <p class="kicker kicker--dark">À compléter</p>
            <h2>Avant publication</h2>
            <ul>
              <li>Identité juridique et responsable de publication.</li>
              <li>Hébergeur et coordonnées réglementaires.</li>
              <li>Politique de confidentialité et conservation des données.</li>
              <li>Autorisation d’utilisation des photographies et avis.</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
    <footer class="site-footer simple-page__footer">
      <div class="container site-footer__bottom">
        <p>© Cars Pat · Marseille / Mazargues</p>
        <a href="/">Accueil</a>
        <p class="site-footer__note">Document à valider avant publication.</p>
      </div>
    </footer>
  </>
));

export const head: DocumentHead = {
  title: "Mentions légales — Cars Pat",
  meta: [
    {
      name: "description",
      content: "Mentions légales de la version de travail du site Cars Pat.",
    },
  ],
  links: [{ rel: "canonical", href: `${SITE_URL}/mentions-legales/` }],
};
