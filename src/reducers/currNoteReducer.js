export const currNoteReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_CURRENT_NOTE':
      return action.currentNote;
    case 'RESET_NOTES':
      return action.data
    default:
      return state;
  }
}
