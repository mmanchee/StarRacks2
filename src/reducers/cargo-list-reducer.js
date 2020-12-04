export default (state = {}, action) => {
  const { Name, Description, Crates, EnergyCredits, id } = action;
  switch (action.type) {
  case 'ADD_CARGO':
    return Object.assign({}, state, {
      [id]: {
        Name: Name,
        Description: Description,
        Crates: Crates,
        EnergyCredits: EnergyCredits,
        id: id
      }
    });
  case 'DELETE_CARGO':
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};

