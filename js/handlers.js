import * as nodes from "./nodes.js";
import { swipers } from "./swiper.js";
import { answer } from "./data.js";
import { moveBunny } from "./animation.js";
import { modalSetting } from "./modal.js";

export const restart = () => {
  window.location.reload();
  nodes.completeButton.removeAttribute("disabled");
  swipers.forEach((swiper) => (swiper.allowTouchMove = true));
};

export const close = () => {
  nodes.modal.style.display = "none";
  nodes.completeButton.removeAttribute("disabled");
  swipers.forEach((swiper) => (swiper.allowTouchMove = true));
};

export const routeCheck = (e) => {
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
