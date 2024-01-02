import { slideData } from "./data.js";

let slideId = 0;

const slideTemplate = ({ src, alt }) => {
  return /* html */ `
  <div class="swiper-slide">
    <img src="./assets/${src}" alt="${alt}" />
  </div>
  `;
};

export const slidesTemplate = (Index) => {
  const rectangle = `Rectangle${Index}`;
  const rectangleData = slideData[rectangle];
  const swiperID = `swiper${++slideId}`;
  let slides = "";

  rectangleData.forEach((item) => {
    slides += slideTemplate(item);
  });

  return /*html*/ `
  <div class="swiper" id=${swiperID}>
    <div class="swiper-wrapper"> 
      ${slides}
    </div>
  </div>
  `;
};
