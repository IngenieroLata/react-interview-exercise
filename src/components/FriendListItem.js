import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './FriendListItem.css';

class FriendListItem extends Component {
  render() {
    const { id, name, gender, starFriend, starred, deleteFriend } = this.props;

    return (
      <li className={styles.friendListItem}>
        <div className={styles.friendInfos}>
          <div data-testid="name">
            <span>{name}</span>
          </div>
          <div>
            <small>xx friends in common</small>
          </div>
          {gender && (
            <div data-testid="gender">
              <small>{gender}</small>
            </div>
          )}
        </div>
        <div className={styles.friendActions}>
          <button
            data-testid="star"
            className={`btn btn-default ${styles.btnAction}`}
            onClick={() => starFriend(id)}>
            <i
              className={classnames('fa', {
                'fa-star': starred,
                'fa-star-o': !starred
              })}
            />
          </button>
          <button
            data-testid="delete"
            className={`btn btn-default ${styles.btnAction}`}
            onClick={() => deleteFriend(id)}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }
}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  starred: PropTypes.bool,
  gender: PropTypes.string,
  starFriend: PropTypes.func.isRequired,
  deleteFriend: PropTypes.func.isRequired
};

FriendListItem.defaultProps = {
  starred: false,
  gender: ''
};

export default FriendListItem;
