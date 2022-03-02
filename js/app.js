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
const navList = document.getElementById('navbar__list');
const sections = (document.querySelectorAll('section'));
let ulItems = sections.length;
const toTop = document.getElementById("to-top");
const menulink = document.querySelectorAll("menu__link")

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

// build the nav
const createNavBar = () => {
    let navItem = '';
    sections.forEach(section => {
        const sectionId = section.id;
        const sectionDetails = section.dataset.nav;
        navItem += `<li><a class="menu__link" href="#${sectionId}">${sectionDetails}</a></li>`;
    });
    navList.innerHTML = navItem;
};
createNavBar();


// Add class 'active' to section when near top of viewport

function checkViewport(element) {
    const positionOfSection = element.getBoundingClientRect();
    return (
        positionOfSection.top >= 0 &&
        positionOfSection.left >= 0 &&
        positionOfSection.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        positionOfSection.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

function getActiveClass() {
    for (let i = 0; i < sections.length; i++) {
        if (checkViewport(sections[i])) {
            sections[i].classList.add("your-active-class");
        } else {
            sections[i].classList.remove("your-active-class");
        }
    }
}
createNavBar();
window.addEventListener("scroll", getActiveClass);


// Scroll to anchor ID using scrollTO event
function scrollToNavItem(event) {
    console.log(event.target.innerHTML);
    const dataNavItem = event.target.innerHTML;
    const viewSection = document.querySelector(`[data-nav^="${dataNavItem}"]`);
    viewSection.scrollIntoView({ behavior: "smooth" });
}
// Add active class to navbar links

for (let i = 0; i < menulink.length; i++) {
    menulink[i].addEventListener("click", function() {
        console.log(1)
        const activeLink = document.getElementsByClassName("menu__link");
        for (let i = 0; i < menulink.length; i++) {
            activeLink[i].classList.remove("active");
        }
        console.log(this)
        this.classList.add("active");
        scrollToNavItem
    });
}


// Scroll to the top on click
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active
