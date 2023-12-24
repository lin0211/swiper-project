export const moveBunny = () => {
  const tl = gsap.timeline({ repeat: 0 });
  tl.to("#bunny", { x: 0, y: 0, ease: "none" })
    .to("#bunny", { x: 120, ease: "none" })
    .to("#bunny", { x: 120, y: -120, ease: "none" })
    .to("#bunny", { x: 120, y: -240, ease: "none" })
    .to("#bunny", { x: 120, y: -360, ease: "none" })
    .to("#bunny", { x: 240, y: -360, ease: "none" })
    .to("#bunny", { x: 360, y: -360, ease: "none" })
    .to("#bunny", { x: 360, y: -240, ease: "none" })
    .to("#bunny", { x: 480, y: -240, ease: "none" })
    .to("#bunny", { x: 480, y: -120, ease: "none" })
    .to("#bunny", { x: 600, y: -120, ease: "none" })
    .to("#bunny", { x: 600, y: -240, ease: "none" })
    .to("#bunny", { x: 600, y: -360, ease: "none" })
    .to("#bunny", { x: 600, y: -480, ease: "none" })
    .to("#bunny", { x: 720, y: -480, ease: "none" })
    .to("#carrot", { x: 30, y: -10, scale: 0.3, ease: "none" })
    .to(".modal-wrapper", { opacity: 1, display: "block" });
};
