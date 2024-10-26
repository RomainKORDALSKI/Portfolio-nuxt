export interface Project {
  id: number;
  title: string;
  description: string;
  taches: string;
  imageUrl: string;
  siteUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "DigitalCraft",
    description:
      "Site web pour mon autoentreprise en développement web freelance, conçu avec Next.js. Inclut un SEO optimisé, un pipeline CI/CD pour déploiement continu, et un design moderne en Tailwind CSS.",
    taches:
      "Développement complet, optimisation SEO, mise en place CI/CD, design Tailwind CSS",
    imageUrl: "/images/projets/digitalcraft.png",
    siteUrl: "https://digitalcraft-web.com/",
    githubUrl: "URL vers le dépôt GitHub du projet",
  },
  {
    id: 2,
    title: "LaPince",
    description:
      "Application complète de gestion de budget bancaire avec authentification, notifications, et CRUD complet. Utilisation de React, Node.js, Express, et PostgreSQL.",
    taches:
      "Développement frontend et backend, gestion des notifications, sécurité",
    imageUrl: "/images/projets/lapince.png",
    siteUrl: "https://lapinceapi.vercel.app/",
    githubUrl: "URL vers le dépôt GitHub du projet",
  },
  {
    id: 3,
    title: "CV Interactif",
    description:
      "Site web interactif permettant de présenter mon CV et ma lettre de motivation de manière dynamique. Utilisation de Next.js, Tailwind pour le design responsive, et intégration d'animation.",
    taches: "Conception et développement frontend, intégration d'animations",
    imageUrl: "/images/projets/cvinteractif.png",
    siteUrl: "https://cv-kordalski-interactif.vercel.app/",
    githubUrl: "URL vers le dépôt GitHub du projet",
  },
  {
    id: 4,
    title: "Bradenor",
    description:
      "Projet de braderie en Next.js avec création d'événements et géolocalisation. Permet de poster et rechercher des événements sur une carte interactive.",
    taches:
      "Développement frontend, gestion d'événements, intégration de carte",
    imageUrl: "/images/projets/bradenor.png",
    siteUrl: "https://bradenor-next.vercel.app",
    githubUrl: "https://github.com/RomainKORDALSKI/PokeReact",
  },
  {
    id: 8,
    title: "Portfolio Nuxt",
    description:
      "Mon nouveau portfolio, construit avec Nuxt.js et Tailwind CSS. J'ai utilisé Nuxt.js pour la gestion du rendu côté serveur et Tailwind CSS pour un design adaptable et élégant. Ce portfolio reflète mes compétences en intégration, en design, et en développement avec des technologies actuelles.",
    taches:
      "Développement frontend avec Nuxt.js, design responsive avec Tailwind CSS, intégration des meilleures pratiques",
    imageUrl: "/images/projets/portfolionuxt.png",
    siteUrl: "https://romainkordalski.vercel.app/",
    githubUrl: "https://github.com/RomainKORDALSKI/PokeReact",
  },
  {
    id: 6,
    title: "PokéReact",
    description:
      "PokéReact est mon premier projet en React, un Pokedex interactif développé avec l'API Pokémon. J'ai utilisé React pour gérer l'affichage dynamique des données, tout en intégrant Sass pour le stylisme. Ce projet m'a permis de renforcer mes compétences en développement frontend et d'explorer la gestion des appels API pour récupérer et afficher des informations en temps réel.",
    taches:
      "Front-end avec React, gestion d'API (Pokémon), intégration avec Sass, affichage dynamique des données",
    imageUrl: "/images/projets/pokereact.png",
    siteUrl: "https://pokereactrk.netlify.app/",
    githubUrl: "https://github.com/RomainKORDALSKI/PokeReact",
  },
  {
    id: 7,
    title: "Cinéscope",
    description:
      "Cinéscope est une application développée avec Nuxt.js qui permet aux utilisateurs de rechercher des films, de consulter leurs descriptions détaillées et de visionner les bandes-annonces. Ce projet utilise l'API The Movie Database (TMDb) pour récupérer des informations sur les films et les afficher de manière interactive. Ce projet m'a permis de perfectionner mes compétences en développement avec Nuxt.js et de travailler avec des APIs externes pour fournir des contenus dynamiques.",
    taches:
      "Développement frontend avec Nuxt.js, intégration de l'API TMDb, affichage dynamique des films et des bandes-annonces, utilisation de tailwind pour le stylisme",
    imageUrl: "/images/projets/cinescope.png",
    siteUrl: "https://nuxt-movie-app-eight.vercel.app/",
    githubUrl: "https://github.com/RomainKORDALSKI/PokeReact",
  },
  {
    id: 9,
    title: "Portfolio",
    description:
      "Mon premier portfolio réalisé en React et Sass. Conçu pour présenter mes compétences et réalisations avec une interface moderne et responsive.",
    taches:
      "Développement frontend, intégration CSS avec Sass, conception responsive",
    imageUrl: "/images/projets/portfolio.png",
    siteUrl: "https://romainkordalski.netlify.app/",
    githubUrl: "https://github.com/username/project1",
  },
  {
    id: 5,
    title: "Ocoffee",
    description: `Pour le projet Ocoffee, j'ai développé une boutique de café en ligne en utilisant Node.js et Express.js pour le côté serveur. PostgreSQL a été utilisé comme base de données. J'ai intégré des fonctionnalités dynamiques telles que l'ajout au panier, la modification des quantités et la suppression des articles. Le projet a également mis en œuvre des fonctionnalités de sécurité telles que le chiffrement des mots de passe et la gestion des sessions utilisateur. L'interface utilisateur a été améliorée grâce à l'utilisation de SASS pour le stylisme, offrant ainsi une expérience utilisateur agréable et moderne.`,
    taches: "Développement frontend et backend, intégration, sécurité",
    imageUrl: "/images/projets/ocoffe.png",
    siteUrl: "/images/projets/ocoffee.mov",
    githubUrl: "https://github.com/RomainKORDALSKI/PokeReact",
  },
];

export default projects;
