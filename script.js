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

const projectModal = document.getElementById("projectModal");

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

window.addEventListener("load", closeModal);