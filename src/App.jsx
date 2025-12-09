import { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Entry from "./components/Entry/Entry";

import useLocalStorage from "use-local-storage";

const BASE = "https://api.dictionaryapi.dev/api/v2/entries/en";

function App() {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  const [fontClass, setFontClass] = useState("serif");

  const [entry, setEntry] = useState("keyboard");
  const [entryData, setEntryData] = useState("");
  const [errData, setErrData] = useState("");

  function handleSearch(entryInput) {
    setEntry(entryInput);
    console.log(entryInput);
  }

  function handleFontClass(fontClassInput) {
    setFontClass(fontClassInput);
    console.log(fontClassInput);
  }

  function handleThemeSwitch(toggleStatus) {
    setIsDark(toggleStatus);
  }

  useEffect(() => {
    async function getEntry() {
      try {
        const response = await axios.get(`${BASE}/${entry}`);

        console.log(response.data[0]);
        setEntryData(response.data[0]);
        setErrData("");
      } catch (err) {
        setEntryData("");
        setErrData(err.response.data);
      }
    }
    getEntry();
  }, [entry]);

  return (
    <div className="app__container" data-theme={isDark ? "dark" : "light"}>
      <main className={`app ${fontClass}`}>
        <Header
          onFontSwitch={handleFontClass}
          onToggle={handleThemeSwitch}
          fontClass={fontClass}
          isToggled={isDark}
        />

        <SearchBar onSearch={handleSearch} />
        <Entry entry={entryData} entryNotFound={errData} />
      </main>
    </div>
  );
}

export default App;
