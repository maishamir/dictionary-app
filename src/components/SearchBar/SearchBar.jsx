import { useState } from "react";
import "./SearchBar.scss"
import searchIcon from "../../assets/images/icon-search.svg"
function SearchBar({ onSearch }) {
  const [entry, setEntry] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (entry) {
      onSearch(entry);
    }
  }
  return (
    <section className="searchBar">
      <form action="" onSubmit={handleSubmit} className="searchBar__form">
        <input
          type="text"
          placeholder="Find a word"
          className="searchBar__input"
          onChange={(e) => setEntry(e.target.value)}
        />
        <img src={searchIcon} alt="" className="searchIcon"/>
      </form>
    </section>
  );
}

export default SearchBar;
