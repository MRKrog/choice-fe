import * as actions from '../actions/index';

export const createNote = (currentOrder, notes) => {
  return (dispatch) => {
    let sortedNotes = notes.sort((a,b) => a.id - b.id)
    let lastNumber = (sortedNotes[sortedNotes.length - 1].id) + 1
    let newNote = {
      title: "Enter Title",
      copy: "Enter Copy",
      status: 0,
      order_id: currentOrder,
      id: lastNumber,
      notSaved: true
    }
    dispatch(actions.setCurrNote(lastNumber));
    dispatch(actions.createNewNote(newNote));
  }
}
