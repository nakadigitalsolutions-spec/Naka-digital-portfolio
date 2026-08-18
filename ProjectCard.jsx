import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'

function DashboardVisual() {
  return (
    <div className="project-art art-dashboard" aria-hidden="true">
      <div className="art-window-bar"><span /><span /><span /><b>NAKA / overview</b></div>
      <div className="art-dashboard-body">
        <div className="art-sidebar"><i /><i /><i /><i /></div>
        <div className="art-dashboard-main">
          <div className="art-dashboard-top"><span>Bonjour, équipe</span><b>+ Nouveau</b></div>
          <div className="art-stat-row"><span /><span /><span /></div>
          <div className="art-chart"><div className="chart-labels"><i /><i /><i /><i /></div><div className="chart-line" /></div>
        </div>
      </div>
    </div>
  )
}

function DatabaseVisual() {
  return (
    <div className="project-art art-database" aria-hidden="true">
      <div className="db-orbit db-orbit-one" />
      <div className="db-orbit db-orbit-two" />
      <div className="db-core"><Icon name="database" size={35} strokeWidth={1.2} /></div>
      <div className="db-node db-node-one"><b>CLIENTS</b><span>id · nom · contact</span></div>
      <div className="db-node db-node-two"><b>VENTES</b><span>id · date · total</span></div>
      <div className="db-node db-node-three"><b>STOCKS</b><span>id · article · quantité</span></div>
      <div className="db-connector db-connector-one" /><div className="db-connector db-connector-two" /><div className="db-connector db-connector-three" />
    </div>
  )
}

function PortalVisual() {
  return (
    <div className="project-art art-portal" aria-hidden="true">
      <div className="portal-glow" />
      <div className="portal-window">
        <div className="portal-nav"><span className="portal-logo">N</span><i /><i /><i /><b /></div>
        <div className="portal-copy"><span>UN SERVICE,</span><strong>plus simple<br />à trouver.</strong><i /></div>
        <div className="portal-cards"><span><b /><i /></span><span><b /><i /></span><span><b /><i /></span></div>
      </div>
      <div className="portal-badge"><Icon name="arrowUpRight" size={16} /> UX / UI</div>
    </div>
  )
}

function WorkflowVisual() {
  return (
    <div className="project-art art-workflow" aria-hidden="true">
      <div className="workflow-title"><span>PROCESS / 04</span><b>Flux de travail</b></div>
      <div className="workflow-line line-one" /><div className="workflow-line line-two" />
      <div className="workflow-node node-one"><Icon name="layers" size={18} /><b>Besoin</b><span>clarifier</span></div>
      <div className="workflow-node node-two"><Icon name="code" size={18} /><b>Solution</b><span>construire</span></div>
      <div className="workflow-node node-three"><Icon name="check" size={18} /><b>Impact</b><span>mesurer</span></div>
      <div className="workflow-pill"><span /> simple par design</div>
    </div>
  )
}

const visuals = {
  dashboard: DashboardVisual,
  database: DatabaseVisual,
  portal: PortalVisual,
  workflow: WorkflowVisual,
}

export default function ProjectCard({ project, index, onOpen }) {
  const Visual = visuals[project.visual] ?? DashboardVisual

  return (
    <Reveal as="article" className="project-card" delay={index * 80}>
      <div className={`project-cover cover-${project.visual}`}>
        <div className="project-cover-meta"><span>{project.number} / 04</span><span>{project.categoryLabel}</span></div>
        <Visual />
        {project.placeholder && <span className="placeholder-badge"><i /> Fiche à personnaliser</span>}
      </div>
      <div className="project-card-body">
        <div>
          <div className="project-stack" aria-label={`Technologies : ${project.stack}`}>
            {project.stack.split(' · ').map((technology) => <span key={technology}>{technology}</span>)}
          </div>
          <div className={`project-status status-${project.statusTone ?? 'default'}`}><i /> {project.status}</div>
          <h3>{project.title}</h3>
          <p className="project-description">{project.shortDescription}</p>
        </div>
        <button type="button" className="round-arrow" aria-label={`Voir le détail du projet ${project.title}`} onClick={() => onOpen(project)}><Icon name="arrowUpRight" size={17} /></button>
      </div>
    </Reveal>
  )
}
