export default defineAppConfig({
  profilePicture: "/images/image2.jpeg",
  footerName: "Romain Kordalski",
  openGraphImage: "https://canvas.hrcd.fr/social-preview.jpg",
  socials: {
    github: "https://github.com/RomainKORDALSKI",
    linkedin: "https://www.linkedin.com/in/romain-kordalski/",
  },
  ui: {
    primary: "emerald",
    gray: "zinc",
    notifications: {
      position: "top-0 bottom-auto",
    },
    notification: {
      progress: {
        base: "absolute bottom-0 end-0 start-0 h-0",
        background: "bg-transparent dark:bg-transparent",
      },
    },
    input: {
      variant: {
        none: "bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out",
      },
    },
    textarea: {
      variant: {
        none: "bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out",
      },
    },
  },
});
