import { useState } from 'react'
import Icon from './Icon.jsx'

const initialValues = { name: '', email: '', subject: '', message: '', website: '' }

export default function ContactForm({ recipient }) {
  const [values, setValues] = useState(initialValues)
  const [submitted, setSubmitted] = useState(false)

  const updateField = (event) => {
    setSubmitted(false)
    setValues((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (values.website) return

    const subject = values.subject || `Prise de contact — ${values.name}`
    const body = [
      'Bonjour Moussa,',
      '',
      values.message,
      '',
      `Nom : ${values.name}`,
      `Email : ${values.email}`,
    ].join('\n')

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-heading"><span>Écrire à NAKA</span><small>Les champs marqués * sont requis.</small></div>
      <div className="form-grid">
        <label><span>Nom *</span><input name="name" value={values.name} onChange={updateField} required autoComplete="name" placeholder="Votre nom" /></label>
        <label><span>Email *</span><input type="email" name="email" value={values.email} onChange={updateField} required autoComplete="email" inputMode="email" placeholder="vous@exemple.com" /></label>
      </div>
      <label><span>Sujet</span><input name="subject" value={values.subject} onChange={updateField} autoComplete="off" placeholder="Parlons de votre projet" /></label>
      <label><span>Message *</span><textarea name="message" value={values.message} onChange={updateField} required rows="4" placeholder="Quelques lignes sur votre besoin..." /></label>
      <input className="form-honeypot" name="website" value={values.website} onChange={updateField} tabIndex="-1" autoComplete="off" aria-hidden="true" />
      <div className="form-bottom"><button className="form-submit" type="submit">Préparer le message <Icon name="arrowUpRight" size={15} /></button><span>Ou utilisez directement l’email ci-dessus.</span></div>
      {submitted && <p className="form-feedback" role="status"><Icon name="check" size={14} /> Votre application de messagerie devrait s’ouvrir.</p>}
    </form>
  )
}
