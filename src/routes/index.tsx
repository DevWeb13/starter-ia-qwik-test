import { $, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PaintSurface } from "~/components/paint-surface/paint-surface";
import {
  ARCHIVES,
  CONTACT,
  QUOTE_FORM_LIMITS,
  REVIEW_SNAPSHOT,
  SERVICES,
  SITE_URL,
  SOCIAL_LINKS,
} from "~/lib/cars-pat";

export default component$(() => {
  const menuOpen = useSignal(false);
  const fileFeedback = useSignal("");
  const submissionFeedback = useSignal("");

  const closeMenu = $(() => {
    menuOpen.value = false;
  });

  const toggleMenu = $(() => {
    menuOpen.value = !menuOpen.value;
  });

  const handlePhotos = $((event: Event) => {
    const input = event.target as HTMLInputElement;
    const files = Array.from(input.files ?? []);
    const allowedFiles = files.filter((file) =>
      QUOTE_FORM_LIMITS.acceptedTypes.some((type) => type === file.type),
    );
    const sizeLimitedFiles = allowedFiles.filter(
      (file) => file.size <= QUOTE_FORM_LIMITS.maxFileSizeMb * 1024 * 1024,
    );
    const acceptedFiles = sizeLimitedFiles.slice(0, QUOTE_FORM_LIMITS.maxFiles);
    const rejectedCount = files.length - acceptedFiles.length;

    if (acceptedFiles.length === 0) {
      fileFeedback.value = files.length
        ? "Aucun fichier accepté. Utilisez JPG, PNG, GIF ou WEBP, 32 Mo maximum par photo."
        : "Aucune photo ajoutée.";
      return;
    }

    fileFeedback.value = `${acceptedFiles.length} photo${acceptedFiles.length > 1 ? "s" : ""} prête${acceptedFiles.length > 1 ? "s" : ""} pour cette démo locale${rejectedCount ? ` · ${rejectedCount} ignorée${rejectedCount > 1 ? "s" : ""}` : ""}.`;
  });

  const handleSubmit = $(() => {
    submissionFeedback.value =
      "Demande validée localement. Aucun message n’a été envoyé : cette version prépare le parcours uniquement.";
  });

  return (
    <>
      <a class="skip-link" href="#main-content">
        Aller au contenu
      </a>

      <div class="utility-bar">
        <div class="container utility-bar__inner">
          <p>Carrosserie · Peinture · Mazargues / Marseille</p>
          <div class="utility-bar__links">
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>
          </div>
        </div>
      </div>

      <header class="site-header">
        <div class="container site-header__inner">
          <a class="brand" href="#home" aria-label="Cars Pat, accueil">
            <span class="brand__mark" aria-hidden="true">
              CP
            </span>
            <span class="brand__name">
              Cars <em>Pat</em>
            </span>
          </a>

          <button
            class="menu-toggle"
            type="button"
            aria-controls="primary-navigation"
            aria-expanded={menuOpen.value}
            onClick$={toggleMenu}
          >
            <span class="visually-hidden">
              {menuOpen.value ? "Fermer le menu" : "Ouvrir le menu"}
            </span>
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>

          <nav
            id="primary-navigation"
            class={{
              "site-nav": true,
              "site-nav--open": menuOpen.value,
            }}
            aria-label="Navigation principale"
          >
            <a href="#atelier" onClick$={closeMenu}>
              L’atelier
            </a>
            <a href="#services" onClick$={closeMenu}>
              Prestations
            </a>
            <a href="#archives" onClick$={closeMenu}>
              Archives
            </a>
            <a href="#avis" onClick$={closeMenu}>
              Confiance
            </a>
            <a class="site-nav__cta" href="#devis" onClick$={closeMenu}>
              Demander un devis <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section id="home" class="hero" aria-labelledby="hero-title">
          <div class="container hero__grid">
            <div class="hero__copy">
              <p class="kicker">
                <span class="kicker__line" aria-hidden="true" />
                Atelier de carrosserie · Marseille 09
              </p>
              <h1 id="hero-title">
                La carrosserie,
                <br />
                <em>au millimètre.</em>
              </h1>
              <p class="hero__intro">
                Chez Cars Pat, la réparation commence par un regard précis :
                comprendre le choc, retrouver la ligne, rendre à la peinture sa
                profondeur.
              </p>
              <div class="hero__actions">
                <a class="button button--bright" href="#devis">
                  <span>Parler de mon véhicule</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <a class="text-link" href="#services">
                  Voir les prestations <span aria-hidden="true">↓</span>
                </a>
              </div>
              <div class="hero__footnote">
                <span class="hero__footnote-index">01</span>
                <p>
                  Une adresse locale, un échange direct, une estimation à
                  préparer avec vos photos.
                </p>
              </div>
            </div>

            <div class="hero__visual">
              <PaintSurface />
              <div class="hero__visual-label hero__visual-label--top">
                <span>CP / 2026</span>
                <span>LIGHT STUDY</span>
              </div>
              <div class="hero__visual-label hero__visual-label--bottom">
                <span>Réflexion contrôlée</span>
                <span aria-hidden="true">—</span>
                <span>Finition restaurée</span>
              </div>
            </div>
          </div>
          <div class="hero__rail" aria-hidden="true">
            <span>Surface / geste / confiance</span>
            <span>↓</span>
          </div>
        </section>

        <section
          id="atelier"
          class="atelier section-light"
          aria-labelledby="atelier-title"
        >
          <div class="container atelier__grid">
            <div class="section-marker">
              <span>02</span>
              <span>À propos</span>
            </div>
            <div class="atelier__image-wrap">
              {/* Historical archive kept in public for a stable static fallback. */}
              {/* eslint-disable qwik/jsx-img */}
              <img
                src="/images/cars-pat/atelier-porsche.webp"
                alt="Deux Porsche dans l’atelier Cars Pat"
                width="1200"
                height="900"
                loading="lazy"
              />
              {/* eslint-enable qwik/jsx-img */}
              <span class="image-stamp">Archive Cars Pat</span>
            </div>
            <div class="atelier__copy">
              <p class="kicker kicker--dark">L’atelier avant le discours</p>
              <h2 id="atelier-title">
                Du dommage
                <br />
                <em>à la finition.</em>
              </h2>
              <p>
                Cars Pat accompagne les automobilistes à Mazargues pour les
                travaux de carrosserie et de peinture automobile affichés par
                l’atelier.
              </p>
              <p>
                Chaque véhicule arrive avec son histoire. La bonne réponse ne se
                résume pas à une formule : elle se précise devant la pièce, la
                lumière et les photos du dommage.
              </p>
              <a class="text-link text-link--dark" href="#contact">
                Rencontrer l’atelier <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section
          id="services"
          class="services section-dark"
          aria-labelledby="services-title"
        >
          <div class="container">
            <div class="section-heading section-heading--wide">
              <div class="section-marker section-marker--light">
                <span>03</span>
                <span>Le geste</span>
              </div>
              <div>
                <p class="kicker">Prestations</p>
                <h2 id="services-title">
                  Cinq façons de
                  <br />
                  <em>reprendre la route.</em>
                </h2>
              </div>
              <p class="section-heading__aside">
                Les prestations ci-dessous sont celles affichées sur le site
                actuel. Les conditions commerciales marquées d’un astérisque
                sont à confirmer avec Cars Pat.
              </p>
            </div>

            <div class="services__layout">
              <p class="services__note">
                <span>Atelier / 09</span>
                Une première lecture de votre besoin, avant toute promesse.
              </p>
              <ol class="service-list">
                {SERVICES.map((service) => (
                  <li
                    class={`service-row service-row--${service.tone}`}
                    key={service.number}
                  >
                    <span class="service-row__number">{service.number}</span>
                    <div class="service-row__main">
                      <h3>{service.title}</h3>
                      <p>{service.intro}</p>
                    </div>
                    <div class="service-row__detail">
                      <p>{service.description}</p>
                      <span>{service.note}</span>
                    </div>
                    <span class="service-row__arrow" aria-hidden="true">
                      ↗
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section
          id="archives"
          class="archives section-light"
          aria-labelledby="archives-title"
        >
          <div class="container">
            <div class="section-heading section-heading--archives">
              <div class="section-marker section-marker--dark">
                <span>04</span>
                <span>La matière</span>
              </div>
              <div>
                <p class="kicker kicker--dark">Archives photographiques</p>
                <h2 id="archives-title">
                  Les traces
                  <br />
                  <em>du geste.</em>
                </h2>
              </div>
              <p class="section-heading__aside section-heading__aside--dark">
                Une sélection issue du dépôt historique Cars Pat. Ces images
                sont conservées comme archives et leur statut actuel doit être
                confirmé avant publication définitive.
              </p>
            </div>

            <div class="archive-grid">
              {ARCHIVES.map((archive, index) => (
                <figure
                  class={`archive-figure ${archive.className}`}
                  key={archive.title}
                >
                  {archive.afterImage ? (
                    <div class="archive-split">
                      <div>
                        <img
                          src={archive.image}
                          alt={archive.alt}
                          width={archive.width}
                          height={archive.height}
                          loading="lazy"
                        />
                        <span>Avant / processus</span>
                      </div>
                      <div>
                        <img
                          src={archive.afterImage}
                          alt={archive.afterAlt}
                          width={archive.width}
                          height={archive.height}
                          loading="lazy"
                        />
                        <span>Après / finition</span>
                      </div>
                    </div>
                  ) : (
                    <div class="archive-image-wrap">
                      <img
                        src={archive.image}
                        alt={archive.alt}
                        width={archive.width}
                        height={archive.height}
                        loading="lazy"
                      />
                      <span class="image-stamp image-stamp--light">
                        01 / façade
                      </span>
                    </div>
                  )}
                  <figcaption>
                    <span>
                      {String(index + 1).padStart(2, "0")} · {archive.label}
                    </span>
                    <strong>{archive.title}</strong>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          id="avis"
          class="trust section-dark"
          aria-labelledby="trust-title"
        >
          <div class="container trust__grid">
            <div class="section-marker section-marker--light">
              <span>05</span>
              <span>La confiance</span>
            </div>
            <div class="trust__copy">
              <p class="kicker">Avis Google</p>
              <h2 id="trust-title">
                Le travail se voit.
                <br />
                <em>La confiance se partage.</em>
              </h2>
              <p>
                La production actuelle affiche une note et un volume d’avis
                Google vérifiables depuis sa fiche publique. Nous gardons ici
                l’information source, sans inventer de témoignage.
              </p>
            </div>
            <div
              class="trust__rating"
              aria-label={`${REVIEW_SNAPSHOT.rating} sur 5, ${REVIEW_SNAPSHOT.count} avis Google`}
            >
              <span class="trust__rating-number">{REVIEW_SNAPSHOT.rating}</span>
              <span class="trust__rating-denom">/ 5</span>
              <span class="trust__stars" aria-hidden="true">
                ★★★★★
              </span>
              <span class="trust__rating-count">
                {REVIEW_SNAPSHOT.count} avis Google
              </span>
              <small>{REVIEW_SNAPSHOT.checkedAt}.</small>
            </div>
            <a
              class="button button--outline-light"
              href={REVIEW_SNAPSHOT.href}
              target="_blank"
              rel="noreferrer"
            >
              Lire les avis <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section
          id="devis"
          class="quote section-light"
          aria-labelledby="quote-title"
        >
          <div class="container quote__grid">
            <div class="quote__intro">
              <div class="section-marker section-marker--dark">
                <span>06</span>
                <span>Premier regard</span>
              </div>
              <p class="kicker kicker--dark">Demande de devis</p>
              <h2 id="quote-title">
                Un choc,
                <br />
                <em>une photo.</em>
              </h2>
              <p>
                Préparez votre demande en quelques lignes. Les photos aident
                l’atelier à comprendre le dommage avant un échange direct.
              </p>
              <ol class="quote-steps">
                <li>
                  <span>01</span> Décrivez le véhicule et le dommage.
                </li>
                <li>
                  <span>02</span> Ajoutez jusqu’à 9 photos utiles.
                </li>
                <li>
                  <span>03</span> L’atelier pourra préciser la suite.
                </li>
              </ol>
              <p class="quote__fine-print">
                Prototype local : aucune donnée n’est envoyée depuis cette
                version.
              </p>
            </div>

            <form
              class="quote-form"
              onSubmit$={handleSubmit}
              preventdefault:submit
            >
              <div class="quote-form__topline">
                <span>Formulaire / 01</span>
                <span>Réponse à préparer</span>
              </div>
              <div class="form-grid">
                <label>
                  <span>
                    Nom et prénom <b>*</b>
                  </span>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Votre nom"
                  />
                </label>
                <label>
                  <span>
                    Email <b>*</b>
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="vous@exemple.fr"
                  />
                </label>
                <label>
                  <span>
                    Téléphone <b>*</b>
                  </span>
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="06 00 00 00 00"
                  />
                </label>
                <label>
                  <span>Immatriculation</span>
                  <input
                    name="registration"
                    type="text"
                    placeholder="AA-123-AA"
                  />
                </label>
                <label class="form-grid__full">
                  <span>
                    Votre message <b>*</b>
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Décrivez le dommage ou votre besoin..."
                  />
                </label>
                <label class="file-drop form-grid__full">
                  <span class="file-drop__label">Photos du véhicule</span>
                  <input
                    name="photos"
                    type="file"
                    accept="image/jpeg,image/png,image/gif,image/webp"
                    multiple
                    onChange$={handlePhotos}
                  />
                  <span class="file-drop__action">
                    Choisir des photos <b>+</b>
                  </span>
                  <small>
                    JPG, PNG, GIF ou WEBP · {QUOTE_FORM_LIMITS.maxFileSizeMb} Mo
                    max · {QUOTE_FORM_LIMITS.maxFiles} fichiers max
                  </small>
                </label>
              </div>
              <p class="form-feedback" aria-live="polite">
                {fileFeedback.value}
              </p>
              <label class="consent">
                <input name="consent" type="checkbox" required />
                <span>
                  J’accepte que les informations saisies servent uniquement à
                  préparer cette demande de contact. <b>*</b>
                </span>
              </label>
              <button class="button button--dark" type="submit">
                Valider la demande <span aria-hidden="true">↗</span>
              </button>
              <p
                class="form-feedback form-feedback--success"
                aria-live="polite"
              >
                {submissionFeedback.value}
              </p>
            </form>
          </div>
        </section>

        <section
          id="contact"
          class="contact section-dark"
          aria-labelledby="contact-title"
        >
          <div class="container">
            <div class="section-heading section-heading--contact">
              <div class="section-marker section-marker--light">
                <span>07</span>
                <span>Sur place</span>
              </div>
              <div>
                <p class="kicker">Coordonnées</p>
                <h2 id="contact-title">
                  On se retrouve
                  <br />
                  <em>à Mazargues.</em>
                </h2>
              </div>
            </div>

            <div class="contact__grid">
              <address class="contact-details">
                <div class="contact-details__item">
                  <span>Adresse</span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=1%20Rue%20Denis%20Magdelon%2013009%20Marseille"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {CONTACT.address}
                    <br />
                    {CONTACT.postalCode} <span aria-hidden="true">↗</span>
                  </a>
                </div>
                <div class="contact-details__item">
                  <span>Téléphone</span>
                  <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>
                  <a href={`tel:${CONTACT.mobileHref}`}>{CONTACT.mobile}</a>
                </div>
                <div class="contact-details__item">
                  <span>E-mail</span>
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </div>
                <div class="contact-details__item">
                  <span>Horaires affichés</span>
                  <p>{CONTACT.hours}</p>
                </div>
              </address>

              <div class="contact-map" aria-label="Repère Cars Pat à Mazargues">
                <div class="contact-map__grid" aria-hidden="true" />
                <div class="contact-map__pin" aria-hidden="true">
                  <span>CP</span>
                </div>
                <div class="contact-map__label">
                  <span>43°14′54″ N / 5°24′03″ E</span>
                  <strong>Cars Pat · Mazargues</strong>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=1%20Rue%20Denis%20Magdelon%2013009%20Marseille"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ouvrir l’itinéraire <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer class="site-footer">
        <div class="container site-footer__top">
          <a
            class="brand brand--footer"
            href="#home"
            aria-label="Cars Pat, retour en haut"
          >
            <span class="brand__mark" aria-hidden="true">
              CP
            </span>
            <span class="brand__name">
              Cars <em>Pat</em>
            </span>
          </a>
          <p class="site-footer__statement">
            Réparer la ligne.
            <br />
            Rendre la lumière.
          </p>
          <a class="button button--bright" href="#devis">
            Votre projet <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div class="container site-footer__bottom">
          <p>© Cars Pat · Marseille / Mazargues</p>
          <div class="site-footer__links">
            {SOCIAL_LINKS.map((social) => (
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                key={social.label}
              >
                {social.label}
              </a>
            ))}
            <a href="/mentions-legales/">Mentions légales</a>
          </div>
          <p class="site-footer__note">
            Version de travail · contenus à confirmer avant mise en ligne.
          </p>
        </div>
      </footer>
    </>
  );
});

export const head: DocumentHead = {
  title: "Cars Pat — Carrosserie et peinture à Marseille Mazargues",
  meta: [
    {
      name: "description",
      content:
        "Cars Pat, atelier de carrosserie et de peinture automobile à Mazargues, Marseille. Prestations, archives, demande de devis et coordonnées.",
    },
    { name: "theme-color", content: "#0d1113" },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "fr_FR" },
    {
      property: "og:title",
      content: "Cars Pat — Carrosserie et peinture à Marseille Mazargues",
    },
    {
      property: "og:description",
      content:
        "Un atelier local pour retrouver une ligne juste et une finition profonde.",
    },
    { property: "og:url", content: SITE_URL },
    {
      property: "og:image",
      content: `${SITE_URL}/images/cars-pat/facade-cars-pat.webp`,
    },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Cars Pat — Carrosserie et peinture à Marseille Mazargues",
    },
    {
      name: "twitter:description",
      content:
        "Un atelier local pour retrouver une ligne juste et une finition profonde.",
    },
    {
      name: "twitter:image",
      content: `${SITE_URL}/images/cars-pat/facade-cars-pat.webp`,
    },
  ],
  links: [{ rel: "canonical", href: SITE_URL }],
  scripts: [
    {
      props: { type: "application/ld+json" },
      script: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AutoBodyShop",
        name: "Cars Pat",
        url: SITE_URL,
        email: `mailto:${CONTACT.email}`,
        telephone: CONTACT.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: CONTACT.address,
          postalCode: "13009",
          addressLocality: "Marseille",
          addressCountry: "FR",
        },
        areaServed: "Marseille",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "12:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "14:00",
            closes: "18:30",
          },
        ],
        sameAs: SOCIAL_LINKS.map((social) => social.href),
      }),
    },
  ],
};
