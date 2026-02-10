const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if(scrollY>=top) current = sec.id;

  });

  navLinks.forEach(link => {
    link.classList.toggle(
      "text-[var(--accent)]",
      link.getAttribute("href")=== `#${current}`
    );
  });
});