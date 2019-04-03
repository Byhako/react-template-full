export default Reducer

function Reducer (state, action) {
  const reducer = ({
    SET_SUMAR,

  })[action.type]

  return (reducer && reducer(state, action)) || state
}

function SET_SUMAR (state, action) {
  let variable = state.variable + 1
  return { ...state, variable }
}


