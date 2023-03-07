import './Switch.scss'

const Switch = ({methods, index, onMethodSelect}) => {
  
  const changeState = () => {
    index === 0 ? onMethodSelect(methods[1]) : onMethodSelect(methods[0])
  }

  return (
    <>
      <label className="switch">
        <input type="checkbox" onClick={changeState}/>
        <span className="slider round"></span>
      </label>
    </>
  );
};

export default Switch;
