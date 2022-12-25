
/* Global Variables */

// convert to array to use forEach
const sections = Array.from(document.getElementsByTagName("section"));
const nav_bar = document.getElementById("navbar__list");
const dummy_tag = document.createDocumentFragment();


/* Helper Functions */

// returns function to smooth scroll
function scroll_maker(sec_id) {
  return (event) => {
    event.preventDefault();
    document.getElementById(sec_id).scrollIntoView({ behavior: "smooth" });
  };
}

/* Main Functions */

// build the navigation bar
function build_nav() {
  // loop through the sections
  sections.forEach((element, index) => {
    
    // define block variables
    let a_tag = document.createElement("a");
    let li_tag = document.createElement("li");
    
    // add the properties
    a_tag.innerHTML = element.dataset.nav;
    a_tag.classList.add("menu__link");
    a_tag.href = `#section${index + 1}`;
    a_tag.onclick = scroll_maker(`section${index + 1}`);
    
    // li > a
    li_tag.appendChild(a_tag);
    dummy_tag.appendChild(li_tag);
  });

  // add the fragment to the DOM 
  // fragment > li > a > 
  nav_bar.appendChild(dummy_tag);
}

// Add class 'active' to section when near top of viewport
function observe() {
  
  // options for the observer instance
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  };

  // callback function
  let callback = (entries) => {
    // `entries[0]` as we only use the first elementt
    if (entries[0].isIntersecting) {
      // add "active" to the class list
      entries[0].target.classList.add("active");
    } else {
      // remove "active" from the class list
      entries[0].target.classList.remove("active");
    }
  };

  // create observer instance
  let observer = new IntersectionObserver(callback, options);
  
  // apply the observer to every section
  sections.forEach((element) => observer.observe(element));
}

/* Run The Script */

// after the page load 
document.addEventListener("DOMContentLoaded", () => {
  
  // Build menu
  // Scroll to section on link click
  build_nav();

  // Set sections as active
  observe();
});
