import { useState } from "react";

function SearchBar({ onSearch }) {
  const [entry, setEntry] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (entry) {
      onSearch(entry);
    }
  }
  return (
    <section>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Find a word"
          onChange={(e) => setEntry(e.target.value)}
        />
      </form>
    </section>
  );
}

export default SearchBar;
