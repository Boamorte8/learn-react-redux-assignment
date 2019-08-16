import * as actionsTypes from './actions';

const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.ADD:
      return {
          ...state,
          persons: state.persons.concat(action.person)
        };
    case actionsTypes.DELETE:
      const updatedArray = state.persons.filter(person => person.id !== action.id);
      return {
          ...state,
          persons: updatedArray
        };
    default:
      return state;
  }
};

export default reducer;