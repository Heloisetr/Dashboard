import React, {Component} from 'react';

export class BodyLog extends Component {
    render() {
      return (
        <div className="App_Body_Forms">
            <form method="POST">
                <h3>Log In to your account</h3>
                <input type="email" name="email" placeholder="Email" required/><br/>
                <input type="password" name="pwd" placeholder="Password" required/><br/>
                <input type="submit" value="Log In" name="submit"/>   
                <p>Need an account ? <a href="">Sign up</a></p>
            </form>

        </div>
      );
    }
  }

export class BodySign extends Component {
    render() {
        return (
        <div className="App_Body_Forms">
            <form method="POST">
                <h3>Create your account</h3>
                <input type="text" name="name" placeholder="Name" required/><br/>
                <input type="text" name="firstname" placeholder="Firstname" required/><br/>
                <input type="email" name="email" placeholder="Email" required/><br/>
                <input type="password" name="pwd" placeholder="Password" required/><br/>
                <input type="submit" value="Sign Up" name="submit"/>   
            </form>
        </div>  
        )
    }
}