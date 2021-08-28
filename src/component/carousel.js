import { Component } from "../core/component.js";
export default class Carousel extends Component {

  href1; href2; href3; href4; href5; href6;
  imageUrl1; imageUrl2; imageUrl3; imageUrl4; imageUrl5; imageUrl6;

  setup() {
    const { arr } = this.props;
    this.href1 = arr[0][0].href;
    this.href2 = arr[0][1].href;
    this.href3 = arr[0][2].href;
    this.href4 = arr[1][0].href;
    this.href5 = arr[1][1].href;
    this.href6 = arr[1][2].href;
    this.imageUrl1 = arr[0][0].imageUrl;
    this.imageUrl2 = arr[0][1].imageUrl;
    this.imageUrl3 = arr[0][2].imageUrl;
    this.imageUrl4 = arr[1][0].imageUrl;
    this.imageUrl5 = arr[1][1].imageUrl;
    this.imageUrl6 = arr[1][2].imageUrl;
  }

  template() {
    return `
    <!-- Required font awesome -->
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
      <div class="carousel relative rounded relative overflow-hidden shadow-xl">
        <div class="carousel-inner relative overflow-hidden w-full">
          <!--Slide 1-->
          <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden=""
            checked="checked">
          <div class="carousel-item absolute opacity-0">
            <a href="${this.href1}"><img src="${this.imageUrl1}" alt="alt" style="display:inline; width:33%; height:200px;"></a>
            <a href="${this.href2}"><img src="${this.imageUrl2}" alt="alt" style="display:inline; width:33%; height:200px;"></a>
            <a href="${this.href3}"><img src="${this.imageUrl3}" alt="alt" style="display:inline; width:33%; height:200px;"></a>
          </div>
          <label for="carousel-2"
            class="control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto flex justify-center content-center"><i
              class="fas fa-angle-left mt-3"></i></label>
          <label for="carousel-2"
            class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
              class="fas fa-angle-right mt-3"></i></label>
      
          <!--Slide 2-->
          <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
          <div class="carousel-item absolute opacity-0>
            <a href="${this.href4}"><img src="${this.imageUrl4}" alt="alt" style="display:inline; width:33%; height:200px;"></a>
            <a href="${this.href5}"><img src="${this.imageUrl5}" alt="alt" style="display:inline; width:33%; height:200px;"></a>
            <a href="${this.href6}"><img src="${this.imageUrl6}" alt="alt" style="display:inline; width:33%; height:200px;"></a>
          </div>
          <label for="carousel-1"
            class=" control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
              class="fas fa-angle-left mt-3"></i></label>
          <label for="carousel-1"
            class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
              class="fas fa-angle-right mt-3"></i></label>
      
          <!-- Add additional indicators for each slide-->
          <ol class="carousel-indicators">
            <li class="inline-block mr-3">
              <label for="carousel-1"
                class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
            </li>
            <li class="inline-block mr-3">
              <label for="carousel-2"
                class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
            </li>
          </ol>
      
        </div>
      </div>
    `;
  }
}
