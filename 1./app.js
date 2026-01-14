function toggleMenu(){
  const toggleBtn = document.getElementById('toggleButton');
  const navMenu = document.getElementById('navMenu');
  const closeBtn = document.getElementById('toggleCloseButton');
  toggleBtn.addEventListener("click" , () => {
    toggleBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  closeBtn.addEventListener("click", () => {
    navMenu.classList.remove('active');
  })
};

toggleMenu();