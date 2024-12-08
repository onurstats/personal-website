const app = () => {
  document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#line-red-dot", {
      x: -250,
      duration: 1,
    });
    gsap.to("#header-seperator", {
      scrollTrigger: {
        trigger: "#orange",
        scrub: true,
        start: "top bottom",
        end: "top top"
      },
      left: 0,
      top: 78,
    })
    gsap.from("aside", {
      scrollTrigger: {
        trigger: "#orange",
        scrub: true,
        start: "top bottom",
        end: "top top",
      },
      x: -250,
      transformOrigin: "left center",
    });

    ScrollTrigger.create({
      trigger: "#orange",
      start: "top top",
      end: "bottom 150px",
      pin: "#orange-content",
    });

    ScrollTrigger.create({
      trigger: "#red",
      start: "top top",
      end: "bottom 150px",
      pin: "#red-content",
    });
  });
};

app();
