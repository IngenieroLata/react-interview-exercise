import configureStore from 'redux-mock-store';

import * as PageActions from './PageActions';

const mockStore = configureStore();
const store = mockStore();

describe('PageActions', () => {
  it('Dispatches the corrent page number', () => {
    const action = [
      {
        type: 'CHANGE_PAGE',
        page: 2
      }
    ];

    store.dispatch(PageActions.chagePage(2));
    expect(store.getActions()).toEqual(action);
  });
});
