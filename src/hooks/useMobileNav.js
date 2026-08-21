import { useEffect, useRef, useState } from "react";

export function useMobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  function toggle() {
    setIsOpen((current) => {
      return !current;
    });
  }

  useEffect(() => {
    document.body.classList.toggle("nav-open", isOpen);

    return () => {
      document.body.classList.remove("nav-open");
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    function handlePointerDown(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  return {
    isOpen,
    open,
    close,
    toggle,
    navRef,
  };
}
