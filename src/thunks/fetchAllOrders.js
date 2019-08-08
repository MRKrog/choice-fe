import * as actions from '../actions/index';
import { fetchData } from '../utility/fetchData';

export const fetchAllOrders = () => {
  return async (dispatch) => {
    try {
      dispatch(actions.setLoading(true));
      const allOrders = await fetchData(process.env.REACT_APP_BACKEND_URL + '/api/v1/orders');
      dispatch(actions.setOrders(allOrders));
      // dispatch(actions.setLoading(false));
    } catch (error) {
      dispatch(actions.setError(error.message));
    }
  }
}
