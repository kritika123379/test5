import React, { Component } from 'react'
import "./Form.css";

export class Form extends Component {
    render() {
        return (
            <div>
            <form class="form-inline" action="/action_page.php">
            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="Enter email" name="email"/>
            <label for="pwd">Password:</label>
            <input type="password" id="pwd" placeholder="Enter password" name="pswd"/>
            <label>
              <input type="checkbox" name="remember"/> Remember me
            </label>
            <button type="submit">Submit</button>
          </form>
            </div>
        )
    }
}

export default Form
