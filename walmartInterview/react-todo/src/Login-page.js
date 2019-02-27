import React, { Component } from 'react';
import Todos from './List';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
      showResults: false
    };
  }

   dismissError = () => {
    this.setState({ error: '' });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    if (!this.state.username ) {
      return this.setState({ error: 'Username is required' });
    }
    

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }
    // if(!strongRegex.test(!this.state.password)){
    //     return this.setState({ error: 'Please enter valid password!' });
    // }
  

    return this.setState({ error: '' });
  }

  handleUserChange = (evt) => {
    this.setState({
      username: evt.target.value,
    });
  };

  handleLogin = () => {
    this.setState({ showResults: true });
    
  };
  handlePassChange = (evt) => {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    return (
      <div class="ui fluid card">
        <form class="ui form" method="POST" onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
          <div class="field">
          <label>User Name</label>
          <input type="text" data-test="username" placeholder="username" value={this.state.username} onChange={this.handleUserChange} />
          </div>
          
          <div class="field">
          <label>Password</label>
          <input type="password" data-test="password" placeholder="password" value={this.state.password} onChange={this.handlePassChange} />
          </div>
          

          <button class="ui primary labeled icon button" type="submit" onClick={this.handleLogin} className="button">
          <i class="unlock alternate icon"></i>
          Login
        </button>
        { this.state.showResults ? <Todos /> : null }
        </form>
      </div>
    );
  }
}

export default LoginPage;