import { useEffect } from "react";

export default function HeaderThemeWatcher() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>("#site-header");
    const sections = () =>
      Array.from(document.querySelectorAll(".light-bg, .dark-bg")) as Element[];
    if (!header || sections().length === 0) return;

    let ticking = false;

    const applyTheme = (el: Element | null) => {
      if (!el) return;
      const isLight = el.classList.contains("light-bg");
      header.classList.toggle("light-header", isLight);
      header.classList.toggle("dark-header", !isLight);
    };

    const pickSectionAtLine = () => {
      const y = header.getBoundingClientRect().bottom + 1;
      const x = Math.max(0, Math.min(window.innerWidth - 1, window.innerWidth / 2));
      let node = document.elementFromPoint(x, y);
      while (node && node !== document.body) {
        if (
          (node as Element).classList?.contains("light-bg") ||
          (node as Element).classList?.contains("dark-bg")
        ) {
          return node as Element;
        }
        node = (node as HTMLElement).parentElement;
      }
      const yAbs = y;
      let best: Element | null = null;
      let bestDist = Infinity;
      for (const s of sections()) {
        const r = (s as HTMLElement).getBoundingClientRect();
        if (yAbs >= r.top && yAbs <= r.bottom) {
          const d = Math.abs(r.top - yAbs);
          if (d < bestDist) {
            best = s;
            bestDist = d;
          }
        }
      }
      return best;
    };

    const update = () => {
      ticking = false;
      applyTheme(pickSectionAtLine());
    };

    const schedule = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const mo = new MutationObserver(schedule);
    mo.observe(document.body, { childList: true, subtree: true, attributes: true });

    schedule();

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      mo.disconnect();
    };
  }, []);

  return null;
}
