const files = import.meta.glob("../contents/projects/*.json", {
  eager: true, // charge immédiatement tous les fichiers
  import: "default", // récupère le contenu directement
});

// Convertir en tableau de projets
export const project = Object.values(files).map((file) => {
  const slug = file.meta.title.split(" ").join("-").toLowerCase();
  return { ...file, slug };
});
