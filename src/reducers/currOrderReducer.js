export const currOrderReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CURRENT_ORDER':
      return action.currentOrder;
    default:
      return state;
  }
}
