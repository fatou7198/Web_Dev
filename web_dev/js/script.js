console.log("hello world");
const myName = "Fatoumata Camara";
const h1 = document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);

//h1.addEventListener("click", function () {
// h1.textContent = myName;
// h1.style.backgroundColor = "red";
// h1.style.padding = "5rem";
//});

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;
/////////////////////////////////////////////////////////////////////
//make mobile navigation work//
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
/////////////////////////////////////////////////////////////////////
//smoth scrolling animation//

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    //scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    if (href !== "#" && href.startsWith("#")) console.log(href);
  });
});

///////////////////////////////////////////////////////////
//STICKY NAVIGATION
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
