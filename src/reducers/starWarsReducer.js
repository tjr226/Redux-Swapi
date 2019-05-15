import { FETCHING, SUCCESS, FAILURE } from "../actions";
const initialState = {
  characters: [], 
  isFetching: false,
  error: '',

  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCHING:
        return {
          ...state,
          error: '',
          isFetching: true
        };
      case SUCCESS:
        return {
          ...state,
          characters: action.payload,
          error: '',
          isFetching: false,
        }
      case FAILURE:
        return {
          ...state,
          error: action.payload,
          isFetching: false,
        }
        ;
    default:
      return state;
  }
};
