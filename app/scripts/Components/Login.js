import Backbone from 'backbone';
import React from 'react';
import {Link} from 'react-router';
// import store from '../store';

export default React.createClass({
// handleSubmit (e) {
//   e.preventDefault()
//   store.session.login(this.refs.email.value, this.refs.password.value)
// },


  render () {
    console.log('hi');
    return (
        <div className="login-wrapper">
          <form className="login-form" onSubmit={this.handleSubmit}>
            <input type="email" ref='email' placeholder="Email Address" />
            <input type="password" ref='password' placeholder="Password" />
            <input type="tel" ref='day' maxLength="2" placeholder="Day" />
            <input type="tel" ref='month' maxLength="2" placeholder="Month" />
            <input type="tel" ref='year' maxLength="4" placeholder="year" />
            <input type="submit" value="Log in" />
            </form>
        </div>);
  },
});
