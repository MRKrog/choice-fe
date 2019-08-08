export const setLoading = loading => ({
  type: "SET_LOADING",
  loading
});

export const setError = error => ({
  type: "SET_ERROR",
  error
});

export const setOrders = orders => ({
  type: "SET_ORDERS",
  orders
});

export const setNotes = notes => ({
  type: "SET_NOTES",
  notes
});

export const setCurrOrder = currentOrder => ({
  type: "SET_CURRENT_ORDER",
  currentOrder
});

export const setCurrNote = currentNote => ({
  type: "SET_CURRENT_NOTE",
  currentNote
});

export const updateNote = (id, info) => ({
  type: "UPDATE_NOTE",
  id,
  info
});

export const updateStatus = (id, status) => ({
  type: "UPDATE_STATUS",
  id,
  status
});

export const createNewNote = (note) => ({
  type: "CREATE_NOTE",
  note
});
