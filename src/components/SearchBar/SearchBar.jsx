import { useState } from "react";
import "./SearchBar.scss"
import searchIcon from "../../assets/images/icon-search.svg"
function SearchBar({ onSearch }) {
  const [entry, setEntry] = useState("");
  const [emptySearch, setEmptySearch] = useState(false);
  const [errClass, setErrClass] = useState("")

  function handleSubmit(e) {
    e.preventDefault();

    if (entry) {
      onSearch(entry);
      setErrClass("")
      setEmptySearch(false)
    }
    else {
      setEmptySearch(true);
      setErrClass("errorState")
      setEmptySearch(true)
    }
    
  }
  return (
    <section className="searchBar">
      <form action="" onSubmit={handleSubmit} className="searchBar__form">
        <input
          type="text"
          placeholder="Find a word"
          className={`searchBar__input ${errClass}`}
          onChange={(e) => setEntry(e.target.value)}
        />
        <img src={searchIcon} alt="" className="searchIcon" />
        {/* <p className="body-s errMsg">Whoops, can't be empty...</p> */}
        <p className="body-s errMsg" style={emptySearch ? { "visibility": "visible" } : {"visibility": "hidden"}}>Whoops, can't be empty...</p>
      </form>
    </section>
  );
}

export default SearchBar;
