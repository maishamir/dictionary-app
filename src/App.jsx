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
  // const [isError, setIsError] = useState(false);
  const [errData, setErrData] = useState("")

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
        setErrData("")
      } catch (err) {
        setEntryData("");
        setErrData(err.response.data);
      }
    }
    getEntry();
  }, [entry]);

  return (
    <main className={`app ${fontClass}`} data-theme={isDark ? "dark" : "light"}>
      <header>
        <img src={logo} alt="" />

        <form action="">
          <select name="fontStyle" id="fontStyle" className="fontStyle" onChange={(e) => setFontClass(e.target.value)}>
            <option
              value="sans-serif"

            >
              Sans Serif
            </option>
            <option value="serif" >
              Serif
            </option>
            <option value="mono" >
              Mono
            </option>
          </select>
        </form>

      </header>

      <SearchBar onSearch={handleSearch} />
      <Entry entry={entryData} entryNotFound={errData} />
    </main>
  );
}

export default App;
