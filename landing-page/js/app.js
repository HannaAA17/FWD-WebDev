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

const sections = Array.from(document.getElementsByTagName('section'));
// const nav_bar = document.getElementById('navbar__list');
// const dummy_tag = document.createDocumentFragment();
const dummy_tag = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/* // fast scroll
function scroll_maker(sec_id){
    return () => {
        document.getElementById(sec_id).scrollIntoView();
    }
}
 */

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function build_nav() {
    sections.forEach((element, index) => {
        let a_tag = document.createElement('a');
        a_tag.innerHTML = element.dataset.nav;
        a_tag.classList.add("menu__link");
        a_tag.href = `#section${index+1}`;
        
        let li_tag = document.createElement('li');
        // li_tag.onclick = scroll_maker(`section${index+1}`);
        li_tag.appendChild(a_tag);
        dummy_tag.appendChild(li_tag);
    })
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
build_nav();
// Scroll to section on link click

// Set sections as active


