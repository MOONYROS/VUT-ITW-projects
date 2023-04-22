// KOD PRO FIXNI MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".navLink").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
)

// KOD PRO VETSI SKOK PRI PRESOUVANI NA POLOZKY MENU
// get the height of the fixed menu
const menuHeight = document.querySelector('.navContainer').offsetHeight + 40;

// add event listeners to all the links in the menu
document.querySelectorAll('.navContainer a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: targetPosition - menuHeight,
      behavior: 'smooth'
    });
  });
});

// The last link should go also all the way to the top
document.querySelectorAll('footer a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: targetPosition - menuHeight,
        behavior: 'smooth'
      });
    });
  });
