import {
  answer,
  insertLast,
  slidesTemplate,
  swiperSetting,
  moveBunny,
  modalSetting,
} from "./js/index.js";

const swipers = [];
const box = document.querySelectorAll(".box");
const complete = document.querySelector(".completeBtn");
const slideTemplateOrder = [
  3, 1, 3, 2, 3, 2, 1, 3, 5, 4, 4, 3, 4, 3, 1, 1, 1, 5, 2, 3, 3, 3, 4, 1, 2,
];
const modal = document.querySelector(".modal-wrapper");
const modalRestartBtn = document.querySelector(".modalRestartBtn");
const modalCloseBtn = document.querySelector(".modalCloseBtn");

const modalText = document.querySelector(".modalText");
const modalImg = document.querySelector(".modalImg");

slideTemplateOrder.forEach((item, index) => {
  insertLast(box[index], slidesTemplate(item));
});

box.forEach((_, index) => {
  const boxNum = `#swiper${index + 1}`;
  swipers[index] = new Swiper(boxNum, swiperSetting);
});

const handleRouteCheck = (e) => {
  e.preventDefault();
  let status = true;
  for (let i = 0; i < swipers.length; i++) {
    if (!answer[`swipers[${i}]`].includes(swipers[i].realIndex)) {
      status = false;
      break;
    }
  }

  if (status) {
    moveBunny();
    modalSetting("success", modalText, modalImg, modal, true);
  } else {
    modalSetting("fail", modalText, modalImg, modal, false);
  }
};

complete.addEventListener("click", handleRouteCheck);

const handleRestart = () => {
  window.location.reload();
};

const handleClose = () => {
  modal.style.display = "none";
};

modalRestartBtn.addEventListener("click", handleRestart);
modalCloseBtn.addEventListener("click", handleClose);
