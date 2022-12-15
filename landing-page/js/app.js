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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

const sections = Array.from(document.getElementsByTagName("section"));
const nav_bar = document.getElementById("navbar__list");
const dummy_tag = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

function scroll_maker(sec_id) {
  return (event) => {
    event.preventDefault();
    document.getElementById(sec_id).scrollIntoView({ behavior: "smooth" });
  };
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

function build_nav() {
  
  sections.forEach((element, index) => {

    let a_tag = document.createElement("a");
    let li_tag = document.createElement("li");

    a_tag.innerHTML = element.dataset.nav;
    a_tag.classList.add("menu__link");
    a_tag.href = `#section${index + 1}`;
    a_tag.onclick = scroll_maker(`section${index + 1}`);

    li_tag.appendChild(a_tag);
    dummy_tag.appendChild(li_tag);
  });
  nav_bar.appendChild(dummy_tag);
}


function observe() {

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  };

  let callback = (entries) => {

    if (entries[0].isIntersecting) {
      entries[0].target.classList.add("active");
    } else {
      entries[0].target.classList.remove("active");
    }
  };
  let observer = new IntersectionObserver(callback, options);
  sections.forEach((element) => observer.observe(element));
}

/**
 * End Main Functions
 * Begin Events
 *
 */

document.addEventListener("DOMContentLoaded", () => {
  build_nav();
  observe();
});

/**
 * End Main Functions
 * 
 */