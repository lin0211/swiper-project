import { insertLast, slidesTemplate, swiperSetting } from "./js/index.js";

const swipers = [];
const box = document.querySelectorAll(".box");
const complete = document.querySelector(".completeBtn");
const slideTemplateOrder = [
  3, 4, 3, 2, 3, 2, 1, 3, 5, 4, 4, 3, 4, 3, 1, 1, 1, 5, 2, 3, 3, 3, 4, 1, 2,
];

slideTemplateOrder.forEach((item, index) => {
  // boxes[index].insertAdjacentHTML("afterbegin", slidesTemplate(item));
  insertLast(box[index], slidesTemplate(item));
});

box.forEach((_, index) => {
  const boxNum = `#swiper${index + 1}`;
  swipers[index] = new Swiper(boxNum, swiperSetting);
});

const handleRouteCheck = (e) => {
  e.preventDefault();
  const target = e.target;
  console.log(target);
};

complete.addEventListener("click", handleRouteCheck);
