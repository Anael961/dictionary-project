import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001725530b3162e4c76a67b8e236e6d5e5d";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h2 className="text-center">What word do you want to look up?</h2>
          <form onSubmit={handleSubmit}>
            <div className="row input-group">
              <input
                type="search"
                className="col-9 form-control border-right-0 border"
                onChange={handleChange}
                defaultValue={props.defaultKeyword}
              />
              <div className="col-3 input-group-append">
                <button
                  className="btn btn-outline-secondary border-left-0 border"
                  type="submit"
                >
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
          </form>
          <div className="hint text-center">
            Suggested words: sunset, wine, yoga, plant...
          </div>
        </section>
        <Photos photos={photos} />
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
