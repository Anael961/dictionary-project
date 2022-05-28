import React, { useState } from "react";

import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function wordSearch(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={wordSearch}>
        <input type="search" onChange={handleChange} />
      </form>
    </div>
  );
}
