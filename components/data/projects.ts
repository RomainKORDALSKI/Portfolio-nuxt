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
    title: "Portfolio",
    description:
      "Mon premier portfolio réalisé en React et Sass, conçu au début de ma formation chez O’clock. Ce projet m'a permis de me familiariser avec la gestion de composants React et le stylisme avancé avec Sass, tout en créant une interface responsive et moderne pour présenter mes compétences et réalisations.",
    taches:
      "Front-end avec React, intégration CSS avec Sass, gestion des composants, conception responsive",
    imageUrl: "/images/projets/portfolio.png",
    siteUrl: "https://romainkordalski.netlify.app/",
    githubUrl: "https://github.com/username/project1",
  },
  {
    id: 2,
    title: "Bradenor",
    description: `Bradenor est un projet personnel en cours de développement, conçu pour approfondir mes compétences en Next.js. Il permet aux utilisateurs de créer et de poster des événements de braderie, ainsi que de rechercher des braderies par localisation ou à l'aide d'une carte interactive. Ce projet me permet de mettre en pratique diverses fonctionnalités de Next.js, tout en intégrant des aspects de géolocalisation et de gestion d'événements.`,
    taches:
      "Développement frontend avec Next.js, géolocalisation, création et gestion d'événements, intégration d'une carte interactive",
    imageUrl: "/images/projets/bradenor.png",
    siteUrl: "/images/projets/bradenorvideo.mov",
    githubUrl: "https://github.com/RomainKORDALSKI/PokeReact",
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
    title: "Ocoffee",
    description: `Pour le projet Ocoffee, j'ai développé une boutique de café en ligne en utilisant Node.js et Express.js pour le côté serveur. PostgreSQL a été utilisé comme base de données. J'ai intégré des fonctionnalités dynamiques telles que l'ajout au panier, la modification des quantités et la suppression des articles. Le projet a également mis en œuvre des fonctionnalités de sécurité telles que le chiffrement des mots de passe et la gestion des sessions utilisateur. L'interface utilisateur a été améliorée grâce à l'utilisation de SASS pour le stylisme, offrant ainsi une expérience utilisateur agréable et moderne.`,
    taches: "Développement frontend et backend, intégration, sécurité",
    imageUrl: "/images/projets/ocoffe.png",
    siteUrl: "/images/projets/ocoffee.mov",
    githubUrl: "https://github.com/RomainKORDALSKI/PokeReact",
  },
];

export default projects;
