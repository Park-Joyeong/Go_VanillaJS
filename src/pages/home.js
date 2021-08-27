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

    const carouselPropsObj = this.doCarouselFetch();

    new Carousel($carousel, carouselPropsObj);
  }

  doCarouselFetch() {
    // do something...
    return {
      arr: [//Array of [[3obj],[3obj]]
        [
          { imageUrl: 'a.jpg', href:"./2123213" },
          { imageUrl: 'a.jpg', href:"./2123213" },
          { imageUrl: 'a.jpg', href:"./2123213" }
        ],
        [
          { imageUrl: 'a.jpg', href:"./2123213" },
          { imageUrl: 'a.jpg', href:"./2123213" },
          { imageUrl: 'a.jpg', href:"./2123213" }
        ]
      ]
    };
  }


}
