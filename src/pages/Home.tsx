import '../styles/pages.css'

export default function Home() {
  return (
    <div className="page-content">
      <h1>Bine ați venit! 🏠</h1>
      <p>Aceasta este o aplicație construită cu Vite + React + TypeScript</p>
      
      <section className="features">
        <h2>Caracteristici principale:</h2>
        <ul>
          <li>⚡ Vite - Build tool rapid și modern</li>
          <li>⚛️ React 19 - UI library</li>
          <li>📘 TypeScript - Type safety</li>
          <li>🛣️ React Router - Navigație între pagini</li>
          <li>🎨 CSS Modular - Stiluri organizate</li>
        </ul>
      </section>

      <section className="cta">
        <h3>Explorezi aplicația usando linkurile din navbar!</h3>
      </section>
    </div>
  )
}
