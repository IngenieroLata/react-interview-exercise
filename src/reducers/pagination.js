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

    default:
      return state;
  }
}
