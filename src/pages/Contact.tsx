import { useState } from 'react'
import '../styles/pages.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="page-content">
      <h1>Contactează-ne 📧</h1>
      
      <div className="contact-container">
        <section className="contact-info">
          <h2>Informații de contact</h2>
          <p>📞 Tel: +40 123 456 789</p>
          <p>📧 Email: contact@example.com</p>
          <p>📍 Adresă: București, România</p>
        </section>

        <section className="contact-form">
          <h2>Formular de contact</h2>
          {submitted && <div className="success-message">✓ Mesajul a fost trimis cu succes!</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nume:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Introduceți numele"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Introduceți email-ul"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mesaj:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Introduceți mesajul"
                rows={5}
              ></textarea>
            </div>

            <button type="submit" className="btn-primary">Trimite</button>
          </form>
        </section>
      </div>
    </div>
  )
}
