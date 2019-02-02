import * as types from '../constants/ActionTypes';

export function chagePage(page) {
  return {
    type: types.CHANGE_PAGE,
    page
  };
}
