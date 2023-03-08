import './Switch.scss'

const Switch = ({methods, index, setSelectedMethod}) => {

  const changeState = () => {
    index === 0 ? setSelectedMethod(methods[1]) : setSelectedMethod(methods[0])
  };

  return (
    <label className="switch">
      <input type="checkbox" onClick={changeState}/>
      <span className="slider round"></span>
    </label>
  );
};

export default Switch;
