export const moveBunny = () => {
  const tl = gsap.timeline({ repeat: 0 });
  tl.to("#bunny", { x: 0, y: 0, ease: "none" })
    .to("#bunny", { x: "7.5rem", ease: "none" })
    .to("#bunny", { x: "7.5rem", y: "-7.5rem", ease: "none" })
    .to("#bunny", { x: "7.5rem", y: "-15rem", ease: "none" })
    .to("#bunny", { x: "7.5rem", y: "-22.5rem", ease: "none" })
    .to("#bunny", { x: "15rem", y: "-22.5rem", ease: "none" })
    .to("#bunny", { x: "22.5rem", y: "-22.5rem", ease: "none" })
    .to("#bunny", { x: "22.5rem", y: "-15rem", ease: "none" })
    .to("#bunny", { x: "30rem", y: "-15rem", ease: "none" })
    .to("#bunny", { x: "30rem", y: "-7.5rem", ease: "none" })
    .to("#bunny", { x: "37.5rem", y: "-7.5rem", ease: "none" })
    .to("#bunny", { x: "37.5rem", y: "-15rem", ease: "none" })
    .to("#bunny", { x: "37.5rem", y: "-22.5rem", ease: "none" })
    .to("#bunny", { x: "37.5rem", y: "-30rem", ease: "none" })
    .to("#bunny", { x: "45rem", y: "-30rem", ease: "none" })
    .to("#carrot", { x: "1.875rem", y: "-0.625rem", scale: 0.3, ease: "none" });
};
