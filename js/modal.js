import * as nodes from "./nodes.js";

const modalData = {
  success: {
    message: "축하합니다! 토끼가 당근을 발견했네요!",
    imgSrc: "../assets/modal-success.png",
    imgAlt: "당근을 들고 있는 토끼",
  },
  fail: {
    message: "다시 한번 토끼에게 당근을 찾아주세요!",
    imgSrc: "../assets/modal-fail.png",
    imgAlt: "눈물 흘리는 토끼",
  },
};

/**
 * @param status{'success' | 'fail'}
 * @param animation{boolean}
 */
export const modalSetting = (
  status,
  animation
) => {
  const { message, imgSrc, imgAlt } = modalData[status];
  nodes.modalText.textContent = message;
  nodes.modalImage.src = imgSrc;
  nodes.modalImage.alt = imgAlt;
  if (animation) return;
  nodes.modal.style.display = "block";
};
