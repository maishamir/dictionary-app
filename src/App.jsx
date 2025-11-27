import { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import logo from "./assets/images/logo.svg";
import Entry from "./components/Entry/Entry";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [fontClass, setFontClass] = useState("sans-serif");

  return (
    <main className={`app ${fontClass}`} data-theme={isDark ? "dark" : "light"}>
      <header>
        <img src={logo} alt="" />

        <form action="">
          <select name="fontStyle" id="fontStyle" className="fontStyle">
            <option value="sans-serif" onClick={(e) => setFontClass(e.target.value)}>
              Sans Serif
            </option>
            <option value="serif" onClick={(e) => setFontClass(e.target.value)}>
              Serif
            </option>
            <option value="mono" onClick={(e) => setFontClass(e.target.value)}>
              Mono
            </option>
          </select>
        </form>

        <p>Font family: {fontClass}</p>
      </header>

      <Entry />
    </main>
  );
}

export default App;
