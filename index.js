const swiperSetting = {
  loop: true,
  effect: "flip",
  grabCursor: true,
};
const swipers = [];
const boxes = document.querySelectorAll(".box");

boxes[0].insertAdjacentHTML("afterbegin", slidesTemplate(3));
boxes[1].insertAdjacentHTML("afterbegin", slidesTemplate(4));
boxes[2].insertAdjacentHTML("afterbegin", slidesTemplate(3));
boxes[3].insertAdjacentHTML("afterbegin", slidesTemplate(2));
boxes[4].insertAdjacentHTML("afterbegin", slidesTemplate(3));
boxes[5].insertAdjacentHTML("afterbegin", slidesTemplate(2));
boxes[6].insertAdjacentHTML("afterbegin", slidesTemplate(1));
boxes[7].insertAdjacentHTML("afterbegin", slidesTemplate(3));
boxes[8].insertAdjacentHTML("afterbegin", slidesTemplate(5));
boxes[9].insertAdjacentHTML("afterbegin", slidesTemplate(4));
boxes[10].insertAdjacentHTML("afterbegin", slidesTemplate(4));
boxes[11].insertAdjacentHTML("afterbegin", slidesTemplate(3));
boxes[12].insertAdjacentHTML("afterbegin", slidesTemplate(4));
boxes[13].insertAdjacentHTML("afterbegin", slidesTemplate(3));
boxes[14].insertAdjacentHTML("afterbegin", slidesTemplate(1));
boxes[15].insertAdjacentHTML("afterbegin", slidesTemplate(1));
boxes[16].insertAdjacentHTML("afterbegin", slidesTemplate(1));
boxes[17].insertAdjacentHTML("afterbegin", slidesTemplate(5));
boxes[18].insertAdjacentHTML("afterbegin", slidesTemplate(2));
boxes[19].insertAdjacentHTML("afterbegin", slidesTemplate(3));
boxes[20].insertAdjacentHTML("afterbegin", slidesTemplate(3));
boxes[21].insertAdjacentHTML("afterbegin", slidesTemplate(3));
boxes[22].insertAdjacentHTML("afterbegin", slidesTemplate(4));
boxes[23].insertAdjacentHTML("afterbegin", slidesTemplate(1));
boxes[24].insertAdjacentHTML("afterbegin", slidesTemplate(2));

boxes.forEach((_, index) => {
  const boxNum = `#swiper${index + 1}`;
  swipers[index] = new Swiper(boxNum, swiperSetting);
});
