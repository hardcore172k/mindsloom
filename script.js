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

  // Function to show modal with scroll lock
  function showQuoteModal() {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Prevent background scrolling
    document.body.style.position = "fixed"; // Additional mobile fix
    document.body.style.width = "100%"; // Prevent layout shift
  }

  // Function to hide modal and restore scroll
  function hideQuoteModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Restore scrolling
    document.body.style.position = "static"; // Restore position
    document.body.style.width = "auto"; // Restore width
    resetForm();
  }

  // Open modal
  openBtn.addEventListener("click", () => {
    showQuoteModal();
  });

  // Close modal via close button
  closeBtn.addEventListener("click", () => {
    hideQuoteModal();
  });

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      hideQuoteModal();
    }
  });

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (parseInt(captchaInput.value) !== 12) {
      // 7 + 5 = 12, not 10
      alert("Captcha is incorrect. Please try again.");
      return;
    }

    alert("Quote request submitted successfully!");
    hideQuoteModal();
  });

  // Add escape key support to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") {
      hideQuoteModal();
    }
  });

  // Prevent modal content clicks from closing the modal
  const quoteContent = document.querySelector(".quote-content");
  if (quoteContent) {
    quoteContent.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }
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

// Include EmailJS SDK in your HTML
// <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded successfully");

  emailjs.init("Q_Zeib6NyiIsNhTtX");

  const nextBtn = document.getElementById("nextBtn");
  const submitBtn = document.getElementById("submitBtn");
  const formModal = document.getElementById("formModal");
  const closeModal = document.getElementById("closeModal");
  const form1 = document.getElementById("contactFormStep1");
  const form2 = document.getElementById("contactFormStep2");
  const successMessage = document.getElementById("successMessage");

  nextBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (form1 && !form1.checkValidity()) {
      form1.reportValidity();
      return;
    }

    formModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });

  if (closeModal) {
    closeModal.addEventListener("click", function () {
      formModal.style.display = "none";
      document.body.style.overflow = "";
    });
  }

  submitBtn.addEventListener("click", async function (e) {
    e.preventDefault();

    if (form2 && !form2.checkValidity()) {
      form2.reportValidity();
      return;
    }

    // Collect all form data
    const formData = collectFormData();

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    let websiteValue = formData.website || "Not provided";

    // If the user entered something and it doesn't start with http:// or https://, prepend https://
    if (websiteValue && !/^https?:\/\//i.test(websiteValue)) {
      websiteValue = "https://" + websiteValue;
    }

    try {
      // Send email using EmailJS
      const result = await emailjs.send("service_su9ipp5", "template_ybc68hp", {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "Not provided",
        company: formData.company || "Not provided",
        services: formData.services.join(", ") || "None selected",
        budget: formData.budget,
        timeline: formData.timeline,
        website: websiteValue,
        referral: formData.referral,
        contact_method: formData.contact_method || "Email",
        message: formData.message,
        submission_date: new Date().toLocaleString(),
      });

      console.log("Email sent successfully:", result);

      successMessage.style.display = "block";

      if (form1) form1.reset();
      if (form2) form2.reset();

      setTimeout(() => {
        formModal.style.display = "none";
        document.body.style.overflow = "";
        successMessage.style.display = "none";
      }, 2000);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      // Re-enable submit button
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit";
    }
  });

  // Function to collect all form data
  function collectFormData() {
    const data = {};

    // Step 1 data
    if (form1) {
      const form1Data = new FormData(form1);
      for (let [key, value] of form1Data.entries()) {
        data[key] = value;
      }
    }

    if (form2) {
      const form2Data = new FormData(form2);

      const services = [];
      const serviceCheckboxes = form2.querySelectorAll(
        'input[name="services"]:checked'
      );
      serviceCheckboxes.forEach((checkbox) => services.push(checkbox.value));
      data.services = services;

      for (let [key, value] of form2Data.entries()) {
        if (key !== "services") {
          data[key] = value;
        }
      }
    }

    return data;
  }

  formModal.addEventListener("click", function (e) {
    if (e.target === formModal) {
      formModal.style.display = "none";
      document.body.style.overflow = "";
    }
  });
});
