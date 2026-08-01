export const SITE_URL = "https://www.cars-pat.fr";

export const CONTACT = {
  email: "carrosse-pat@hotmail.fr",
  phone: "04 91 40 28 01",
  phoneHref: "+33491402801",
  mobile: "06 15 61 49 14",
  mobileHref: "+33615614914",
  address: "1 rue Denis Magdelon",
  postalCode: "13009 Marseille",
  hours: "Lundi à vendredi · 08h00–12h00 · 14h00–18h30",
} as const;

export const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100057464648961",
    shortLabel: "fb",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@cars_pat",
    shortLabel: "tt",
  },
] as const;

export const SERVICES = [
  {
    number: "01",
    title: "Carrosserie",
    intro: "Remettre une ligne juste là où le choc l’a interrompue.",
    description:
      "Un travail de remise en forme et de finition guidé par l’état réel de la carrosserie.",
    note: "Prestation affichée en production",
    tone: "warm",
  },
  {
    number: "02",
    title: "Peinture automobile",
    intro: "Retrouver une profondeur, une nuance, un reflet.",
    description:
      "La couleur se juge dans la lumière : préparation, accord visuel et restitution de la surface.",
    note: "Prestation affichée en production",
    tone: "cool",
  },
  {
    number: "03",
    title: "Pare-brise",
    intro: "Remplacement de pare-brise annoncé par l’atelier.",
    description:
      "Le détail des réparations possibles, des références et de la prise en charge reste à confirmer.",
    note: "Périmètre à confirmer",
    tone: "glass",
  },
  {
    number: "04",
    title: "Franchise",
    intro: "Une prise en charge de franchise est annoncée sur le site actuel.*",
    description:
      "Les assureurs concernés, montants et conditions commerciales doivent être validés avant publication.",
    note: "Information commerciale à confirmer",
    tone: "metal",
  },
  {
    number: "05",
    title: "Véhicule de prêt",
    intro: "Un prêt de véhicule est annoncé sur le site actuel.*",
    description:
      "La disponibilité, la durée et les conditions de mise à disposition restent à confirmer.",
    note: "Information commerciale à confirmer",
    tone: "dark",
  },
] as const;

type Archive = {
  title: string;
  label: string;
  image: string;
  afterImage?: string;
  alt: string;
  afterAlt?: string;
  width: number;
  height: number;
  className: string;
};

export const ARCHIVES: Archive[] = [
  {
    title: "La façade, dans sa lumière réelle",
    label: "Archive · Cars Pat",
    image: "/images/cars-pat/facade-cars-pat.webp",
    alt: "Porsche rouge devant la façade Cars Pat à Marseille",
    width: 1200,
    height: 1123,
    className: "archive-feature",
  },
  {
    title: "Avant / après · Mercedes",
    label: "Archive historique · à confirmer",
    image: "/images/cars-pat/mercedes-arriere-endommage.webp",
    afterImage: "/images/cars-pat/mercedes-arriere-restaure.webp",
    alt: "Arrière de Mercedes endommagé, image d’archive",
    afterAlt: "Arrière de Mercedes restauré, image d’archive",
    width: 577,
    height: 433,
    className: "archive-before-after",
  },
  {
    title: "Peinture · Peugeot 504",
    label: "Archive historique · à confirmer",
    image: "/images/cars-pat/peugeot-504-en-peinture.webp",
    afterImage: "/images/cars-pat/peugeot-504-finition.webp",
    alt: "Peugeot 504 en cours de peinture, image d’archive",
    afterAlt: "Peugeot 504 terminée, image d’archive",
    width: 577,
    height: 433,
    className: "archive-process",
  },
] as const;

export const REVIEW_SNAPSHOT = {
  rating: "4,7",
  count: "40",
  checkedAt: "visible sur le site en production le 1er août 2026",
  href: "https://www.google.fr/maps/place/Cars+Pat/@43.2483415,5.3982268,17z/data=!4m8!3m7!1s0x12c9b884f41d09d5:0x967b25d3c34e14c3!8m2!3d43.2483415!4d5.4008017!9m1!1b1!16s%2Fg%2F1tf20zt9?entry=ttu",
} as const;

export const QUOTE_FORM_LIMITS = {
  maxFiles: 9,
  maxFileSizeMb: 32,
  acceptedTypes: ["image/jpeg", "image/png", "image/gif", "image/webp"],
} as const;
