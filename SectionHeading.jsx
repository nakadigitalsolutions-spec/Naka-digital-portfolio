export default function SectionHeading({ number, eyebrow, title, description, dark = false }) {
  return (
    <div className={`section-heading ${dark ? 'section-heading-dark' : ''}`}>
      <div className="section-heading-main">
        <p className="section-eyebrow"><span>{number}</span>{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}
