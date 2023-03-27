import './Section.scss'

const Section = (props) => {
  return (
    <div id="section" className={"flex box-container " + (props.mode ? "left-to-right" : "right-to-left")}>
      {props.mode ? (
        <>
          <div className="flex box-30">
            <img src={props.src} alt="illustration"/>
          </div>
          <div className="flex col box-30 gap-3">
            <h1>{props.titolo}</h1>
            <p>{props.testo}</p>
          </div>
        </>
      ) : (
        <>
          <div className="flex col box-30 gap-3">
            <h1>{props.titolo}</h1>
            <p>{props.testo}</p>
          </div>
          <div className="flex box-30">
            <img src={props.src} alt="illustration" />
          </div>
        </>
      )}
    </div>
  );
};

export default Section;
