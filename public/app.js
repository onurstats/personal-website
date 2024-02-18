
const app = () => {
  const logo = document.getElementById("hero-logo");

  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
  });

  scroll.on("scroll", (e) => {
    const delta = e.delta.y;
    const scaleX = (300 - (300 - delta)) / 300;
    const scale = 0.7 - scaleX;

    logo.style.position = "fixed";
    logo.style.transform = `translateX(-${delta * 3}px)`;
    if (scale > 0.3) {
      logo.style.scale = scale;

    }
  });
}

app();
