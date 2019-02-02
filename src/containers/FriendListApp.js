import React, { Component } from 'react';
import styles from './FriendListApp.css';
import { connect } from 'react-redux';

import { addFriend, deleteFriend, starFriend } from '../actions/FriendsActions';
import { chagePage } from '../actions/PageActions';
import { FriendList, AddFriendInput, Pagination } from '../components';

class FriendListApp extends Component {
  render() {
    const { friendsById, pagination } = this.props;

    const actions = {
      addFriend: this.props.addFriend,
      deleteFriend: this.props.deleteFriend,
      starFriend: this.props.starFriend,
      chagePage: this.props.chagePage
    };

    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendInput addFriend={actions.addFriend} />
        <FriendList friends={friendsById} actions={actions} />
        <Pagination {...pagination} onPageChange={actions.chagePage} />
      </div>
    );
  }
}

function mapStateToProps({ friendlist: { friendsById }, pagination }) {
  const { limit, page } = pagination;
  return {
    friendsById: friendsById.slice(limit - limit * page, limit),
    pagination
  };
}

export default connect(
  mapStateToProps,
  {
    addFriend,
    deleteFriend,
    starFriend,
    chagePage
  }
)(FriendListApp);
