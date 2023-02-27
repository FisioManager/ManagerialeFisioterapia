import React from "react";

const Section = ({src, titolo, testo}) => {
  return (
    <div id="section">
      <div id="illustration">
        <img src={src} alt="illustration" />
      </div>
      <div id="description">
        <h1>{titolo}</h1>
        <p>
          {testo}
        </p>
      </div>
    </div>
  );
};

export default Section;
