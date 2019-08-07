export const currOrderReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CURRENT_ORDER':
      console.log(action.currentOrder);
      return action.currentOrder;
    default:
      return state;
  }
}
