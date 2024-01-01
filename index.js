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
const completeButton = document.querySelector(".completeButton");
const slideTemplateOrder = [
  3, 1, 3, 2, 3, 2, 1, 3, 5, 4, 4, 3, 4, 3, 1, 1, 1, 5, 2, 3, 3, 3, 4, 1, 2,
];
const modal = document.querySelector(".modal-wrapper");
const modalRestartButton = document.querySelector(".modalRestartButton");
const modalCloseButton = document.querySelector(".modalCloseButton");

const modalText = document.querySelector(".modalText");
const modalImage = document.querySelector(".modalImage");

slideTemplateOrder.forEach((item, index) => {
  insertLast(box[index], slidesTemplate(item));
});

box.forEach((_, index) => {
  const boxNum = `#swiper${index + 1}`;
  swipers[index] = new Swiper(boxNum, swiperSetting);
});

const handleRouteCheck = (e) => {
  e.preventDefault();

  e.target.setAttribute("disabled", "");
  swipers.forEach((swiper) => (swiper.allowTouchMove = false));

  let isAnswer = true;
  for (let i = 0; i < swipers.length; i++) {
    if (!answer[`swipers[${i}]`].includes(swipers[i].realIndex)) {
      isAnswer = false;
      break;
    }
  }
  if (isAnswer) {
    // 애니메이션이 끝난 후 성공 모달창 활성화 시도
    // moveBunny().then(() => {
    //   modalSetting("success", modalText, modalImage, modal);
    // });
    moveBunny();
    modalSetting("success", modalText, modalImage, modal, true);
  } else {
    // modalSetting("fail", modalText, modalImage, modal);
    modalSetting("fail", modalText, modalImage, modal, false);
  }
};

completeButton.addEventListener("click", handleRouteCheck);

const handleRestart = () => {
  window.location.reload();
  completeButton.removeAttribute("disabled");
  swipers.forEach((swiper) => (swiper.allowTouchMove = true));
};

const handleClose = () => {
  modal.style.display = "none";
  completeButton.removeAttribute("disabled");
  swipers.forEach((swiper) => (swiper.allowTouchMove = true));
};

modalRestartButton.addEventListener("click", handleRestart);
modalCloseButton.addEventListener("click", handleClose);
