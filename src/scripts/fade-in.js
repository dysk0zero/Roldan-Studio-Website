import { animate } from "@motionone/dom";

export function fadeInOnEnter(selector = "[data-animate]") {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;

        // Prevent retrigger
        observer.unobserve(el);

        animate(el, {
          opacity: [0, 1],
          transform: ["translateY(24px)", "translateY(0px)"],
        }, {
          duration: 0.6,
          delay: parseFloat(el.dataset.delay) || 0,
          easing: "ease-out",
        });
      });
    },
    {
      threshold: 0.4,
    }
  );

  elements.forEach((el) => observer.observe(el));
}
