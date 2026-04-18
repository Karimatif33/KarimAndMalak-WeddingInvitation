import { useEffect } from "react";

export default function useParallax() {
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      document.body.style.backgroundPositionY = `${y * 0.3}px`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}