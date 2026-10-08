"use client";

import Script from "next/script";

export default function WowInit() {
  return (
    <Script
      src="/js/wow.min.js"
      strategy="afterInteractive"
      onLoad={() => {
        // console.log("WOW script loaded");
        if (typeof window !== "undefined" && (window as any).WOW) {
          // console.log("WOW found");
          const wow = new (window as any).WOW({
            live: false,
          });
          wow.init();
          // console.log("WOW initialized");
        } else {
          console.log("WOW NOT FOUND");
        }
      }}
    />
  );
}