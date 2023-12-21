let id = 0;

const slideTemplate = ({ src, alt }) => {
  return /* html */ `
  <div class="swiper-slide">
    <img src="./assets/${src}" alt="${alt}" />
  </div>
  `;
};

const slidesTemplate = (Index) => {
  const rectangle = `Rectangle${Index}`;
  const rectangleData = data[rectangle];
  const swiperID = `swiper${++id}`;
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
