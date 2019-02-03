import configureStore from 'redux-mock-store';

import * as FriendsActions from './FriendsActions';

const mockStore = configureStore();
const store = mockStore();

const payload = {
  name: 'Jane Doe',
  gender: 'female'
};

describe('FriendsActions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('Dispatches the friend payload when add', () => {
    const action = [
      {
        type: 'ADD_FRIEND',
        payload
      }
    ];

    store.dispatch(FriendsActions.addFriend(payload));
    expect(store.getActions()).toEqual(action);
  });

  it('Dispatches the friend id on deleteFriend', () => {
    const action = [
      {
        type: 'DELETE_FRIEND',
        id: 1
      }
    ];

    store.dispatch(FriendsActions.deleteFriend(1));
    expect(store.getActions()).toEqual(action);
  });

  it('Dispatches the friend id on starFriend', () => {
    const action = [
      {
        type: 'STAR_FRIEND',
        id: 1
      }
    ];

    store.dispatch(FriendsActions.starFriend(1));
    expect(store.getActions()).toEqual(action);
  });
});
