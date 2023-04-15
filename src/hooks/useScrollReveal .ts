import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

type ScrollRevealOptions = {
  duration?: number;
  origin?: string;
  distance?: string;
  delay?: number;
  easing?: string;
  reset?: boolean;
};

const useScrollReveal = (
  ref: React.RefObject<HTMLElement>,
  options: ScrollRevealOptions = {}
) => {
  useEffect(() => {
    const sr = ScrollReveal();

    if (ref.current) {
      sr.reveal(ref.current, {
        duration: options.duration || 1500,
        origin: options.origin || "left",
        distance: options.distance || "100px",
        delay: options.delay || 300,
        easing: options.easing || "cubic-bezier(0.5, 0, 0, 1)",
        reset: options.reset || true,
      });
    }
  }, [ref]);
};

export default useScrollReveal;
