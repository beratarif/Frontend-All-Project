const cards = document.querySelectorAll("[data-project]");
const filters = document.querySelectorAll("[data-filter]");
filters.forEach(btn => {
   btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    cards.forEach(card => {
      card.classList.toggle(
        "hidden",
        filter !== "all" && card.dataset.project !== filter
      );
    });
   });
});