const Section = ({ src, titolo, testo, mode }) => {
  return (
    <div id="section" className={"flex center box-container " + (mode ? "dark" : "light")}>
      {mode ? (
        <>
          <div className="flex center box-40">
            <img src={src} alt="illustration"/>
          </div>
          <div className="flex col box-40 gap-3">
            <h1>{titolo}</h1>
            <p>{testo}</p>
          </div>
        </>
      ) : (
        <>
          <div className="flex col box-40 gap-3">
            <h1>{titolo}</h1>
            <p>{testo}</p>
          </div>
          <div className="flex center box-40">
            <img src={src} alt="illustration" />
          </div>
        </>
      )}
    </div>
  );
};

export default Section;
