document.querySelectorAll("[data-scroll-to]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.getElementById(link.dataset.scrollTo);
    target?.scrollIntoView({ behavior: "smooth" });
  });
});
