// console.time("start");
let takeBtn = document
  .querySelector("#take-btn")
  .addEventListener("click", () => {
    window.scrollBy({
      top: 700,
      left: 0,
      behavior: "smooth",
    });
    console.log("working");
  });

gsap.from(".nav-icon, .nav-elements", {
  y: -100,
  opacity: 0,
  // stagger: 0.6,
});
gsap.from(".hero-text h1, .hero-text p", {
  x: -400,
  opacity: 0,
  // stagger: 0.3,
});

let tl = gsap.timeline();
gsap.from(".about-me-left", {
  // scale: 2,
  x: -500,
  opacity: 0,
  // duration: 1,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".about-me-left",
    scroller: "body",
    // markers: true,
    start: "top 40%",
    end: "top 25%",
  },
});
gsap.from(".about-me-t1", {
  // scale: 0,
  x: 500,
  opacity: 0,
  // duration: 1,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".about-me-t1",
    scroller: "body",
    start: "top 40%",
    end: "top 25%",
  },
});
// about me text
gsap.from(".t2-inner-text", {
  y: 100,
  duration: 0.4,
  opacity: 0,
  stagger: 0.4,
  // scale: 2,
  scrollTrigger: {
    trigger: ".t2-inner-text",
    scroller: "body",
  },
});
gsap.from("#take-btn", {
  x: -500,
  opacity: 0,

  scrollTrigger: {
    trigger: "#take-btn",
    scroller: "body",
    // markers: true,
    start: "top 90%",
    end: "top 80%",
    scrub: 1,
  },
});

// let tl2=gsap.timeline();

// skills
// let tlImg = gsap.timeline();
gsap.from(".skill-individual > p,.skill-individual > img", {
  opacity: 0,
  scale: 2,
  // duration: 0.5,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".skill-individual > p,.skill-individual > img",
    // markers: true,
    start: "top 30%",
    end: "end 20%",
    // scrub: 4,
  },
});
gsap.from(".projects", {
  opacity: 0,
  scale: 0,
  // x: -300,
  scrollTrigger: {
    trigger: ".projects",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "end 55%",
    // scrub: 4,
    // repeat: -1,
  },
});

// hemburger
let hemburger = document.getElementById("hemburger");
let sidebar = document.querySelector(".sidebar");
let cross_menu = document.querySelector(".cross-menu");
hemburger.addEventListener("click", () => {
  if (sidebar.style.display == "none") sidebar.style.display = "flex";
  else sidebar.style.display = "flex";
  console.log("add", ul.classList);
});

cross_menu.addEventListener("click", () => {
  sidebar.style.display = "none";
});
// hemburger.removeEventListener("click", () => {
//   ul.classList.remove = "nav-elements-ul";
//   console.log("remove", ul.classList);
// });
