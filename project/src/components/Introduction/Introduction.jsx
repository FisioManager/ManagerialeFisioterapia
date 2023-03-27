import './Introduction.scss'

const Introduction = (props) => {
  return (
    <div id="introduction" className="box-container-p100 flex col gap-3">
      <h1>{props.titolo}</h1>
      <p>{props.testo}</p>
    </div>
  );
};

export default Introduction;
