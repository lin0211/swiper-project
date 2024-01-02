import * as nodes from "../nodes.js";
import * as swiper from "../swiper.js";
import { answer } from "./data.js";
import { moveBunny } from "../animation.js";
import { modalSetting } from "../modal.js";

/**
 * @param allowTouchMove{boolean}
 */
const enableSwiperTouch = (allowTouchMove) => {
  swiper.list.forEach((swiper) => (swiper.allowTouchMove = allowTouchMove));
};

/**
 *
 * @param enable{boolean}
 */
const enableCompleteButton = (enable) => {
  if (enable) {
    nodes.completeButton.removeAttribute("disabled");

    return;
  }

  nodes.completeButton.setAttribute("disabled", "");
}

const hideModal = () => {
  nodes.modal.style.display = "none";
}

export const restart = () => {
  window.location.reload();
  enableCompleteButton(true);
  enableSwiperTouch(true);
};

export const close = () => {
  enableCompleteButton(true);
  enableSwiperTouch(true);
};

const validate = () => {
  let isAnswer = true;
  for (let i = 0; i < swiper.list.length; i++) {
    if (!answer[`swipers[${i}]`].includes(swiper.list[i].realIndex)) {
      isAnswer = false;
      break;
    }
  }

  return isAnswer
}

export const routeCheck = async (e) => {
  e.preventDefault();
  hideModal();
  enableCompleteButton(false);
  enableSwiperTouch(false);

  if (validate()) {
    await moveBunny();
    modalSetting("success", true);
  } else {
    modalSetting("fail", false);
  }
};
