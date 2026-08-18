import { useCallback, useEffect, useMemo, useState } from 'react'
import Icon from './components/Icon.jsx'
import ContactForm from './components/ContactForm.jsx'
import ProjectDetailsModal from './components/ProjectDetailsModal.jsx'
import Reveal from './components/Reveal.jsx'
import SectionHeading from './components/SectionHeading.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import SkillList from './components/SkillList.jsx'
import {
  aboutFacts,
  journey,
  navItems,
  profile,
  projectFilters,
  projects,
  proofPoints,
  services,
  skillGroups,
} from './data/content.js'

const sectionIds = ['home', ...navItems.map((item) => item.id), 'contact']

function Logo() {
  return (
    <a className="brand-lockup" href="#home" aria-label="NAKA — retour à l'accueil">
      <span className="brand-symbol">N</span>
      <span className="brand-name">NAKA<span className="brand-code"> / MYH</span></span>
    </a>
  )
}

function OptionalProfileLink({ href, label, icon }) {
  if (!href) return <span className="profile-link profile-link-disabled"><Icon name={icon} size={14} /> {label} <small>à ajouter</small></span>
  return <a className="profile-link" href={href} target="_blank" rel="noreferrer"><Icon name={icon} size={14} /> {label} <Icon name="external" size={12} /></a>
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSkill, setActiveSkill] = useState(skillGroups[0].id)
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 20)
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0)
    }

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveSection(visible[0].target.id)
      },
      { rootMargin: '-30% 0px -58% 0px', threshold: [0, 0.1, 0.3, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false)
        setSelectedProject(null)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  const selectedSkillGroup = skillGroups.find((group) => group.id === activeSkill) ?? skillGroups[0]
  const filteredProjects = useMemo(
    () => projects.filter((project) => activeFilter === 'all' || project.category === activeFilter),
    [activeFilter],
  )

  const closeMobileMenu = () => setMobileMenuOpen(false)
  const closeProjectModal = useCallback(() => setSelectedProject(null), [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="site-shell" style={{ '--scroll-progress': `${scrollProgress}%` }}>
      <a className="skip-link" href="#main-content">Aller au contenu principal</a>
      <div className="scroll-progress" aria-hidden="true" />
      <header className={`site-header ${isScrolled ? 'site-header-scrolled' : ''}`}>
        <div className="header-inner">
          <Logo />
          <nav className={`desktop-nav ${mobileMenuOpen ? 'nav-open' : ''}`} aria-label="Navigation principale">
            {navItems.map((item) => (
              <a className={activeSection === item.id ? 'nav-link-active' : ''} aria-current={activeSection === item.id ? 'location' : undefined} href={`#${item.id}`} key={item.id} onClick={closeMobileMenu}>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <a className="header-contact" href="#contact">Parlons projet <Icon name="arrowUpRight" size={14} /></a>
            <button className="menu-toggle" type="button" aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen((open) => !open)}>
              <Icon name={mobileMenuOpen ? 'close' : 'menu'} size={22} />
            </button>
          </div>
        </div>
      </header>

      <main id="main-content" tabIndex="-1">
        <section className="hero-section" id="home">
          <div className="hero-noise" aria-hidden="true" />
          <div className="container hero-grid">
            <Reveal className="hero-copy-block">
              <div className="eyebrow eyebrow-light"><span className="eyebrow-marker" /> {profile.name.toUpperCase()} / {profile.brand} / portfolio</div>
              <p className="hero-nameplate">{profile.role}<span>— {profile.brand}</span></p>
              <h1>Des systèmes numériques <span>qui ont du sens.</span></h1>
              <p className="hero-lede">{profile.tagline}</p>
              <div className="hero-buttons">
                <a className="button button-accent" href="#projects">Voir ce que je construis <Icon name="arrowUpRight" size={16} /></a>
                <a className="button button-outline-light" href="#contact">Démarrer une discussion <Icon name="arrowUpRight" size={16} /></a>
                {profile.cvUrl && <a className="button button-outline-light" href={profile.cvUrl} download>Télécharger le CV <Icon name="arrowDown" size={16} /></a>}
              </div>
              <div className="hero-details">
                <span><i className="availability-dot" /> Portfolio professionnel NAKA</span>
                <span className="detail-separator" />
                <span>{profile.shortRole}</span>
                <span className="hero-detail-code">MYH / 01</span>
              </div>
            </Reveal>

            <Reveal className="hero-visual-block" delay={140}>
              <div className="hero-orbit orbit-a" aria-hidden="true" />
              <div className="hero-orbit orbit-b" aria-hidden="true" />
              <div className="hero-sticker sticker-top"><span>01</span><small>Clarté<br />d'abord</small></div>
              <div className="hero-sticker sticker-bottom"><Icon name="code" size={16} /><span>WEB / DATA / SI</span></div>
              <div className="hero-browser">
                <div className="browser-top"><div className="browser-dots"><i /><i /><i /></div><span>naka.digital / systems</span><b>↗</b></div>
                <div className="browser-body">
                  <div className="browser-brand"><span className="mini-n">N</span><b>NAKA</b><span>systems / 01</span></div>
                  <div className="browser-heading">Make it<br /><em>useful.</em></div>
                  <div className="browser-line line-long" /><div className="browser-line line-short" />
                  <div className="browser-footer"><span>Digital products<br />for real needs.</span><strong><Icon name="arrowUpRight" size={16} /></strong></div>
                </div>
              </div>
              <div className="hero-data-card"><span className="data-card-label">SIGNAL / 01</span><strong>Useful<br /><em>by design.</em></strong><div className="data-card-bars"><i /><i /><i /><i /><i /></div></div>
            </Reveal>
          </div>
          <div className="hero-proof container" aria-label="Résumé du profil">
            {proofPoints.map((point) => <div className="hero-proof-item" key={point.code}><span>{point.code} / {point.label}</span><strong>{point.value}</strong></div>)}
          </div>
          <div className="hero-bottom container"><span>Scroller pour explorer</span><div className="hero-scroll-line" /><span>01 — 07</span></div>
        </section>

        <section className="about-section section-light" id="about">
          <div className="container">
            <SectionHeading number="01" eyebrow="À propos" title={<>Comprendre le besoin,<br /><span>construire juste.</span></>} description="Un profil formé en informatique de gestion, positionné à la rencontre du développement web, de la donnée et des usages métier." />
            <div className="about-grid">
              <Reveal className="about-statement">
                <p className="about-quote">Je suis <strong>{profile.name}</strong>, et <span>NAKA</span> est mon espace pour transformer une idée numérique en structure lisible.</p>
                <p className="about-support">Mon parcours en informatique de gestion m’a amené à m’intéresser à la fois aux interfaces, à la logique des applications et à la manière dont une organisation utilise ses informations. Ce portfolio présente ces domaines sans inventer d’expérience : les projets sont des structures prêtes à être documentées avec les réalisations réelles.</p>
                <a className="text-link" href="#contact">Parler d’un besoin <Icon name="arrowUpRight" size={16} /></a>
              </Reveal>
              <Reveal className="about-panel" delay={100}>
                <div className="about-panel-top"><span className="panel-label">NAKA / PROFILE</span><span className="panel-index">MYH</span></div>
                <div className="about-panel-shape"><span>NYH</span><i /></div>
                <div className="about-facts">{aboutFacts.map((fact) => <div key={fact.label}><span>{fact.label}</span><strong>{fact.value}</strong></div>)}</div>
                <div className="about-panel-bottom"><span>Développement<br />& systèmes d’information</span><Icon name="arrowUpRight" size={17} /></div>
              </Reveal>
            </div>
            <Reveal className="value-row" delay={160}>
              <div><span className="value-number">01</span><strong>Clarifier</strong><p>Mettre les besoins, les contraintes et les priorités au même niveau de lecture.</p></div>
              <div><span className="value-number">02</span><strong>Structurer</strong><p>Relier l’interface, la logique métier et la donnée dans un ensemble cohérent.</p></div>
              <div><span className="value-number">03</span><strong>Préparer la suite</strong><p>Documenter une base suffisamment claire pour être enrichie et reprise.</p></div>
            </Reveal>
          </div>
        </section>

        <section className="skills-section section-dark" id="skills">
          <div className="container">
            <SectionHeading number="02" eyebrow="Compétences" title={<>Un profil technique,<br /><span>orienté usage.</span></>} description="Pas une liste de mots-clés : des capacités reliées à ce qu’elles permettent de produire." dark />
            <div className="skills-layout">
              <Reveal className="skills-intro">
                <p className="section-mini-copy">Une pratique transversale pour relier l’interface, la logique métier et la donnée.</p>
                <div className="tool-cloud" aria-label="Technologies et méthodes">
                  {['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel', 'Django', 'MySQL', 'MERISE', 'Access', 'Git / GitHub'].map((tool, index) => <span key={tool} className={index === 4 || index === 6 ? 'tool-accent' : ''}>{tool}</span>)}
                </div>
                <div className="skills-side-note"><Icon name="sparkles" size={17} /><span>Technologies choisies<br />pour servir le besoin.</span></div>
              </Reveal>
              <Reveal className="skill-panel" delay={100}>
                <div className="skill-tabs" role="tablist" aria-label="Catégories de compétences">
                  {skillGroups.map((group) => <button key={group.id} id={`skill-tab-${group.id}`} className={activeSkill === group.id ? 'skill-tab-active' : ''} type="button" role="tab" aria-selected={activeSkill === group.id} aria-controls="skill-panel-content" onClick={() => setActiveSkill(group.id)}>{group.label}</button>)}
                </div>
                <SkillList group={selectedSkillGroup} />
              </Reveal>
            </div>
          </div>
        </section>

        <section className="projects-section section-light" id="projects">
          <div className="container">
            <SectionHeading number="03" eyebrow="Projets sélectionnés" title={<>Du concept au<br /><span>système.</span></>} description="Chaque fiche suit la même logique : contexte, problème, solution, fonctionnalités et technologies." />
            <div className="project-toolbar">
              <div className="filter-list" role="tablist" aria-label="Filtrer les projets">
                {projectFilters.map((filter) => <button key={filter.id} className={activeFilter === filter.id ? 'filter-active' : ''} type="button" role="tab" aria-selected={activeFilter === filter.id} onClick={() => setActiveFilter(filter.id)}>{filter.label}</button>)}
              </div>
              <span className="project-count" aria-live="polite">{String(filteredProjects.length).padStart(2, '0')} fiches</span>
            </div>
            <div className="projects-grid">
              {filteredProjects.map((project, index) => <ProjectCard key={project.number} project={project} index={index} onOpen={setSelectedProject} />)}
            </div>
            <p className="content-note"><span /> Les fiches « à personnaliser » ne revendiquent pas un projet terminé : elles structurent la présentation des réalisations à documenter.</p>
          </div>
        </section>

        <section className="services-section section-sand" id="services">
          <div className="container">
            <SectionHeading number="04" eyebrow="Services" title={<>Des prestations<br /><span>concrètes et cadrées.</span></>} description="Des formats adaptés aux besoins d’un entrepreneur, d’une association ou d’une petite équipe numérique." />
            <div className="services-grid">
              {services.map((service, index) => (
                <Reveal as="article" className="service-card" delay={index * 80} key={service.number}>
                  <div className="service-card-top"><span className="service-number">{service.number}</span><span className="service-icon"><Icon name={service.icon} size={21} /></span></div>
                  <div className="service-card-content"><h3>{service.title}</h3><p>{service.description}</p><div className="service-deliverables"><span>Ce qui peut être livré</span><ul>{service.deliverables.map((item) => <li key={item}><Icon name="check" size={12} />{item}</li>)}</ul></div></div>
                  <div className="service-card-foot"><span>{service.idealFor}</span><a href="#contact" aria-label={`Discuter du service ${service.title}`}><Icon name="arrowUpRight" size={16} /></a></div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="journey-section section-light" id="journey">
          <div className="container">
            <SectionHeading number="05" eyebrow="Parcours" title={<>Une base en construction,<br /><span>présentée avec clarté.</span></>} description="Un parcours présenté à partir des informations disponibles, sans ajouter d’expérience, de certification ou de projet non fourni." />
            <div className="journey-layout">
              <Reveal className="journey-intro"><span className="journey-year">PARCOURS / 2026</span><h3>Apprendre.<br />Pratiquer.<br />Documenter.</h3><p>Le rôle de NAKA est aussi de rendre visible la progression : formation, domaines de compétence et réalisations à venir.</p><div className="journey-mark">N<span>.</span></div></Reveal>
              <div className="timeline">
                {journey.map((item, index) => <Reveal as="article" className="timeline-item" delay={index * 80} key={item.date}><div className="timeline-marker"><Icon name={item.icon} size={16} /></div><div className="timeline-content"><span className="timeline-date">{item.date}</span><h3>{item.title}</h3><p className="timeline-place">{item.place}</p><p>{item.description}</p></div></Reveal>)}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-pattern" aria-hidden="true"><span /><span /><span /></div>
          <div className="container contact-inner">
            <Reveal className="contact-copy">
              <p className="section-eyebrow"><span>06</span> Contact</p>
              <h2>Un besoin concret ?<br /><em>Échangeons.</em></h2>
              <p>Un projet web, une base de données à structurer ou une idée à transformer en solution ? Le premier échange peut commencer simplement.</p>
              <div className="contact-socials"><OptionalProfileLink href={profile.githubUrl} label="GitHub" icon="github" /><OptionalProfileLink href={profile.linkedinUrl} label="LinkedIn" icon="linkedin" />{profile.cvUrl ? <a className="profile-link" href={profile.cvUrl} download><Icon name="arrowDown" size={14} /> CV PDF</a> : <span className="profile-link profile-link-disabled"><Icon name="arrowDown" size={14} /> CV <small>fichier à joindre</small></span>}</div>
            </Reveal>
            <Reveal className="contact-card" delay={120}>
              <div className="contact-card-label"><span className="availability-dot" /> Premier contact</div>
              <p className="contact-card-title">La prochaine bonne décision peut commencer par un message.</p>
              <a className="email-link" href={`mailto:${profile.email}`}><span><Icon name="mail" size={18} /> {profile.email}</span><Icon name="arrowUpRight" size={18} /></a>
              <button className="copy-email" type="button" onClick={copyEmail}><Icon name={copied ? 'check' : 'copy'} size={15} /> {copied ? 'Adresse copiée' : 'Copier l’adresse'}</button>
              <div className="contact-meta"><span><Icon name="mapPin" size={15} /> {profile.location}</span><span><Icon name="phone" size={15} /> {profile.phone}</span></div>
              <p className="placeholder-note">Les coordonnées entre crochets ou avec « XX » sont des placeholders à remplacer.</p>
              <ContactForm recipient={profile.email} />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand"><span className="brand-symbol">N</span><span>NAKA<span>.</span></span></div>
          <p>© {new Date().getFullYear()} {profile.name}. Portfolio professionnel.</p>
          <div className="footer-links"><a href="#home">Retour en haut <Icon name="arrowUpRight" size={14} /></a><a href="#contact">Contact <Icon name="arrowUpRight" size={14} /></a></div>
        </div>
      </footer>
      <ProjectDetailsModal project={selectedProject} onClose={closeProjectModal} />
    </div>
  )
}

export default App
