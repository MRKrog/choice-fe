export const currNoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CURRENT_NOTE':
      return action.currentNote;
    default:
      return state;
  }
}
