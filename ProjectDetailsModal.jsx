import { useEffect, useRef } from 'react'
import Icon from './Icon.jsx'

function ProjectPoster({ project }) {
  return (
    <div className={`case-study-poster poster-${project.visual}`} role="img" aria-label={`Aperçu visuel du projet ${project.title}`}>
      <div className="poster-grid" />
      <div className="poster-label">{project.number} / NAKA CASE</div>
      <div className="poster-stamp">{project.categoryLabel}</div>
      <div className="poster-center"><span>NAKA</span><strong>{project.number}</strong></div>
      <div className="poster-footer">{project.technologies.join(' / ')}</div>
    </div>
  )
}

function ProjectLink({ href, label, icon }) {
  if (!href) return <span className="case-study-link case-study-link-disabled"><Icon name={icon} size={14} /> {label} <small>À ajouter</small></span>
  return <a className="case-study-link" href={href} target="_blank" rel="noreferrer"><Icon name={icon} size={14} /> {label} <Icon name="external" size={13} /></a>
}

export default function ProjectDetailsModal({ project, onClose }) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!project) return undefined

    const previousOverflow = document.body.style.overflow
    const previouslyFocused = document.activeElement
    document.body.style.overflow = 'hidden'
    const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus())

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }
      if (event.key !== 'Tab') return

      const dialog = document.querySelector('.project-modal')
      const focusable = dialog ? [...dialog.querySelectorAll('button, a[href], input, textarea, [tabindex]:not([tabindex="-1"])')].filter((element) => !element.hasAttribute('disabled')) : []
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      window.cancelAnimationFrame(focusFrame)
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
      if (previouslyFocused && typeof previouslyFocused.focus === 'function') previouslyFocused.focus()
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" aria-describedby="project-modal-lede">
        <button ref={closeButtonRef} className="modal-close" type="button" onClick={onClose} aria-label="Fermer le détail du projet"><Icon name="close" size={18} /></button>
        <div className="modal-topline"><span>NAKA / ÉTUDE DE CAS</span><span>{project.status}</span></div>
        <div className="modal-grid">
          <ProjectPoster project={project} />
          <div className="case-study-content">
            <p className="case-study-kicker">{project.number} · {project.categoryLabel}</p>
            <h2 id="project-modal-title">{project.title}</h2>
            <p className="case-study-lede" id="project-modal-lede">{project.shortDescription}</p>
            <div className="case-study-block"><span>Le problème</span><p>{project.problem}</p></div>
            <div className="case-study-block"><span>La solution</span><p>{project.solution}</p></div>
            <div className="case-study-features"><span>Fonctionnalités prévues</span><ul>{project.features.map((feature) => <li key={feature}><Icon name="check" size={13} />{feature}</li>)}</ul></div>
            <div className="case-study-tech"><span>Technologies</span><div>{project.technologies.map((technology) => <b key={technology}>{technology}</b>)}</div></div>
            <div className="case-study-links"><ProjectLink href={project.links.demo} label="Aperçu" icon="external" /><ProjectLink href={project.links.code} label="Code source" icon="github" /></div>
            {project.placeholder && <p className="case-study-note"><i /> Cette fiche est une structure éditoriale prête à recevoir les informations réelles du projet : contexte, captures, résultats et liens.</p>}
          </div>
        </div>
      </section>
    </div>
  )
}
