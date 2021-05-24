/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

// returns a static (not live) NodeList
const sections = document.querySelectorAll('section');
const ul = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// Build the nav & Scroll to section on link click
function buildNav() {
  for (let section of sections) {
    const sectionId = section.id;
    // exposes a map of strings (DOMStringMap) with an entry for each data-* attribute - https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/dataset
    const sectionDataNav = section.dataset.nav;

    const li = document.createElement('li');
    const liContent = `<a class="menu__link" href="#${sectionId}">${sectionDataNav}</a>`;

    li.innerHTML = liContent;
    ul.appendChild(li);

    // Scroll to section on link click
    li.addEventListener('click', (event) => {
      event.preventDefault();
      section.scrollIntoView({
        behavior: 'smooth',
      });
    });
  }
}

// Add class 'active' to section when near top of viewport
function setSectionActive() {
  sections.forEach((section) => {
    const bounding = section.getBoundingClientRect();
    if (bounding.top > 0) {
      section.classList.add('your-active-class');
    } else {
      section.classList.remove('your-active-class');
    }
  });
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build the nav & Scroll to section on link click
buildNav();

// Set sections as active
window.addEventListener('scroll', setSectionActive);
