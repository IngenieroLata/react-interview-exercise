import friendlist from './friendlist';

const defaultState = {
  friendsById: [
    {
      name: 'Theodore Roosevelt',
      starred: true,
      gender: 'male'
    },
    {
      name: 'Abraham Lincoln',
      starred: false,
      gender: 'male'
    },
    {
      name: 'George Washington',
      starred: false,
      gender: 'male'
    }
  ]
};

const newFriend = {
  name: 'Jane Doe',
  starred: false,
  gender: 'female'
};

describe('friendlist', () => {
  it('Returns default state', () => {
    const state = friendlist(undefined, {});
    expect(state).toEqual(defaultState);
  });

  it('Returns previous state on action missmatch', () => {
    const state = friendlist({ friendsById: [] }, {});
    expect(state).toEqual({ friendsById: [] });
  });

  it('Adds friend to list', () => {
    const state = friendlist(undefined, {
      type: 'ADD_FRIEND',
      payload: newFriend
    });
    expect(state).toEqual({
      friendsById: [...defaultState.friendsById, newFriend]
    });
  });

  it('Removes friends by id', () => {
    const state = friendlist(undefined, {
      type: 'DELETE_FRIEND',
      id: 0
    });
    expect(state).toEqual({
      friendsById: [...defaultState.friendsById.slice(1)]
    });
  });

  it('Stars a friend by id', () => {
    const state = friendlist(undefined, {
      type: 'STAR_FRIEND',
      id: 2
    });
    expect(state.friendsById[2].starred).toBeTruthy();
  });
});
