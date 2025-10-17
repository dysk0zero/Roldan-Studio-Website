"use client";

import React, { useEffect, useRef } from 'react';

const HeaderObserver: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const resizeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const header = document.getElementById("site-header");
    const sections = document.querySelectorAll(".light-bg, .dark-bg");

    if (!header || !sections.length) return;

    const setMode = (isLight: boolean) => {
      header.classList.remove("light-header", "dark-header");
      header.classList.add(isLight ? "light-header" : "dark-header");
    };

    const mid = window.innerHeight / 2;
    const initial = [...sections].find((el) => {
      const r = el.getBoundingClientRect();
      return r.top <= mid && r.bottom >= mid;
    });
    if (initial) setMode(initial.classList.contains("light-bg"));

    const getThreshold = () => {
      const vw = window.innerWidth;
      if (vw < 1024) return 0.2;
      if (vw < 1640) return 0.45;
      return 0.6;
    };

    const createObserver = () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setMode(entry.target.classList.contains("light-bg"));
            }
          });
        },
        {
          threshold: getThreshold(),
          rootMargin: `-${header.offsetHeight}px 0px 0px 0px`,
        }
      );

      sections.forEach((s) => observerRef.current?.observe(s));
    };

    // Initialize observer
    createObserver();

    const handleResize = () => {
      // Clear previous timeout to avoid multiple rapid updates
      if (resizeTimeoutRef.current) {
        window.clearTimeout(resizeTimeoutRef.current);
      }

      resizeTimeoutRef.current = window.setTimeout(() => {
        createObserver();
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('resize', handleResize);
      
      // Clean up timeout
      if (resizeTimeoutRef.current) {
        window.clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, []);

  return <>{children}</>;
};

export default HeaderObserver;