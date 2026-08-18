export const profile = {
  brand: 'NAKA',
  name: 'Moussa Yahouza Hambalé',
  role: 'Développeur web · systèmes d’information',
  shortRole: 'Web · Data · Systèmes',
  tagline: 'Je conçois des outils numériques qui donnent de la structure aux idées et de la vitesse aux métiers.',
  email: 'moussa.yahouza@exemple.com',
  phone: '+227 XX XX XX XX',
  location: '[Ville à préciser]',
  cvUrl: null,
  githubUrl: null,
  linkedinUrl: null,
}

export const navItems = [
  { id: 'about', label: 'À propos' },
  { id: 'skills', label: 'Compétences' },
  { id: 'projects', label: 'Projets' },
  { id: 'services', label: 'Services' },
  { id: 'journey', label: 'Parcours' },
]

export const proofPoints = [
  { label: 'Formation', value: 'Informatique de Gestion', code: '01' },
  { label: 'Domaines', value: 'Web · Data · SI', code: '02' },
  { label: 'Approche', value: 'Clarté · Structure · Usage', code: '03' },
]

export const aboutFacts = [
  { label: 'Identité', value: 'NAKA — marque personnelle' },
  { label: 'Formation', value: 'Informatique de Gestion' },
  { label: 'Focus', value: 'Développement web, bases de données et solutions numériques' },
]

export const skillGroups = [
  {
    id: 'build',
    label: 'Construire',
    eyebrow: 'Développement',
    title: 'Passer d’un besoin à une interface utilisable.',
    intro: 'Un ensemble de technologies pour structurer une expérience web claire, responsive et maintenable.',
    skills: [
      { name: 'Interfaces web', note: 'HTML, CSS, JavaScript', description: 'Structurer des pages et des interactions compréhensibles sur mobile comme sur desktop.', tags: ['HTML', 'CSS', 'JavaScript'], output: 'Interface responsive' },
      { name: 'Applications web', note: 'PHP, Laravel, Django', description: 'Relier les parcours utilisateurs à une logique serveur et à des fonctionnalités métier.', tags: ['PHP', 'Laravel', 'Django'], output: 'Logique applicative' },
    ],
  },
  {
    id: 'data',
    label: 'Structurer',
    eyebrow: 'Données & SI',
    title: 'Donner une structure fiable à l’information.',
    intro: 'La donnée n’est utile que lorsqu’elle est organisée, accessible et reliée aux décisions du quotidien.',
    skills: [
      { name: 'Bases de données', note: 'MySQL, Microsoft Access', description: 'Organiser les informations, les relations et les opérations nécessaires à un outil métier.', tags: ['MySQL', 'Access'], output: 'Modèle de données' },
      { name: 'Analyse des systèmes', note: 'MERISE & conception', description: 'Clarifier les besoins et traduire les flux métier en structures compréhensibles.', tags: ['MERISE', 'SI'], output: 'Schéma fonctionnel' },
    ],
  },
  {
    id: 'deliver',
    label: 'Livrer',
    eyebrow: 'Méthode & outils',
    title: 'Garder le projet lisible du premier fichier au dernier échange.',
    intro: 'Les bons outils servent la collaboration, la transmission et la capacité à faire évoluer une solution.',
    skills: [
      { name: 'Versionner', note: 'Git & GitHub', description: 'Garder une trace claire des changements et préparer un travail collaboratif.', tags: ['Git', 'GitHub'], output: 'Historique propre' },
      { name: 'Documenter', note: 'Analyse & transmission', description: 'Rendre les choix, les étapes et les prochaines actions compréhensibles.', tags: ['Besoin', 'Documentation'], output: 'Projet transmissible' },
    ],
  },
]

export const projects = [
  {
    number: '01',
    title: 'Système de gestion commerciale',
    category: 'development',
    categoryLabel: 'Application web',
    shortDescription: 'Une base de travail pour suivre clients, ventes, stocks et indicateurs au même endroit.',
    problem: 'Les informations commerciales sont dispersées entre plusieurs supports, ce qui ralentit le suivi et la prise de décision.',
    solution: 'Concevoir une application web centralisée avec une logique métier claire et une base de données structurée.',
    features: ['Gestion des clients', 'Suivi des ventes', 'Gestion des stocks', 'Tableau de bord indicateurs'],
    technologies: ['Laravel', 'MySQL', 'JavaScript'],
    stack: 'Laravel · MySQL · JavaScript',
    status: 'Étude de cas à compléter',
    statusTone: 'draft',
    links: { demo: null, code: null },
    visual: 'dashboard',
    placeholder: true,
  },
  {
    number: '02',
    title: 'Modèle de données métier',
    category: 'data',
    categoryLabel: 'Bases de données',
    shortDescription: 'De l’analyse des besoins à un modèle de données compréhensible et exploitable.',
    problem: 'Un outil métier devient fragile lorsque les données, les relations et les règles ne sont pas définies avant la réalisation.',
    solution: 'Passer par l’analyse et la modélisation pour poser une structure cohérente avant le développement.',
    features: ['Recueil des besoins', 'Modèle conceptuel', 'Relations entre entités', 'Préparation des requêtes'],
    technologies: ['MERISE', 'MySQL', 'Microsoft Access'],
    stack: 'MERISE · MySQL · Access',
    status: 'Étude de cas à compléter',
    statusTone: 'draft',
    links: { demo: null, code: null },
    visual: 'database',
    placeholder: true,
  },
  {
    number: '03',
    title: 'Portail de services numériques',
    category: 'development',
    categoryLabel: 'Expérience web',
    shortDescription: 'Un parcours simple pour rendre une offre de services plus claire et plus accessible.',
    problem: 'Une offre peut perdre de sa valeur lorsque le visiteur ne comprend pas rapidement quoi faire ensuite.',
    solution: 'Hiérarchiser l’information, clarifier les parcours et construire une interface qui guide sans surcharger.',
    features: ['Architecture de contenu', 'Parcours responsive', 'Sections orientées action', 'Interface accessible'],
    technologies: ['Django', 'HTML', 'CSS'],
    stack: 'Django · HTML · CSS',
    status: 'Étude de cas à compléter',
    statusTone: 'draft',
    links: { demo: null, code: null },
    visual: 'portal',
    placeholder: true,
  },
  {
    number: '04',
    title: 'Outil métier sur mesure',
    category: 'strategy',
    categoryLabel: 'Solution numérique',
    shortDescription: 'Une interface pensée autour des usages réels, avec la place pour grandir avec l’équipe.',
    problem: 'Les outils génériques ne correspondent pas toujours aux processus, au vocabulaire ou au niveau de maturité d’une équipe.',
    solution: 'Cadrer le besoin, simplifier le processus et traduire les étapes clés en un outil lisible.',
    features: ['Cadrage du besoin', 'Parcours utilisateur', 'Prototype fonctionnel', 'Base pour itération'],
    technologies: ['Analyse', 'UI', 'Automatisation'],
    stack: 'Analyse · UI · Automatisation',
    status: 'Structure à personnaliser',
    statusTone: 'draft',
    links: { demo: null, code: null },
    visual: 'workflow',
    placeholder: true,
  },
]

export const services = [
  {
    number: '01',
    title: 'Développement web',
    description: 'Créer une présence web ou un outil applicatif propre, responsive et adapté à un objectif concret.',
    deliverables: ['Site vitrine', 'Interface responsive', 'Application web', 'Intégration front-end'],
    idealFor: 'Entrepreneurs, associations et petites équipes qui veulent une base web claire.',
    icon: 'code',
  },
  {
    number: '02',
    title: 'Bases de données & SI',
    description: 'Analyser, modéliser et organiser les informations pour rendre un processus plus fiable.',
    deliverables: ['Analyse du besoin', 'Modèle MERISE', 'Schéma de données', 'Outil Access / MySQL'],
    idealFor: 'Structures qui veulent mieux comprendre et exploiter leurs données métier.',
    icon: 'database',
  },
  {
    number: '03',
    title: 'Cadrage de solution',
    description: 'Transformer une idée ou une difficulté opérationnelle en plan de solution compréhensible.',
    deliverables: ['Cadrage fonctionnel', 'Parcours utilisateur', 'Prototype d’interface', 'Plan de réalisation'],
    idealFor: 'Porteurs de projet qui ont besoin de clarifier avant de développer.',
    icon: 'sparkles',
  },
]

export const journey = [
  {
    date: 'Formation',
    title: 'Informatique de Gestion',
    place: '[Établissement à préciser]',
    description: 'Un parcours à la croisée du développement, des systèmes d’information, de la gestion et de la donnée.',
    icon: 'graduation',
  },
  {
    date: 'Domaines',
    title: 'Web, bases de données & solutions numériques',
    place: 'Compétences à présenter par cas concrets',
    description: 'Une orientation qui relie la construction d’interfaces, la logique applicative et l’organisation de l’information.',
    icon: 'layers',
  },
  {
    date: 'Identité',
    title: 'NAKA',
    place: 'Marque personnelle et espace de présentation',
    description: 'Un cadre pour présenter une pratique numérique sérieuse, documenter les réalisations et faciliter le contact.',
    icon: 'arrowUpRight',
  },
]

export const projectFilters = [
  { id: 'all', label: 'Tous les projets' },
  { id: 'development', label: 'Développement' },
  { id: 'data', label: 'Données & SI' },
  { id: 'strategy', label: 'Solutions' },
]
