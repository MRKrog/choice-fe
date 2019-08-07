export const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_NOTES':
      return action.notes;
    default:
      return state;
  }
}
