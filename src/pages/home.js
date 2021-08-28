import { Component } from "../core/component.js";
import Carousel from "../component/carousel.js";
import Content from "../component/content.js";
export default class Home extends Component {
  template() {
    return `
      <div id="carousel"></div>
      <div style="width:10px; height:50px;"></div>
      <div id="content"></div>
    `;
  }
  mounted() {
    const $carousel = this.$el.querySelector("#carousel");
    const $content = this.$el.querySelector("#content");

    const carouselPropsObj = this.doCarouselFetch();
    const contentPropsObj = this.doContentFetch();

    new Carousel($carousel, carouselPropsObj);
    new Content($content, contentPropsObj);
  }

  doCarouselFetch() {
    // do something...
    return {
      arr: [//Array of [[3obj],[3obj]]
        [
          { imageUrl: '../static/images/posters/1.jpg', href: "#111111" },
          { imageUrl: '../static/images/posters/2.jpg', href: "#222222" },
          { imageUrl: '../static/images/posters/3.jpg', href: "#333333" }
        ],
        [
          { imageUrl: '../static/images/posters/4.jpg', href: "#444444" },
          { imageUrl: '../static/images/posters/5.jpg', href: "#555555" },
          { imageUrl: '../static/images/posters/6.jpg', href: "#666666" }
        ]
      ]
    };
  }

  doContentFetch() {
    // do something...
    return {
      arr: [
        { imageUrl: '../static/images/posters/1.jpg', href: "#111111", title: "Aladdin" },
        { imageUrl: '../static/images/posters/2.jpg', href: "#222222", title: "Jurassic Park" },
        { imageUrl: '../static/images/posters/3.jpg', href: "#333333", title: "HELLBOY"},
        { imageUrl: '../static/images/posters/4.jpg', href: "#444444", title: "ARCHER" },
        { imageUrl: '../static/images/posters/5.jpg', href: "#555555", title: "JAWS" },
        { imageUrl: '../static/images/posters/6.jpg', href: "#666666", title: "THE DARK KNIGHT" }
      ]
    };
  }


}
