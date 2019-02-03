import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';

class FriendList extends Component {
  render() {
    return (
      <ul className={styles.friendList}>
        {this.props.friends.map(friend => {
          return (
            <FriendListItem
              key={friend.id}
              {...friend}
              {...this.props.actions}
            />
          );
        })}
      </ul>
    );
  }
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default FriendList;
