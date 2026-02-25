import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My APP</h1>
        <p>Built with React and TypeScript</p>
      </header>

      <main className="App-main">
        <section className="counter-section">
          <h2>Counter 2.0s</h2>
          <p>Current count: <strong>{count}</strong></p>
          <div className="button-group">
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
          </div>
        </section>

        <section className="info-section">
          <h2>Features</h2>
          <ul>
            <li>React Component with Hooks</li>
            <li>TypeScript Support</li>
            <li>Interactive Elements</li>
            <li>Responsive Design</li>
          </ul>
        </section>
      </main>

      <footer className="App-footer">
        <p>&copy; 2026 My React App</p>
      </footer>
    </div>
  );
}

export default App;
