
"use client";

import { useEffect } from "react";

export default function WowInit() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target;

          if (entry.isIntersecting) {
            element.classList.add("animated");
          } else {
            element.classList.remove("animated");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const observeWowElements = (root: ParentNode) => {
      root.querySelectorAll(".wow").forEach((element) => {
        observer.observe(element);
      });
    };

    observeWowElements(document);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            if (node.matches(".wow")) {
              observer.observe(node);
            }

            observeWowElements(node);
          }
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
