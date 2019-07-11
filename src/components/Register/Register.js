import React, {Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      })
  }

  render() {
     return (
      <div>
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
          <main className="pa4 black-80">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f3 fw6 ph0 mh0 white center">Register</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f5 white" htmlFor="name">Name</label>
                  <input 
                    className="pa2 input-reset ba bg-transparent hover-bg-washed-red white hover-red w-100" 
                    type="text" 
                    name="name"  
                    id="name" 
                    onChange={this.onNameChange}
                  />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f5 white" htmlFor="email-address">Email</label>
                  <input 
                    className="pa2 input-reset ba bg-transparent hover-bg-washed-red white hover-red w-100" 
                    type="email" 
                    name="email-address"  
                    id="email-address" 
                    onChange={this.onEmailChange}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f5 white" htmlFor="password">Password</label>
                  <input 
                    className="b pa2 input-reset ba bg-transparent hover-bg-washed-red white hover-red w-100" 
                    type="password" 
                    name="password"  
                    id="password"
                    onChange={this.onPasswordChange}
                  />
                </div>
              </fieldset>
              <div className="">
                <input 
                  onClick={this.onSubmitSignIn}
                  className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f5 dib white" 
                  type="submit" 
                  value="Register"
                />
              </div>
              <div className="lh-copy mt3">
              </div>
            </div>
          </main>
        </article>
      </div>
    );
  }
}

export default Register;