import './Switch.scss'

/* 
  methods: contains an array of two elements in which the switch will switch from one to another when clicked
  index: it's the index of the selected method inside the methods array
  setSelectedMethod: function that is able to change the state of the selected method (that is in the parent component)
*/
const Switch = (props) => {
  return (
    <label className="switch">
      <input type="checkbox" onClick={() => {props.index === 0 ? props.setSelectedMethod(props.methods[1]) : props.setSelectedMethod(props.methods[0])}}/>
      <span className="slider round"></span>
    </label>
  );
};

export default Switch;
