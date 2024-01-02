import { slideTemplateOrder } from "./js/data.js";
import { insertLast } from "./js/insert.js";
import { slidesTemplate } from "./js/template.js";
import * as nodes from "./js/nodes.js";
import * as handlers from "./js/handlers.js";
import * as swiper from "./js/swiper.js";

document.addEventListener("DOMContentLoaded", () => {
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
