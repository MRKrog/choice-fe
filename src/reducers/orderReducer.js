export const orderReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ORDERS':
      return action.orders;
    default:
      return state;
  }
}
