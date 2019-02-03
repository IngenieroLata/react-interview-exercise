import * as types from '../constants/ActionTypes';

const initialState = {
  friendsById: [
    {
      id: 1,
      name: 'Theodore Roosevelt',
      starred: true,
      gender: 'male'
    },
    {
      id: 2,
      name: 'Abraham Lincoln',
      starred: false,
      gender: 'male'
    },
    {
      id: 3,
      name: 'George Washington',
      starred: false,
      gender: 'male'
    }
  ]
};

export default function friends(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FRIEND:
      return {
        ...state,
        friendsById: [
          ...state.friendsById,
          {
            ...action.payload,
            id: state.friendsById.length + 1
          }
        ]
      };
    case types.DELETE_FRIEND:
      return {
        ...state,
        friendsById: state.friendsById.filter(item => item.id !== action.id)
      };
    case types.STAR_FRIEND:
      let friends = [...state.friendsById];
      let friend = friends.find(item => item.id === action.id);
      friend.starred = !friend.starred;
      return {
        ...state,
        friendsById: friends
      };

    default:
      return state;
  }
}
