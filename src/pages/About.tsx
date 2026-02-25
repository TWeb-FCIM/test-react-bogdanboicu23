import React from 'react'
import '../styles/pages.css'

export default function About() {
  return (
    <div className="page-content">
      <h1>Despre Aplicație 📖</h1>
      
      <section>
        <h2>Descripție</h2>
        <p>
          Această aplicație este o demonstrație completă a unui proiect React 
          configurare cu Vite, React Router și TypeScript.
        </p>
      </section>

      <section>
        <h2>Tehnologii utilizate</h2>
        <div className="tech-grid">
          <div className="tech-card">
            <h3>Frontend</h3>
            <ul>
              <li>React 19</li>
              <li>TypeScript</li>
              <li>CSS3</li>
            </ul>
          </div>
          <div className="tech-card">
            <h3>Build Tools</h3>
            <ul>
              <li>Vite</li>
              <li>npm</li>
            </ul>
          </div>
          <div className="tech-card">
            <h3>Routing</h3>
            <ul>
              <li>React Router v7</li>
              <li>SPA Architecture</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Versiune: 1.0.0</h2>
        <p>Anul: 2026</p>
      </section>
    </div>
  )
}
