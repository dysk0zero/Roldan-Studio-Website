// src/scripts/fade-in.js
import { animate } from "@motionone/dom";

export function fadeInOnEnter() {
  const OFFSET = 24;
  const DEFAULT_DURATION = 1.2;
  const DEFAULT_EASING = "ease-out";

  const elements = document.querySelectorAll(
    "[data-animate], [data-animate-left], [data-animate-right]"
  );

  const getTransform = (el) => {
    if (el.hasAttribute("data-animate-left"))
      return [`translateX(-${OFFSET}px)`, "translateX(0px)"];
    if (el.hasAttribute("data-animate-right"))
      return [`translateX(${OFFSET}px)`, "translateX(0px)"];
    return [`translateY(${OFFSET}px)`, "translateY(0px)"];
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      observer.unobserve(el);
      animate(el, {
        opacity: [0, 1],
        transform: getTransform(el),
      }, {
        duration: parseFloat(el.dataset.duration) || DEFAULT_DURATION,
        delay: parseFloat(el.dataset.delay) || 0,
        easing: DEFAULT_EASING,
      });
    });
  }, { threshold: 0.4 });

  elements.forEach((el) => observer.observe(el));
}
