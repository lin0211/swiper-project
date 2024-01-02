import { insertLast } from "./js/insert.js";
import { slidesTemplate } from "./js/template/index.js";
import * as nodes from "./js/nodes.js";
import * as handlers from "./js/handlers/index.js";
import * as swiper from "./js/swiper.js";

document.addEventListener("DOMContentLoaded", () => {
  const slideTemplateOrder = [
    3, 1, 3, 2, 3, 2, 1, 3, 5, 4, 4, 3, 4, 3, 1, 1, 1, 5, 2, 3, 3, 3, 4, 1, 2,
  ];
  slideTemplateOrder.forEach((item, index) => {
    insertLast(nodes.box[index], slidesTemplate(item));
  });

  nodes.box.forEach((_, index) => {
    const boxNum = `#swiper${index + 1}`;
    swiper.list[index] = new window.Swiper(boxNum, swiper.setting);
  });

  nodes.completeButton.addEventListener("click", handlers.routeCheck);
  nodes.modalRestartButton.addEventListener("click", handlers.restart);
  nodes.modalCloseButton.addEventListener("click", handlers.close);
});
