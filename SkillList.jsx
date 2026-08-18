import Icon from './Icon.jsx'

export default function SkillList({ group }) {
  return (
    <div className="skill-panel-content" id="skill-panel-content" role="tabpanel" tabIndex="0" aria-labelledby={`skill-tab-${group.id}`}>
      <div className="skill-panel-heading">
        <p className="panel-eyebrow">{group.eyebrow}</p>
        <h3>{group.title}</h3>
        <p>{group.intro}</p>
      </div>
      <div className="capability-list">
        {group.skills.map((skill, index) => (
          <article className="capability-item" key={skill.name}>
            <div className="capability-index">0{index + 1}</div>
            <div className="capability-main">
              <div className="capability-heading"><h4>{skill.name}</h4><span>{skill.output}</span></div>
              <p>{skill.description}</p>
              <div className="capability-tags" aria-label={`Technologies : ${skill.note}`}>
                {skill.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
            <Icon name="arrowUpRight" size={16} className="capability-arrow" />
          </article>
        ))}
      </div>
    </div>
  )
}
