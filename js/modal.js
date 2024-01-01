import { modalData } from "./data.js";

export const modalSetting = (
  status,
  nodeText,
  nodeImg,
  nodeModal,
  animation
) => {
  const { message, imgSrc, imgAlt } = modalData[status];
  nodeText.textContent = message;
  nodeImg.src = imgSrc;
  nodeImg.alt = imgAlt;
  if (animation) return;
  nodeModal.style.display = "block";
};
