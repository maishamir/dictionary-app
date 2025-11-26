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
  const [entryData, setEntryData] = useState("");
  const [isError, setIsError] = useState(false);

  function handleSearch(entryInput) {
    setEntry(entryInput);
    console.log(entryInput);
  }

  useEffect(() => {
    async function getEntry() {
      try {
        const response = await axios.get(`${BASE}/${entry}`);
        console.log(response.data[0])
        setEntryData(response.data[0])
        setIsError(false)
      } catch (err) {
        console.error(err)
        setIsError(true)
      }
    }
    getEntry();
  }, [entry]);

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

      <SearchBar onSearch={handleSearch}  />
      <Entry entryNotFound={isError}/>
    </main>
  );
}

export default App;
