import { component$ } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import "./global.css";

export default component$(() => (
  <QwikCityProvider>
    <head>
      <meta charSet="utf-8" />
      <meta name="theme-color" content="#0d1113" />
      <RouterHead />
    </head>
    <body lang="fr">
      <RouterOutlet />
    </body>
  </QwikCityProvider>
));
