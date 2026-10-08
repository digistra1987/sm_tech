"use client";

import Script from "next/script";

export default function WowInit() {
  return (
    <Script
      src="/js/wow.min.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window !== "undefined" && (window as any).WOW) {
          new (window as any).WOW().init();
        }
      }}
    />
  );
}