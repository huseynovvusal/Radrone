window.addEventListener("load", () => {
  window.scrollTo(0, 0);

  setTimeout(() => {
    document.querySelector(".loader").classList.add("loaded");
  }, 1000);

  const langs = document.querySelector(".langs");
  const lang = document.querySelector("button");

  lang.addEventListener("click", () => {
    langs.classList.toggle("ul");
  });

  // Reveal

  window.addEventListener("scroll", windowScroll);

  function windowScroll() {
    reveal();
    toTop();
    hightlightNav();
  }

  function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((reveal) => {
      let windowheight = window.innerHeight;
      let revealtop = reveal.getBoundingClientRect().top;
      let revealpoint = 170;

      if (revealtop < windowheight - revealpoint) {
        reveal.classList.add("reveal-active");
      }
    });
  }

  // To top

  const toTopIcon = document.querySelector(".toTop");

  function toTop() {
    if (window.scrollY > 170) {
      toTopIcon.classList.add("toTop-active");
    } else {
      toTopIcon.classList.remove("toTop-active");
    }
  }

  // Navbar

  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector("nav .container ul");

  hamburger.addEventListener("click", toggleMenu);

  function toggleMenu() {
    hamburger.classList.toggle("hamburger-active");
    menu.classList.toggle("menu-active");
  }

  // Navbar links

  const links = document.querySelectorAll("nav ul li a");

  // Svg animation

  const iconWing = document.querySelector(".logo svg #wing");

  toTopIcon.addEventListener("click", linkClickedForWing);

  let wingRotateDeg = 0;

  if (wingRotateDeg >= 360 * 3) {
    wingRotateDeg = 0;
  }

  function linkClickedForWing() {
    wingRotateDeg += 360 * 3;
    iconWing.style.transform = "rotateY(" + wingRotateDeg + "deg)";
  }

  // Hightlight Nav

  function hightlightNav() {
    if (document.querySelector("#home").getBoundingClientRect().top >= 0) {
      removeActiveFromLinks();
    } else if (
      document.querySelector("#about").getBoundingClientRect().top <=
        window.innerHeight / 3 &&
      document.querySelector("#team").getBoundingClientRect().top >=
        window.innerHeight / 3
    ) {
      removeActiveFromLinks();
      links[0].classList.add("link-active");
    } else if (
      document.querySelector("#team").getBoundingClientRect().top <=
        window.innerHeight / 3 &&
      document.querySelector("#contact").getBoundingClientRect().top >=
        window.innerHeight / 3
    ) {
      removeActiveFromLinks();
      links[1].classList.add("link-active");
    } else {
      removeActiveFromLinks();
      // links[2].classList.add("link-active");
    }
  }

  function removeActiveFromLinks() {
    links.forEach((link) => {
      link.classList.remove("link-active");
      link.addEventListener("click", () => {
        hamburger.classList.remove("hamburger-active");
        menu.classList.remove("menu-active");
      });
    });
  }
});

// Owl carousel

$(".owl-carousel").owlCarousel({
  margin: 20,
  autoplay: true,
  autoplayTimeout: 2000,
  loop: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    768: {
      items: 2,
      nav: false,
    },
    1024: {
      items: 3,
      nav: false,
    },
  },
});
