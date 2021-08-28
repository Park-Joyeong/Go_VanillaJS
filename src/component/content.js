import { Component } from "../../core/component.js";

export default class Content extends Component {
  template() {
    return `
      <ul>
      <li>
        <img src="../static/images/posters/4.jpg" style="display:inline; width:33%; height:200px;">
        <span>Alladin</span>
      </li>

      <li>hihi</li>
      </ul>
    `;
  }
}
