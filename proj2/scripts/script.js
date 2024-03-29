// CODE FOR PROGRESS BAR
const scrollProgress = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    const width = Math.min((scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100, 100); // Limit the width to a maximum of 100%
    scrollProgress.style.width = `${width}%`;
});

// CODE FOR FIXED MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", () => { // when hamburger icon is clicked
    hamburger.classList.toggle("active"); // we activate the menu
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".navLink").forEach(n => n.
    addEventListener("click", () => { // when we click it again, we remove it
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
)

// CODE FOR BETTER SCROLLING BETWEEN SECTIONS
const menuHeight = document.querySelector('.navContainer').offsetHeight + 40; // set menu height

document.querySelectorAll('.navContainer a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) { // for every link, we jump a little higher
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: targetPosition - menuHeight,
            behavior: 'smooth' // smooth-scrolling
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

// Set the options for the observer
const options = {
    root: null, // Use the document viewport as the container
    rootMargin: '0px', // No margin
    threshold: 0.4, // The element is considered in viewport when 40% of it is visible
};

// Create a new Intersection Observer
const observer = new IntersectionObserver((entries) => {
    // Loop through the entries
    entries.forEach((entry) => {
        // If the element is in viewport, add the 'active' class
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } 
        else {
            // Otherwise, remove the 'active' class
            entry.target.classList.remove('active');
        }
    });
}, options);
  
  
// Watch for changes in the visibility of elements with the class
observer.observe(document.querySelector('#headerDiv'));
observer.observe(document.querySelector('#GeneralInfo'));
observer.observe(document.querySelector('#About'));
observer.observe(document.querySelector('#School2'));
observer.observe(document.querySelector('#School1'));
observer.observe(document.querySelector('#Hobbies'));
observer.observe(document.querySelector('#Work'));
observer.observe(document.querySelector('#Contact'));
observer.observe(document.querySelector('footer img'));
observer.observe(document.querySelector('footer'));
