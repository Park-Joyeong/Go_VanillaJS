import { Component } from "../../core/component.js";

export default class Header extends Component {
  template() {
    return `
      <div class="div-header">
        <div class="div-logo">
          <img class="img-logo" src="../../static/images/logo.png" alt="logo">
        </div>
        <div class="div-menu">
          <a href="#">Home</a>
          <a href="https://github.com/Park-Joyeong/Go_VanillaJS" target="_blank">About</a>
          <a href="#login">Login</a>
          <a href="#signup">SignUp</a>
        </div>
      </div>
      `;
  }
}
