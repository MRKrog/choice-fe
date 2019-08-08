export const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_NOTES':
      return action.notes;
    case 'UPDATE_STATUS':
      const updatedStatus = state.map(note => {
        if (note.id === action.id) {
          note.status = action.status
        }
        return note;
      })
      return updatedStatus;
    case 'UPDATE_NOTE':
      const updatedNotes = state.map(note => {
        if (note.id === action.id) {
          note.title = action.info.title;
          note.copy = action.info.copy;
          note.status = action.info.status;
        }
        return note;
      })
      return updatedNotes;
    case 'CREATE_NOTE':
      return [...state, action.note]
    case 'DELETE_NOTE':
      const filteredNotes = state.filter(note => {
        return note.id !== action.id
      })
      console.log(action.id);
      return state
    default:
      return state;
  }
}
