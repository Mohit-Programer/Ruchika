function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

//javascript for about us section 
function toggleAbout() {
  const icon = document.getElementById("aboutToggle");
  const content = document.getElementById("aboutContent");

  if (content.classList.contains("show")) {
    // Collapse
    content.classList.remove("show");
    icon.classList.remove("fa-caret-up");
    icon.classList.add("fa-caret-down");
  } else {
    // Expand
    content.classList.add("show");
    icon.classList.remove("fa-caret-down");
    icon.classList.add("fa-caret-up");
  }
}


// javascript for scrollbar of serveices section
const servicesBox = document.querySelector(".services-box");
const prevBtn = document.querySelector(".swiper-button-prev");
const nextBtn = document.querySelector(".swiper-button-next");

// Scroll step = one card width
const scrollAmount = 320;

nextBtn.addEventListener("click", () => {
  servicesBox.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  servicesBox.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

function showCompletePage() {
  const moreText = document.getElementById("more-text");
  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "inline"; // show text
  } else {
    moreText.style.display = "none"; // hide again (toggle)
  }
}

// javascript for scrollbar of projects section
new Swiper(".project-wrapper", {
  loop: true,
  spaceBetween: 30,

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1400: { slidesPerView: 4 },
  },

  // Observer to detect changes
  observer: true,
  observeParents: true,

  // Optional autoplay
  autoplay: {
    delay: 4000, // pause 4 seconds on each slide
    disableOnInteraction: false,
  },
});

// javascript for go to the back to top
const homeBtn = document.querySelector(".home");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    // show after scrolling down
    homeBtn.style.display = "block";
  } else {
    homeBtn.style.display = "none";
  }
});

homeBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// javascript for scrollbar of customer review section
const swiper = new Swiper('.js-testimonials-slider', {
  grabCursor:true,
  spaceBetween:30,
  pagination: {
    el: '.js-testimonials-pagination',
    clickable:true
  },
  breakpoints: {
  0: {
    slidesPerView: 1   // mobile
  },
  767: {
    slidesPerView: 2   // tablet
  },
  1024: {
    slidesPerView: 3   // desktop
  },
}
} );

