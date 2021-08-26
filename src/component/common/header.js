import { Component } from "../../core/component.js";

export default class Header extends Component {
  template() {
    return `<div>
      <a href="#">Home</a>
      <a href="#about">About</a>
      <a href="#login">Login</a>
      <a href="#signup">SignUp</a>
      </div>
      `;
  }
}
