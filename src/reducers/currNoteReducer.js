export const currNoteReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_CURRENT_NOTE':
      return action.currentNote;
    default:
      return state;
  }
}
