import './Switch.scss'

/* 
  methods: contains an array of two elements in which the switch will switch from one to another when clicked
  index: it's the index of the selected method inside the methods array
  setSelectedMethod: function that is able to change the state of the selected method (that is in the parent component)
*/
const Switch = ({ methods, index, setSelectedMethod }) => {
  return (
    <label className='switch'>
      <input
        type='checkbox'
        onClick={() => {
          index === 0
            ? setSelectedMethod(methods[1])
            : setSelectedMethod(methods[0])
        }}
      />
      <span className='slider round'></span>
    </label>
  )
}

export default Switch
