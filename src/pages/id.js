import { Component } from "../core/component.js";
import { parseCurrentUrl } from "../core/router.js";

export default class DetailPage extends Component {
  setup() {
    this.$state = {
      queryId: parseCurrentUrl().routes.slice(1),
    };
  }
  template() {
    return `<div>ID: ${this.$state.queryId}</div>`;
  }
}
