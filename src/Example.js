import React from "react";

export default function Example(props) {
  if (props.example) {
    return <span>{props.example}</span>;
  } else {
    return null;
  }
}
