import * as actions from '../actions/index';
import { fetchData } from '../utility/fetchData';
import { fetchOptions } from '../utility/fetchOptions';

export const fetchDelete = (id) => {
  return async (dispatch) => {
    try {
      const options = await fetchOptions('DELETE', {});
      const response = await fetchData(`${process.env.REACT_APP_BACKEND_URL}/api/v1/notes/${id}`, options);
      if(!response.ok){
        throw Error(response.statusText)
      }
    } catch (error) {
      dispatch(actions.setError(error.message));
    }
  }
}
