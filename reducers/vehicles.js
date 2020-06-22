const vehicles = (state = [], action) => {
  switch (action.type) {
    case 'ADD_VEHICLE':
      return [
        ...state,
        {
          id: action.id
        }
      ]
    default:
      return state
  }
}

export default vehicles
