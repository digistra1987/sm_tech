'use client';

import { useEffect, useState } from "react";

export const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleChange = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleChange(); // initial

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return {
    isMobile,
    isDesktop: isMobile === null ? null : !isMobile,
    isLoading: isMobile === null,
  };
};