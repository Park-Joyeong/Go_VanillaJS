import { Component } from "../core/component.js";
import Carousel from "../component/carousel.js";
export default class Home extends Component {
  template() {
    return `
      <div id="carousel"></div>
    `;
  }
  mounted() {
    const $carousel = this.$el.querySelector("#carousel");
    new Carousel($carousel, {});
  }

}
