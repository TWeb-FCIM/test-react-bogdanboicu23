# Vite React TypeScript Application

O aplicație web modernă construită cu **Vite**, **React 19**, și **TypeScript**.

## 🚀 Caracteristici

- ⚡ **Vite** - Build tool ultra-rapid
- ⚛️ **React 19** - Ultima versiune React
- 📘 **TypeScript** - Type safety complet
- 🛣️ **React Router** - Navigație SPA
- 🎨 **CSS Modular** - Stiluri organizate
- 📱 **Responsive Design** - Funcționează pe toate dispozitivele
- 🔧 **Configurare completă** - Gata de utilizare

## 📁 Structura Proiectului

```
src/
├── components/      # Componente React reutilizabile
│   └── Navbar.tsx   # Bară de navigare
├── pages/           # Pagini aplicației
│   ├── Home.tsx     # Pagina principală
│   ├── About.tsx    # Despre noi
│   ├── Products.tsx # Produse
│   └── Contact.tsx  # Formular contact
├── styles/          # Stylesheet-uri CSS
│   ├── index.css    # Stiluri globale
│   ├── navbar.css   # Stiluri navbar
│   └── pages.css    # Stiluri pagini
├── App.tsx          # Componenta principală cu rutare
└── main.tsx         # Entry point aplicației

vite.config.ts       # Configurația Vite
tsconfig.json        # Configurația TypeScript
package.json         # Dependențe și scripturi
index.html           # HTML template
```

## 🛠️ Instalare și Setup

### 1. Instalați dependențele
```bash
npm install
```

### 2. Porniți serverul de dezvoltare
```bash
npm run dev
```

Aplicația se va deschide automat la `http://localhost:5173`

### 3. Build pentru producție
```bash
npm run build
```

### 4. Preview build-ul
```bash
npm run preview
```

## 📄 Pagini Disponibile

| Rută | Descriere |
|------|-----------|
| `/` | Pagina principală |
| `/about` | Informații despre aplicație |
| `/products` | Lista de produse |
| `/contact` | Formular de contact |

## 🔧 Configurații

### Vite (`vite.config.ts`)
- Port dev: `5173`
- Output dir: `dist`
- Plugin React JSX auto

### TypeScript (`tsconfig.json`)
- Target: `ES2020`
- Strict mode: ON
- JSX: React 17+ (automatic)

## 📦 Dependențe Principale

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.28.0"
}
```

## 🎨 Funcționalități

### Home Page
- Prezentare generală
- Lista caracteristici

### About Page
- Descriere aplicație
- Tehnologii utilizate
- Grid card design

### Products Page
- Lista produse cu hover effects
- Card design responsive
- Add to cart button

### Contact Page
- Informații contact
- Formular cu validare
- Message success notification

## 🎯 Comenzi Disponibile

```bash
npm run dev       # Start dev server
npm run build     # Build pentru producție
npm run preview   # Preview build
```

## 💻 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Structură CSS

CSS-ul este organizat modular:
- `index.css` - Reset și stiluri globale
- `navbar.css` - Stiluri pentru navbar
- `pages.css` - Stiluri pentru pagini și componente

Toate fișierele CSS includ media queries pentru responsive design.

## 🚀 Deploy

Aplicația poate fi deployată ușor pe:
- Vercel
- Netlify
- GitHub Pages
- Azure Static Web Apps

Doar rulați `npm run build` și deployați folderul `dist/`.

## 📚 Documentație

- [Vite Docs](https://vitejs.dev/)
- [React Docs](https://react.dev/)
- [React Router Docs](https://reactrouter.com/)
- [TypeScript Docs](https://www.typescriptlang.org/)

## 📄 Licență

MIT

## 👨‍💻 Autor

2026 - MyApp

---

**Happy Coding! 🚀**
