import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1> Dictionary App</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="Twilight" />
        </main>
        <footer className="App-footer">
          <small>
            <a
              href="https://github.com/Anael961/dictionary-project"
              rel="noreferrer"
              target="_blank"
            >
              Open-source code
            </a>{" "}
            by Elodie M
          </small>
        </footer>
      </div>
    </div>
  );
}
