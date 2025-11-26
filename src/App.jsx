import { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import logo from "./assets/images/logo.svg";
import Entry from "./components/Entry/Entry";
import SearchBar from "./components/SearchBar/SearchBar";

const BASE = "https://api.dictionaryapi.dev/api/v2/entries/en";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [fontClass, setFontClass] = useState("sans-serif");

  const [entry, setEntry] = useState("keyboard");

  // useEffect(() => {
  //   async function getEntry() {
  //     try {
  //       const response = await axios.get(`${BASE}/${entry}`);
  //       console.log(response.data[0])
  //     } catch (err) {
  //       console.error(err)
  //     }
  //   }
  //   getEntry();
  // }, [entry]);

  return (
    <main className={`app ${fontClass}`} data-theme={isDark ? "dark" : "light"}>
      <header>
        <img src={logo} alt="" />

        <form action="">
          <select name="fontStyle" id="fontStyle" className="fontStyle">
            <option
              value="sans-serif"
              onClick={(e) => setFontClass(e.target.value)}
            >
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

      <SearchBar />
      <Entry />
    </main>
  );
}

export default App;
