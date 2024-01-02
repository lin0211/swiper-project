import {
  answer,
  insertLast,
  slidesTemplate,
  swiperSetting,
  moveBunny,
  modalSetting
} from "./js/index.js";
import * as nodes from './js/nodes.js'

const swipers = [];

const slideTemplateOrder = [
  3, 1, 3, 2, 3, 2, 1, 3, 5, 4, 4, 3, 4, 3, 1, 1, 1, 5, 2, 3, 3, 3, 4, 1, 2,
];

slideTemplateOrder.forEach((item, index) => {
  insertLast(nodes.box[index], slidesTemplate(item));
});

nodes.box.forEach((_, index) => {
  const boxNum = `#swiper${index + 1}`;
  swipers[index] = new window.Swiper(boxNum, swiperSetting);
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
    modalSetting("success", nodes.modalText, nodes.modalImage, nodes.modal, true);
  } else {
    // modalSetting("fail", modalText, modalImage, modal);
    modalSetting("fail", nodes.modalText, nodes.modalImage, nodes.modal, false);
  }
};

nodes.completeButton.addEventListener("click", handleRouteCheck);

const handleRestart = () => {
  window.location.reload();
  nodes.completeButton.removeAttribute("disabled");
  swipers.forEach((swiper) => (swiper.allowTouchMove = true));
};

const handleClose = () => {
  nodes.modal.style.display = "none";
  nodes.completeButton.removeAttribute("disabled");
  swipers.forEach((swiper) => (swiper.allowTouchMove = true));
};

nodes.modalRestartButton.addEventListener("click", handleRestart);
nodes.modalCloseButton.addEventListener("click", handleClose);
