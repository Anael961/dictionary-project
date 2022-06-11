import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic && props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <a href={props.phonetic.audio} rel="noreferrer" target="_blank">
          Listen
        </a>
        <span className="text">{props.phonetic.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
