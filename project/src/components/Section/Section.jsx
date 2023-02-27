import React from "react";

const Section = ({ src, titolo, testo, mode }) => {
  return (
    <div id="section" className={mode ? "dark" : "light"}>
      {mode ? (
        <>
          <div id="illustration">
            <img src={src} alt="illustration"/>
          </div>
          <div id="description">
            <h1>{titolo}</h1>
            <p>{testo}</p>
          </div>
        </>
      ) : (
        <>
          <div id="description">
            <h1>{titolo}</h1>
            <p>{testo}</p>
          </div>
          <div id="illustration">
            <img src={src} alt="illustration" />
          </div>
        </>
      )}
    </div>
  );
};

export default Section;
