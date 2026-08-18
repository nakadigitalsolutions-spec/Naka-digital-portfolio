# NAKA — Portfolio de Moussa Yahouza Hambalé

Portfolio personnel professionnel construit avec React et Vite.

## Stack

- React 19
- Vite 8
- CSS personnalisé sans bibliothèque UI externe
- SVG intégrés pour les icônes et les visuels

## Démarrer le projet

```bash
npm install
npm run dev
```

Le serveur de développement écoute sur `0.0.0.0` afin de fonctionner dans un environnement de preview.

## Vérifier la production

```bash
npm run build
npm run preview
```

## Personnalisation avant mise en ligne

Les informations suivantes sont centralisées dans `src/data/content.js` :

- adresse email ;
- téléphone ;
- ville ;
- établissement de formation ;
- lien GitHub ;
- lien LinkedIn ;
- fichier CV ;
- projets, technologies, statuts et liens.

Les fiches projet marquées « à personnaliser » sont des structures éditoriales. Elles ne présentent pas de réalisation terminée comme un fait établi.

Le formulaire de contact prépare un email via `mailto:`. Pour un envoi sans application email côté visiteur, il faudra brancher ultérieurement un service de formulaire ou une API.

## Déploiement

Le dossier généré par `npm run build` est `dist/`. Il peut être déployé sur Vercel, Netlify, GitHub Pages ou tout hébergement statique compatible avec une SPA Vite.

## GitHub Pages

Le workflow `.github/workflows/deploy-pages.yml` publie automatiquement `dist/` sur GitHub Pages à chaque push sur `main`. La configuration Vite détecte automatiquement le nom du dépôt dans `GITHUB_REPOSITORY` pour construire le bon chemin d’assets sur une URL de type `utilisateur.github.io/nom-du-depot/`.
