import * as actions from '../actions/index';
import { fetchData } from '../utility/fetchData';

export const fetchAllNotes = () => {
  return async (dispatch) => {
    try {
      dispatch(actions.setLoading(true));
      const allNotes = await fetchData(process.env.REACT_APP_BACKEND_URL + '/api/v1/notes');
      let sortedNotes = allNotes.sort((a,b) => a.id - b.id)
      dispatch(actions.setNotes(sortedNotes));
      dispatch(actions.setLoading(false));
    } catch (error) {
      dispatch(actions.setError(error.message));
    }
  }
}
