import { Component } from "../../core/component.js";

export default class Content extends Component {

  createTasks(item) {
    return `
      <li>
        <a href=${item.href}>
          <img src=${item.imageUrl} width="100" height"200" style="display:inline;">
          <span>${item.title}</span>
        </a>
      </li>
    `;
  }

  template() {
    var { arr } = this.props;
    const listItems = arr.map(this.createTasks).join('');
    return `
      <ul>
        ${listItems}
      </ul>
    `;
  }
}
