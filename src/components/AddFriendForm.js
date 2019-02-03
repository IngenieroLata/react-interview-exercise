import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './AddFriendForm.css';

class AddFriendForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: '',
      gender: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const { name, gender } = this.state;
    return (
      <form action="" onSubmit={this.handleSubmit} className={styles.form}>
        <div className="form-group">
          <input
            type="text"
            autoFocus="true"
            name="name"
            className={classnames('form-control', styles.addFriendInput)}
            placeholder="Type the name of a friend"
            value={name}
            onChange={this.handleChange}
          />
        </div>

        <label className="radio-inline">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={this.handleChange}
          />
          Male
        </label>
        <label className="radio-inline">
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={this.handleChange}
          />
          Female
        </label>
        <button type="submit" className="pull-right btn btn-primary btn-xs">
          Add Friend
        </button>

        <div className="clearfix" />
      </form>
    );
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addFriend(this.state);
    this.setState({ name: '', gender: '' });
  }
}

AddFriendForm.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendForm;
