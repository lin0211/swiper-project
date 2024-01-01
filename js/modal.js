import { modalData } from "./data.js";

export const modalSetting = (status, nodeText, nodeImg, nodeModal) => {
  const { message, imgSrc, imgAlt } = modalData[status];
  nodeText.textContent = message;
  nodeImg.src = imgSrc;
  nodeImg.alt = imgAlt;
  nodeModal.style.display = "block";
};
