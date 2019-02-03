import * as types from '../constants/ActionTypes';

const initialState = {
  total: 3,
  limit: 2,
  page: 1
};

export default function pagination(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_PAGE:
      return {
        ...state,
        page: action.page
      };
    case types.DELETE_FRIEND:
      return {
        ...state,
        total: state.total - 1,
        page: 1
      };
    case types.ADD_FRIEND:
      return {
        ...state,
        total: state.total + 1
      };

    default:
      return state;
  }
}
