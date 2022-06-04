import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="twilight" />
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
