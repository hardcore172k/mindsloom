//Navbar dropdown functionality

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const mobileDropdown = document.getElementById("mobileDropdown");
  const mobileCloseBtn = document.getElementById("mobileCloseBtn");

  function openMobileMenu() {
    mobileDropdown.classList.add("show");
  }

  function closeMobileMenu() {
    mobileDropdown.classList.remove("show");
  }

  mobileMenuToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    openMobileMenu();
  });

  mobileCloseBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    closeMobileMenu();
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (
      !mobileDropdown.contains(e.target) &&
      !mobileMenuToggle.contains(e.target)
    ) {
      closeMobileMenu();
    }
  });

  // Close dropdown when clicking on a navigation link
  const dropdownLinks = mobileDropdown.querySelectorAll("a");
  dropdownLinks.forEach((link) => {
    link.addEventListener("click", function () {
      closeMobileMenu();
    });
  });
});

//***********************************************************************************************************************/

//logo-header size change on scroll

document.addEventListener("DOMContentLoaded", function () {
  let header = document.querySelector("header");
  let logoImg = document.querySelector(".logo .company-logo");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.style.zIndex = "1000";
      header.style.height = "10%";
      if (logoImg) logoImg.style.width = "18%";
    } else {
      // Check if we're on mobile
      if (window.innerWidth <= 768) {
        // On mobile, keep high z-index always
        header.style.zIndex = "50000";
      } else {
        // On desktop, reset to normal z-index
        header.style.zIndex = "3";
      }
      header.style.height = "fit-content";
      if (logoImg) logoImg.style.width = "25%";
    }
  });
});

//***********************************************************************************************************************/

//get a quote modal

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("quote-wrapper");
  const openBtn = document.getElementById("get-quote-btn");
  const closeBtn = document.querySelector(".close-btn");
  const form = document.getElementById("quote-form");
  const captchaInput = document.getElementById("captcha");

  function resetForm() {
    form.reset();
  }

  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    resetForm();
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      resetForm();
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (parseInt(captchaInput.value) !== 10) {
      alert("Captcha is incorrect. Please try again.");
      return;
    }

    alert("Quote request submitted successfully!");
    modal.style.display = "none";
    resetForm();
  });
});

//***********************************************************************************************************************/

//swiper functionality
// This script initializes a Swiper instance with coverflow effect for the services section

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    var swiper = new Swiper(".swiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "1.5",
      coverflowEffect: {
        rotate: 0,
        stretch: -100, // Adjust for a stronger 3D stack
        depth: 300, // Increase depth for more layering
        modifier: 1.5, // Makes slides more prominent
        slideShadows: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      mousewheel: true,
      loop: true,
      speed: 500, // Adjust slide speed for smoother transition
      slideToClickedSlide: true, // Makes sure clicking on a slide moves only that slide
    });
  }, 500);
});

//Service Ul appearance

document.addEventListener("DOMContentLoaded", function () {
  const serviceSection = document.getElementById("services-section");
  const listItems = document.querySelectorAll(".service-ul li");

  // Function to check if the services section is in view
  function isSectionInView() {
    const sectionRect = serviceSection.getBoundingClientRect();
    return sectionRect.top < window.innerHeight && sectionRect.bottom >= 0;
  }

  // Function to add animation to list items
  function animateListItems() {
    listItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("visible");
      }, index * 300); // Adjust delay (150ms) for staggered effect
    });
  }

  // Event listener for scrolling
  window.addEventListener("scroll", function () {
    if (isSectionInView()) {
      animateListItems();
      // Remove scroll event after animation completes
      window.removeEventListener("scroll", arguments.callee);
    }
  });
});

//slider functionality
// This script handles the slider functionality for the services section

document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // Auto-slide every 4 seconds
  setInterval(nextSlide, 4000);

  // Initialize
  showSlide(currentIndex);
});

//***********************************************************************************************************************/

//About Us Section
// This script handles the "About Us" section content switching

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("about-us-btn");
  const wrappers = document.querySelectorAll(".about-us1-content-warpper");
  const contents = document.querySelectorAll(".about-us2-content");

  let currentIndex = 0;

  btn.addEventListener("click", function () {
    wrappers[currentIndex].classList.remove("active");
    contents[currentIndex].classList.remove("active");

    currentIndex = (currentIndex + 1) % wrappers.length;

    setTimeout(() => {
      wrappers[currentIndex].classList.add("active");
      contents[currentIndex].classList.add("active");
    }, 50);
  });
});

//***********************************************************************************************************************/

//Contact Form Modal

document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded successfully"); // Confirm script runs

  // Select DOM elements
  const nextBtn = document.getElementById("nextBtn");
  const formModal = document.getElementById("formModal");
  const form1 = document.getElementById("contactFormStep1");

  // Log existence of elements
  console.log("nextBtn:", nextBtn);
  console.log("formModal:", formModal);
  console.log("form1:", form1);
  console.log("Document body:", document.body.innerHTML.slice(0, 200)); // Log first 200 chars of HTML for debug

  // Check if critical elements exist
  if (!nextBtn) {
    console.error("Error: nextBtn element not found. Check ID in HTML.");
    return;
  }
  if (!formModal) {
    console.error("Error: formModal element not found. Check ID in HTML.");
    return;
  }

  // Proceed even if form1 is missing for testing
  if (!form1) {
    console.warn(
      "Warning: contactFormStep1 element not found. Modal will open without validation."
    );
  }

  // Handle "Next" button click
  nextBtn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Next button clicked");

    // Log current modal display state
    console.log("Current formModal display:", formModal.style.display);

    // Attempt to show modal
    formModal.style.display = "flex";
    document.body.style.overflow = "hidden";
    console.log(
      "Set formModal display to flex, new display:",
      formModal.style.display
    );

    // Apply validation if form1 exists
    if (form1) {
      console.log("Form 1 validity:", form1.checkValidity());
      if (!form1.checkValidity()) {
        console.log("Form 1 invalid. Check required fields (name, email).");
        form1.reportValidity();
      }
    } else {
      console.log("No form1 found, skipping validation.");
    }
  });

  // Handle modal close
  const closeModal = document.getElementById("closeModal");
  if (closeModal) {
    closeModal.addEventListener("click", function () {
      console.log("Close modal clicked");
      formModal.style.display = "none";
      document.body.style.overflow = "";
    });
  } else {
    console.error("Error: closeModal element not found.");
  }
});
