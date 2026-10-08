export const scrollToSection = (href: string, headerHeight = 150) => {
  const id = href.replace("#", "");
  const element = document.getElementById(id);

  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top + window.scrollY;

  const offsetPosition = elementPosition - headerHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });

  window.history.pushState(null, "", href);
};
