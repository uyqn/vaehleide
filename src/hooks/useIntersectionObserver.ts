import { RefObject, useEffect, useRef, useState } from "react";

export const useIntersectionObserver = <T extends HTMLElement>(
  options: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  },
) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return { ref, isVisible };
};
