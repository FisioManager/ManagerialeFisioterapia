import './Introduction.scss'

const Introduction = ({titolo, testo}) => {
  return (
    <div id="introduction" className="flex col gap-3">
      <h1>{titolo}</h1>
      <p>{testo}</p>
    </div>
  );
};

export default Introduction;
