import { useEffect } from "react";

export function useSmoothScroll() {
  useEffect(() => {
    function handleClick(event) {
      const anchor = event.target.closest('a[href^="#"]');

      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute("href");

      if (!href || href === "#") {
        return;
      }

      const target = document.querySelector(href);

      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
}
