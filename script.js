// Hide loading overlay when page is fully loaded
window.addEventListener("load", function() {
  const overlay = document.getElementById("loading-overlay");
  overlay.style.display = "none";
});

const items = document.querySelectorAll(".nav-item");
const indicator = document.querySelector(".nav-indicator");
const sections = document.querySelectorAll("section");
const navWrapper = document.querySelector(".nav-wrapper");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navWrapper.classList.add("sticky");
  } else {
    navWrapper.classList.remove("sticky");
  }
});

function setActive(item) {
  items.forEach(i => i.classList.remove("active"));
  item.classList.add("active");
  moveIndicator(item);
}

function moveIndicator(item) {
  const navRect = item.parentElement.getBoundingClientRect();
  const itemRect = item.getBoundingClientRect();

  indicator.style.width = itemRect.width + "px";
  indicator.style.transform = `translateX(${itemRect.left - navRect.left}px)`;
}

/* Click active */
items.forEach(item => {
  item.addEventListener("click", () => {
    setActive(item);
  });
});

/* Scroll active */
window.addEventListener("scroll", () => {
  let current = null;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      current = section.id;
    }
  });

  if (!current) return;

  const activeItem = Array.from(items).find(item =>
    item.querySelector("a").getAttribute("href") === `#${current}`
  );

  if (activeItem && !activeItem.classList.contains("active")) {
    setActive(activeItem);
  }
});

/* Init */
setActive(document.querySelector(".nav-item.active"));

const bubbles = document.querySelectorAll(".bubble");
const hero = document.querySelector(".hero");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        bubbles.forEach((bubble, index) => {
          setTimeout(() => {
            bubble.style.opacity = "1";
            bubble.style.transform = "translateY(0)";
          }, index * 150);
        });
      }
    });
  },
  { threshold: 0.6 }
);

observer.observe(hero);

/* Tabs */
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    contents.forEach(c => {
      c.style.display =
        c.dataset.tabContent === tab.dataset.tab ? 'flex' : 'none';
    });
  });
});

/* Project Details */
const projects = {
  segipay: {
    title: "SEGiPay Busary System",
    subtitle: "University Financial Aid Web System",
    images: [
      "image/FYP Degree Project/FYP Degree Project.png",
      "image/FYP Degree Project/FYP Degree Project (2).png", 
      "image/FYP Degree Project/FYP Degree Project (3).png",
      "image/FYP Degree Project/FYP Degree Project (4).png",
      "image/FYP Degree Project/FYP Degree Project (5).png",
      "image/FYP Degree Project/FYP Degree Project (6).png",
      "image/FYP Degree Project/FYP Degree Project (7).png",
      "image/FYP Degree Project/FYP Degree Project (8).png"
    ],

    overview:
      "SEGiPay Bursary System is a web-based platform that centralises all student bursary billing and payment processes. It enables students to view outstanding fees, check statements, track their payment history, and make payments online in a quick and convenient manner. The system also sends automatic reminders, updates payment status in real time, and securely stores all records for easy reference. By replacing manual procedures, SEGiPay improves accuracy, reduces delays, and provides a clearer and more organised financial experience for students and bursary staff.",

    features: [
      "Integrated online payment gateway",
      "Automated payment reminders and notifications",
      "Centralised dashboard overview for students and staff",
      "AI-powered chatbot for instant assistance",
      "Outstanding fees tracking and payment status monitoring",
      "Real-time transaction and payment updates",
      "Downloadable financial statements",
      "Complete transaction history records"
    ],

    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "PHP",
      "phpMyAdmin",
      "Bootstrap",
      "Stripe Payment Gateway",
      "Rasa AI Chatbot",
      "Google reCAPTCHA"
    ],

    role: "Solely responsible for end-to-end development of SEGiPay Bursary System, including system architecture design, backend and frontend development, database management, payment gateway integration, AI chatbot implementation, testing, deployment, and maintenance.",
    live: "",
    github: "https://github.com/winson03/SEGiPay-Bursary-System-FYP2"
  },
  petopia: {
    title: "Petopia",
    subtitle: "Veterinary Appointment System",
    images: [
      "image/FYP Diploma Project/FYP Diploma Project.png",
      "image/FYP Diploma Project/FYP Diploma Project (2).png", 
      "image/FYP Diploma Project/FYP Diploma Project (3).png",
      "image/FYP Diploma Project/FYP Diploma Project (4).png",
      "image/FYP Diploma Project/FYP Diploma Project (5).png",
      "image/FYP Diploma Project/FYP Diploma Project (6).png",
      "image/FYP Diploma Project/FYP Diploma Project (7).png"
    ],

    overview:
      "Petopia is a web-based veterinary appointment system that allows pet owners to book appointments online easily. It replaces traditional phone and messaging-based scheduling, reduces clinic workload through automation, and provides transparent service pricing via a user-friendly interface to improve overall operational efficiency.",

    features: [
      "Online appointment booking system",
      "Google Maps integration for clinic location",
      "Google login for quick and secure access",
      "WhatsApp contact integration for easy communication",
      "Automated email reminders for appointments"
    ],

    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "PHP",
      "phpMyAdmin",
      "Bootstrap",
      "Google Maps API",
      "Google OAuth"
    ],

    role: "Independently designed and developed the Petopia system from concept to implementation, including UI/UX design, backend and frontend development, database management, Google Maps and Google login integration, email notification setup, testing, and deployment.",
    live: "",
    github: ""
  },
  cookin5: {
    title: "CookIn5",
    subtitle: "5-Minute Recipe Mobile App",
    images: [
      "image/Mobile Project/Mobile Project.png",
      "image/Mobile Project/Mobile Project (2).png", 
      "image/Mobile Project/Mobile Project (3).png",
      "image/Mobile Project/Mobile Project (4).png",
      "image/Mobile Project/Mobile Project (5).png"
    ],

    overview:
      "CookIn5 is a mobile application designed to help users prepare simple and tasty meals in just five minutes. The app focuses on speed, convenience, and ease of use by providing clear step-by-step instructions and precise ingredient measurements. It aims to reduce reliance on food delivery services by making home cooking quick, practical, and accessible, even for beginners or busy individuals.",

    features: [
      "User login and signup system",
      "Favourite recipes saving feature",
      "Step-by-step cooking guide",
      "Recipe duration and calorie display",
      "Detailed ingredients list with measurements",
      "User profile management"
    ],

    stack: [
      "Flutter"
    ],

    role: "Independently designed and developed the CookIn5 mobile application, including UI/UX design, feature implementation, state management, testing, and overall app architecture.",
    live: "",
    github: ""
  }
};

let slideImages = [];
let currentSlide = 0;
let autoSlideTimer = null;
const AUTO_SLIDE_DELAY = 3000;

const projectModal = document.getElementById("projectModalUniversity");

const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalImage = document.getElementById("modalImage");
const modalOverview = document.getElementById("modalOverview");
const modalFeatures = document.getElementById("modalFeatures");
const modalStack = document.getElementById("modalStack");
const modalRole = document.getElementById("modalRole");
const modalLive = document.getElementById("modalLive");
const modalGithub = document.getElementById("modalGithub");

const sliderArea = document.querySelector(".modal-slider");
const nextBtn = document.querySelector(".slide-btn.next");
const prevBtn = document.querySelector(".slide-btn.prev");

function showSlide(index, direction = "next") {
  if (!slideImages.length) return;

  modalImage.classList.remove("slide-in");
  modalImage.classList.add(
    direction === "next" ? "slide-out-left" : "slide-out-right"
  );

  setTimeout(() => {
    modalImage.src = slideImages[index];

    modalImage.classList.remove("slide-out-left", "slide-out-right");
    modalImage.classList.add("slide-in");
  }, 200);
}

function nextSlide() {
  if (slideImages.length <= 1) return;
  currentSlide = (currentSlide + 1) % slideImages.length;
  showSlide(currentSlide, "next");
}

function prevSlide() {
  if (slideImages.length <= 1) return;
  currentSlide =
    (currentSlide - 1 + slideImages.length) % slideImages.length;
  showSlide(currentSlide, "prev");
}

function startAutoSlide() {
  stopAutoSlide();
  if (slideImages.length <= 1) return;

  autoSlideTimer = setInterval(nextSlide, AUTO_SLIDE_DELAY);
}

function stopAutoSlide() {
  if (autoSlideTimer) {
    clearInterval(autoSlideTimer);
    autoSlideTimer = null;
  }
}

document.querySelectorAll(".showcase-card").forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.project;
    if (!key || !projects[key]) return;

    const p = projects[key];

    modalTitle.textContent = p.title || "";
    modalSubtitle.textContent = p.subtitle || "";

    slideImages = p.images || (p.image ? [p.image] : []);
    currentSlide = 0;
    showSlide(0);

    modalOverview.textContent = p.overview || "";

    modalFeatures.innerHTML = "";
    p.features?.forEach(f => {
      const li = document.createElement("li");
      li.textContent = f;
      modalFeatures.appendChild(li);
    });

    modalStack.innerHTML = "";
    p.stack?.forEach(s => {
      const li = document.createElement("li");
      li.textContent = s;
      modalStack.appendChild(li);
    });

    modalRole.textContent = p.role || "";

    modalLive.style.display = p.live ? "inline-block" : "none";
    modalGithub.style.display = p.github ? "inline-block" : "none";

    const overviewSection = document.querySelector(".modal-overview");

    if (p.live || p.github) {
      overviewSection.classList.add("has-links");
    } else {
      overviewSection.classList.remove("has-links");
    }

    if (p.live) modalLive.href = p.live;
    if (p.github) modalGithub.href = p.github;

    projectModal.style.display = "flex";
    document.body.style.overflow = "hidden";

    startAutoSlide();
  });
});

[sliderArea, nextBtn, prevBtn].forEach(el => {
  if (!el) return;
  el.addEventListener("mouseenter", stopAutoSlide);
  el.addEventListener("mouseleave", startAutoSlide);
});

if (nextBtn) {
  nextBtn.onclick = () => {
    stopAutoSlide();
    nextSlide();
  };
}

if (prevBtn) {
  prevBtn.onclick = () => {
    stopAutoSlide();
    prevSlide();
  };
}

function closeModal() {
  projectModal.style.display = "none";
  document.body.style.overflow = "";
  stopAutoSlide();
}

document.querySelector(".modal-close").onclick = closeModal;

projectModal.addEventListener("click", e => {
  if (e.target === projectModal) closeModal();
});

const internProjects = {
  landing: {
    title: "Landing Pages",
    subtitle: "School & Kindergarten Websites",
    images: [
      "image/Landing Page/Landing Page.png",
      "image/Landing Page/Landing Page (2).png",
      "image/Landing Page/Landing Page (3).png",
      "image/Landing Page/Landing Page (4).png"
    ],
    role:
      "Handled end-to-end delivery of responsive landing pages, from client communication and design iteration to development, deployment, SEO setup, and post-launch monitoring.",
    links: [
      { name: "Bear N Bunny Nursery & Preschool", url: "https://bearnbunny.com.my/" },
      { name: "Chrisdale Kindergarten", url: "https://www.chrisdalekindergarten.com.my/" },
      { name: "Ankiu Child Care Centre", url: "https://www.ankiuchildcare.com.my/" },
      { name: "WeKids Preschool", url: "https://www.wekids.com.my/" }
    ]
  },

  corporate: {
    title: "Corporate & E-commerce",
    subtitle: "5-Page & Online Store Websites",
    images: [
      "image/Corporate/Corporate (2).png",
      "image/Corporate/Corporate (3).png",
      "image/Corporate/Corporate (4).png",
      "image/Corporate/Corporate (5).png"
    ],
    role:
      "Handled frontend and UI/UX for selected projects, collaborated on others, communicated with clients, proposed design options, implemented approved designs, supported testing, and published final websites. Backend was developed by teammates.",
    links: [
      { name: "Handal Ceria", url: "https://handalceria.com.my/" },
      { name: "Fujihub", url: "https://fujihub.com.my/" },
      { name: "Novavista", url: "https://novavistastudios.com/" },
      { name: "CWorks", url: "https://cworkscare.com/" }
    ]
  },

  update: {
    title: "Website Updates",
    subtitle: "Maintaining & Improving Existing Sites",
    images: [
      "image/Update Websites/Update Websites (2).png",
      "image/Update Websites/Update Websites (3).png",
      "image/Update Websites/Update Websites (4).png",
      "image/Update Websites/Update Websites (5).png"
    ],
    role:
      "Handled website updates based on client requirements, suggested design and layout improvements, and implemented approved changes to enhance user experience.",
    links: [
      { name: "Makersoul", url: "https://www.makersoul.io/" },
      { name: "Nano Food", url: "https://www.nanofood.com.my/" },
      { name: "Naga Maxamp", url: "https://nagamaxamp.com/" },
      { name: "Green Journey Enterprise", url: "https://greenjourneyenterprise.com/" }
    ]
  }
};

const internModal = document.getElementById("projectModalIntern");

const internTitle = document.getElementById("internTitle");
const internSubtitle = document.getElementById("internSubtitle");
const internImage = document.getElementById("internImage");
const internLinks = document.getElementById("internLinks");
const internRole = document.getElementById("internRole");

let internSlideImages = [];
let internCurrentSlide = 0;
let internAutoSlideTimer = null;
const INTERN_AUTO_SLIDE_DELAY = 3000;

const internSliderArea = internModal.querySelector(".modal-slider");
const internNextBtn = internModal.querySelector(".slide-btn.next");
const internPrevBtn = internModal.querySelector(".slide-btn.prev");

function showInternSlide(index, direction = "next") {
  if (!internSlideImages.length) return;

  internImage.classList.remove("slide-in");
  internImage.classList.add(
    direction === "next" ? "slide-out-left" : "slide-out-right"
  );

  setTimeout(() => {
    internImage.src = internSlideImages[index];

    internImage.classList.remove("slide-out-left", "slide-out-right");
    internImage.classList.add("slide-in");
  }, 200);
}

function internNextSlide() {
  if (internSlideImages.length <= 1) return;
  internCurrentSlide =
    (internCurrentSlide + 1) % internSlideImages.length;
  showInternSlide(internCurrentSlide, "next");
}

function internPrevSlide() {
  if (internSlideImages.length <= 1) return;
  internCurrentSlide =
    (internCurrentSlide - 1 + internSlideImages.length) %
    internSlideImages.length;
  showInternSlide(internCurrentSlide, "prev");
}

function startInternAutoSlide() {
  stopInternAutoSlide();
  if (internSlideImages.length <= 1) return;

  internAutoSlideTimer = setInterval(
    internNextSlide,
    INTERN_AUTO_SLIDE_DELAY
  );
}

function stopInternAutoSlide() {
  if (internAutoSlideTimer) {
    clearInterval(internAutoSlideTimer);
    internAutoSlideTimer = null;
  }
}

/* 打开 internship modal */
document
  .querySelectorAll('.projects-showcase[data-tab-content="intern"] .showcase-card')
  .forEach(card => {
    card.addEventListener("click", () => {
      const key = card.dataset.intern;
      if (!key || !internProjects[key]) return;

      const p = internProjects[key];

      internTitle.textContent = p.title;
      internSubtitle.textContent = p.subtitle;
      internRole.textContent = p.role;

      /* images */
      internSlideImages = p.images || [];
      internCurrentSlide = 0;
      showInternSlide(0);
      startInternAutoSlide();

      internNextBtn.onclick = () => {
        stopInternAutoSlide();
        internNextSlide();
      };

      internPrevBtn.onclick = () => {
        stopInternAutoSlide();
        internPrevSlide();
      };

      [internSliderArea, internNextBtn, internPrevBtn].forEach(el => {
        if (!el) return;
        el.addEventListener("mouseenter", stopInternAutoSlide);
        el.addEventListener("mouseleave", startInternAutoSlide);
      });

      /* links */
      internLinks.innerHTML = "";

      p.links.forEach(link => {
        const a = document.createElement("a");
        a.href = link.url;
        a.target = "_blank";
        a.className = "intern-link";

        const img = document.createElement("img");
        img.src =
          "https://img.icons8.com/?size=100&id=JoX3PEZS0bxl&format=png&color=000000";
        img.alt = link.name;

        const span = document.createElement("span");
        span.textContent = link.name;

        a.appendChild(img);
        a.appendChild(span);

        internLinks.appendChild(a);
      });

      internModal.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  });

/* slider buttons */
internModal.querySelector(".next").onclick = () => {
  if (internImages.length <= 1) return;
  internIndex = (internIndex + 1) % internImages.length;
  internImage.src = internImages[internIndex];
};

internModal.querySelector(".prev").onclick = () => {
  if (internImages.length <= 1) return;
  internIndex =
    (internIndex - 1 + internImages.length) % internImages.length;
  internImage.src = internImages[internIndex];
};

/* close */
internModal.querySelector(".modal-close").onclick = () => {
  internModal.style.display = "none";
  document.body.style.overflow = "";
  stopInternAutoSlide();
};

internModal.addEventListener("click", e => {
  if (e.target === internModal) {
    internModal.style.display = "none";
    document.body.style.overflow = "";
    stopInternAutoSlide();
  }
});

/* Send Message */
emailjs.init("3fUP8vG0yRiYC19xP"); // public key

const form = document.getElementById("emailContactForm");
const btn = document.getElementById("sendBtn");
const btnText = btn.querySelector(".btn-text");
const loader = btn.querySelector(".btn-loader");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    btn.disabled = true;
    btnText.textContent = "Sending...";
    loader.classList.add("show");

    grecaptcha.ready(function () {
      grecaptcha.execute("6LfR-EcsAAAAAD-6Rn-s3NMvO0Xt7X7-rkGbLI3I", { action: "contact" }).then(function (token) {
        
        let tokenInput = form.querySelector("input[name='g-recaptcha-response']");
        if (!tokenInput) {
          tokenInput = document.createElement("input");
          tokenInput.type = "hidden";
          tokenInput.name = "g-recaptcha-response";
          form.appendChild(tokenInput);
        }
        tokenInput.value = token;

        emailjs
          .sendForm("service_g2s08c3", "template_iqfslrn", form)
          .then(() => {
            btnText.textContent = "Sent!";
            loader.classList.remove("show");
            form.reset();
            setTimeout(() => {
              btnText.textContent = "Send Message";
              btn.disabled = false;
            }, 2500);
          })
          .catch(() => {
            btnText.textContent = "Failed";
            loader.classList.remove("show");
            setTimeout(() => {
              btnText.textContent = "Send Message";
              btn.disabled = false;
            }, 2500);
          });

      });
    });
  });
}

/* Footer Year */
document.getElementById("year").textContent = new Date().getFullYear();