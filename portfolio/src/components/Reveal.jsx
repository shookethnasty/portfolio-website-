import React, { useEffect, useRef, useState } from "react";

/**
 * Reveal: re-animates every time it enters viewport.
 * - Adds "animate-reveal" when visible
 * - Removes it when not visible (so it can replay)
 */
const Reveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // when section/card enters view => play
        if (entry.isIntersecting) setActive(true);
        // when leaves view => reset so it can replay next time
        else setActive(false);
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={active ? "animate-reveal" : "reveal-hidden"}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
