import React from "react";
import FormInput from "../form-input/form-input.components";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.style.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert(`Password ditnot match`);
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h1 className="title">I dont have an account</h1>
        <span>Sign up with email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            value={displayName}
            name="displayName"
            onChange={this.handleChange}
            required
            label="displayName"
          ></FormInput>
          <FormInput
            type="email"
            value={email}
            name="email"
            onChange={this.handleChange}
            required
            label="email"
          ></FormInput>
          <FormInput
            type="password"
            value={password}
            name="password"
            onChange={this.handleChange}
            required
            label="password"
          ></FormInput>
          <FormInput
            type="password"
            value={confirmPassword}
            name="confirmPassword"
            onChange={this.handleChange}
            required
            label="confirmPassword"
          ></FormInput>
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
