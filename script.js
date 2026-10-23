/* ========================================
   Auvréllique — SHARED JAVASCRIPT
======================================== */

// ========================================
// 1. MOBILE NAVIGATION
// ========================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

function closeMenu() {
  if (!menuToggle || !navLinks) return;

  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  document.body.classList.remove("menu-open");
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    const nextState = !isOpen;

    navLinks.classList.toggle("open", nextState);
    menuToggle.setAttribute("aria-expanded", String(nextState));
    menuToggle.setAttribute(
      "aria-label",
      nextState ? "Close navigation" : "Open navigation"
    );

    document.body.classList.toggle("menu-open", nextState);
  });

  // Close when clicking directly on the backdrop overlay
  navLinks.addEventListener("click", (event) => {
    if (event.target === navLinks) {
      closeMenu();
    }
  });

  // Close when clicking any navigation link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close on Escape key press
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  // Reset when resizing to desktop width
  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeMenu();
    }
  });
}

// ========================================
// 2. HERO IMAGE SLIDER
// ========================================

const heroSlider = document.querySelector("#hero-slider");

if (heroSlider) {
  const slides = heroSlider.querySelectorAll(".hero-slide");
  const prevBtn = heroSlider.querySelector(".slider-prev");
  const nextBtn = heroSlider.querySelector(".slider-next");
  const counterEl = heroSlider.querySelector(".slide-counter");
  const titleEl = heroSlider.querySelector(".slide-title");

  let currentSlide = 0;
  let slideTimer = null;

  function updateSlide(index) {
    if (!slides.length) return;

    slides[currentSlide].classList.remove("active");
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");

    const currentData = slides[currentSlide];
    const totalCount = String(slides.length).padStart(2, "0");

    if (counterEl) {
      const slideIndex = currentData.dataset.index || String(currentSlide + 1).padStart(2, "0");
      counterEl.textContent = `${slideIndex} / ${totalCount}`;
    }

    if (titleEl && currentData.dataset.caption) {
      titleEl.textContent = currentData.dataset.caption;
    }
  }

  function nextSlide() {
    updateSlide(currentSlide + 1);
  }

  function prevSlide() {
    updateSlide(currentSlide - 1);
  }

  function startAutoPlay() {
    stopAutoPlay();
    slideTimer = setInterval(nextSlide, 5000);
  }

  function stopAutoPlay() {
    if (slideTimer) {
      clearInterval(slideTimer);
      slideTimer = null;
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      startAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      startAutoPlay();
    });
  }

  // Pause on desktop hover
  heroSlider.addEventListener("mouseenter", stopAutoPlay);
  heroSlider.addEventListener("mouseleave", startAutoPlay);

  // Mobile Touch Swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  heroSlider.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoPlay();
    },
    { passive: true }
  );

  heroSlider.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeDistance = touchStartX - touchEndX;

      if (Math.abs(swipeDistance) > 40) {
        if (swipeDistance > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
      startAutoPlay();
    },
    { passive: true }
  );

  // Keyboard navigation when hero is in view
  document.addEventListener("keydown", (e) => {
    if (document.activeElement && ["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
      return;
    }
    if (e.key === "ArrowLeft") {
      prevSlide();
      startAutoPlay();
    } else if (e.key === "ArrowRight") {
      nextSlide();
      startAutoPlay();
    }
  });

  // Initialize auto-play
  startAutoPlay();
}

// ========================================
// 3. COPYRIGHT YEAR
// ========================================

const yearElement = document.querySelector("#current-year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ========================================
// 4. WHATSAPP CONTACT LINKS
// ========================================

const whatsappNumber = "919131764016";

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  if (/^\d{10,15}$/.test(whatsappNumber)) {
    const message =
      "Hello Auvréllique! I'd like to know more about your services.";

    link.href =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Please configure the salon's WhatsApp number in script.js.");
    });
  }
});
