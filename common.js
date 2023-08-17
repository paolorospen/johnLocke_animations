const cursor = document.querySelector(".cursor");
const container = document.querySelector("main");
const cursorWidth = parseFloat(getComputedStyle(cursor).width);
const cursorHeight = parseFloat(getComputedStyle(cursor).height);

container.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX - container.offsetLeft;
  const mouseY = e.clientY - container.offsetTop;

  //   cursor.style.left = `${mouseX - cursorWidth / 2}px`;
  //   cursor.style.top = `${mouseY - cursorHeight / 2}px`;
  //   cursor.style.left = `${mouseX}px`;
  //   cursor.style.top = `${mouseY}px`;

  gsap.to(cursor, {
    left: `${mouseX}`,
    top: `${mouseY}`,
    duration: 0.3,
    ease: "sine.out",
  });
});

const hoverPoints = document.querySelectorAll(".hover-point");

hoverPoints.forEach((point) => {
  point.addEventListener("mouseenter", () => {
    cursor.classList.add("cursor-hover");
  });

  point.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursor-hover");
  });
});

const hoverPoints2 = document.querySelectorAll(".hover-point2");

hoverPoints2.forEach((point2) => {
  point2.addEventListener("mouseenter", () => {
    cursor.classList.add("cursor-hover2");
  });

  point2.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursor-hover2");
  });
});

const firstViewTl = gsap.timeline();

firstViewTl
  .to(".firstview h1", {
    autoAlpha: 1,
    stagger: 0.7,
  })
  .to(
    ".firstview h1",
    {
      autoAlpha: 0,
      stagger: 0.6,
    },
    "<+.7s"
  )
  .to(".firstview", {
    y: "-100%",
  });

let menuTl = gsap.timeline({
  scrollTrigger: {
    start: "5% top",
    trigger: "nav",
    // start: "top center",
    // markers: true,
    scrub: true,
  },
});

menuTl
  .to(".nav_p-1", {
    display: "none",
  })
  .to(".nav_p-2", {
    display: "block",
  });
