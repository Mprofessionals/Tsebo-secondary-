// Tsebo Secondary School — Interactive Application Logic (Phuthaditjhaba, Free State)

export const SCHOOL_INFO = {
  name: "Tsebo Secondary School",
  alias: "Official Tsebo Secondary School (Tsebo S/S)",
  motto: "You Can • Tsebo ke Lesedi (Knowledge is Light)",
  logo: "/images/tsebo_logo.jpg",
  type: "Public Co-Educational High School (Grade 8 – Grade 12)",
  address: "Ha-Rankopane Village, Motebang Road, Phuthaditjhaba, 9866, Free State",
  postalAddress: "Private Bag X78, Phuthaditjhaba, 9866",
  district: "Thabo Mofutsanyana Education District, Free State",
  learnersCount: "1,114 Learners",
  educatorsCount: "37 Qualified Educators",
  matricPassRate: "97% Matric Pass Rate",
  phone: "058 713 0122",
  phoneAlt: "058 713 0150",
  email: "tsebosecondary@gmail.com",
  emailAlt: "info@tsebosecondary.co.za",
  operatingHours: "Monday – Friday: 07:30 – 15:30 (Matric Extra Classes to 16:30)"
};

// Academic Streams
export const ACADEMIC_STREAMS = [
  {
    id: "sciences",
    title: "Science & Technology Stream",
    grades: "Grade 10 to Grade 12",
    tagline: "Cultivating future engineers, medical professionals, and data scientists.",
    subjects: [
      "Physical Sciences (Physics & Chemistry)",
      "Life Sciences (Biology & Ecology)",
      "Pure Mathematics",
      "Technical Sciences & ICT Literacy",
      "English First Additional Language",
      "Sesotho Home Language",
      "Life Orientation"
    ],
    features: [
      "Dedicated laboratory practical experiments and scientific apparatus",
      "Saturday morning problem-solving clinics with top educators",
      "Annual National Science Olympiad and Eskom Expo participation"
    ]
  },
  {
    id: "commerce",
    title: "Commercial & Business Stream",
    grades: "Grade 10 to Grade 12",
    tagline: "Empowering visionary accountants, economists, and corporate innovators.",
    subjects: [
      "Accounting & Financial Management",
      "Business Studies & Enterprise",
      "Economics & Macro Markets",
      "Mathematical Literacy / Pure Mathematics",
      "English First Additional Language",
      "Sesotho Home Language",
      "Life Orientation"
    ],
    features: [
      "Real-world business case simulations and entrepreneurship days",
      "Auditing and financial bookkeeper foundational training",
      "University Commerce faculty admission readiness programs"
    ]
  },
  {
    id: "humanities",
    title: "Humanities & Social Sciences Stream",
    grades: "Grade 10 to Grade 12",
    tagline: "Inspiring future jurists, educators, historians, and civic leaders.",
    subjects: [
      "Geography & Environmental Studies",
      "History & African Heritage",
      "Tourism & Hospitality Foundations",
      "Mathematical Literacy",
      "English First Additional Language",
      "Sesotho Home Language (Literature & Poetry)",
      "Life Orientation"
    ],
    features: [
      "Field excursions in the scenic Maluti / Drakensberg mountain biome",
      "Model United Nations and formal parliamentary debate team",
      "Indigenous knowledge systems and cultural preservation"
    ]
  },
  {
    id: "junior",
    title: "Junior GET Phase (Grade 8 & 9)",
    grades: "Grade 8 & Grade 9",
    tagline: "Solidifying foundational academic rigor and holistic career orientation.",
    subjects: [
      "Mathematics & Numeracy",
      "Natural Sciences (Physics & Biology)",
      "Economic & Management Sciences (EMS)",
      "Social Sciences (History & Geography)",
      "Technology & Technical Drawing Basics",
      "Creative Arts (Visual Arts & Drama)",
      "Languages: Sesotho HL & English FAL",
      "Life Orientation"
    ],
    features: [
      "Dedicated subject choice diagnostic testing for Grade 10",
      "Mentorship pairing with Grade 12 high-achievers",
      "Remedial reading and mathematics accelerator programs"
    ]
  }
];

// Extramurals
export const EXTRAMURALS = [
  {
    category: "sports",
    name: "Soccer (Tsebo First XI)",
    grades: "U/15, U/17 & Senior Boys Squads",
    desc: "Renowned football team competing across Thabo Mofutsanyana district."
  },
  {
    category: "sports",
    name: "Netball Stars",
    grades: "Junior & Senior Girls Teams",
    desc: "High-energy district tournaments, court agility, and dedicated teamwork."
  },
  {
    category: "sports",
    name: "Athletics & Mountain Cross-Country",
    grades: "All Grades",
    desc: "High-altitude endurance training along the scenic Phuthaditjhaba slopes."
  },
  {
    category: "sports",
    name: "Chess Champions",
    grades: "Grade 8 – 12",
    desc: "Strategic tactical training, regional tournaments, and mental sharpness."
  },
  {
    category: "culture",
    name: "Choral Music & Choir",
    grades: "All Grades",
    desc: "Award-winning choral performances at SASCE (South African Schools Choral Eisteddfod)."
  },
  {
    category: "culture",
    name: "Sesotho Traditional Dance & Poetry",
    grades: "All Grades",
    desc: "Preserving Basotho cultural heritage, Mokhibo, Mohobelo, and praise poetry (Lithoko)."
  },
  {
    category: "culture",
    name: "Debating & Public Speaking",
    grades: "Grade 8 – 12",
    desc: "Critical discourse, provincial competitions, and confident articulation."
  },
  {
    category: "culture",
    name: "RCL Leadership & Peer Mentoring",
    grades: "Elected Learner Leaders",
    desc: "Active Representative Council of Learners driving student welfare and community charity."
  }
];

// Events & Announcements
export const UPCOMING_EVENTS = [
  {
    day: "14",
    month: "SEP",
    title: "Grade 12 Spring Matric Revision Camp",
    time: "08:00 AM – 16:00 PM",
    venue: "Tsebo Examination Hall",
    category: "Matric 2026"
  },
  {
    day: "22",
    month: "SEP",
    title: "RCL Committee Annual Leadership Summit & Cultural Day",
    time: "09:00 AM – 15:00 PM",
    venue: "School Quadrangle",
    category: "RCL Event"
  },
  {
    day: "06",
    month: "OCT",
    title: "Term 4 SGB & Parent Consultation Assembly",
    time: "14:00 PM – 17:00 PM",
    venue: "Main Hall, Ha-Rankopane",
    category: "Parents/SGB"
  },
  {
    day: "21",
    month: "OCT",
    title: "Class of 2026 Matric Valedictory & Honours Service",
    time: "10:00 AM – 13:30 PM",
    venue: "Phuthaditjhaba Civic Hall",
    category: "Celebration"
  },
  {
    day: "05",
    month: "NOV",
    title: "2027 Grade 8 Enrolment & Document Verification Day",
    time: "08:30 AM – 14:00 PM",
    venue: "Administration Wing",
    category: "Admissions"
  }
];

// State
let activeStreamId = "sciences";
let activeExtramuralCategory = "all";

export function initApp() {
  renderAcademicStreams();
  renderExtramurals();
  renderEvents();
  setupEventListeners();
  setupNavbarScroll();
}

function renderAcademicStreams() {
  const tabsContainer = document.getElementById("streamTabsContainer");
  const contentContainer = document.getElementById("streamContentContainer");
  if (!tabsContainer || !contentContainer) return;

  tabsContainer.innerHTML = ACADEMIC_STREAMS.map(stream => `
    <button class="academic-filter-pill ${stream.id === activeStreamId ? 'active' : ''}" data-stream-id="${stream.id}">
      ${stream.title}
    </button>
  `).join('');

  const current = ACADEMIC_STREAMS.find(s => s.id === activeStreamId) || ACADEMIC_STREAMS[0];

  contentContainer.innerHTML = `
    <div class="row g-4 align-items-center">
      <div class="col-12 col-lg-7">
        <div class="p-4 p-md-5 bg-white border border-royal-subtle rounded-3 shadow-sm">
          <div class="d-inline-block px-3 py-1 bg-gold-light text-royal-dark rounded-pill fw-bold text-uppercase mb-3" style="font-size: 0.75rem; letter-spacing: 0.08em;">
            ${current.grades}
          </div>
          <h3 class="font-serif-school text-royal mb-3 fw-bold">${current.title}</h3>
          <p class="text-muted lead mb-4" style="font-size: 1rem;">${current.tagline}</p>
          
          <h5 class="text-royal fw-bold mb-3" style="font-size: 0.95rem; letter-spacing: 0.05em; text-transform: uppercase;">
            <i class="bi bi-book-half text-gold me-2"></i>Curriculum & Core Subjects
          </h5>
          <div class="row g-2 mb-4">
            ${current.subjects.map(s => `
              <div class="col-12 col-sm-6">
                <div class="d-flex align-items-start gap-2 p-2 bg-light-soft rounded border border-light">
                  <i class="bi bi-check-circle-fill text-gold mt-1" style="font-size: 0.85rem;"></i>
                  <span style="font-size: 0.88rem; font-weight: 500;">${s}</span>
                </div>
              </div>
            `).join('')}
          </div>

          <h5 class="text-royal fw-bold mb-3" style="font-size: 0.95rem; letter-spacing: 0.05em; text-transform: uppercase;">
            <i class="bi bi-award-fill text-gold me-2"></i>Academic Stream Highlights
          </h5>
          <ul class="list-unstyled d-flex flex-column gap-2 mb-4">
            ${current.features.map(f => `
              <li class="d-flex align-items-center gap-2 text-muted" style="font-size: 0.88rem;">
                <i class="bi bi-arrow-right-short text-royal fs-5"></i>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>

          <button class="btn btn-tsebo-primary trigger-apply-modal" data-stream="${current.title}">
            <i class="bi bi-pencil-square me-1"></i>
            <span>Apply for ${current.title}</span>
          </button>
        </div>
      </div>

      <div class="col-12 col-lg-5">
        <div class="position-relative">
          <img src="/images/tsebo_matric_learners_1787121514762.jpg" alt="Academics at Tsebo Secondary School" class="img-fluid rounded-3 shadow-md border border-royal-subtle" style="width: 100%; height: 420px; object-fit: cover;" />
          <div class="position-absolute bottom-0 start-0 end-0 p-4 text-white rounded-bottom" style="background: linear-gradient(0deg, rgba(7,34,71,0.95) 0%, rgba(7,34,71,0.7) 100%);">
            <div class="d-flex align-items-center gap-2 mb-1">
              <span class="badge bg-success fw-bold">97% Pass Rate</span>
              <span class="text-gold-bright fw-bold" style="font-size: 0.85rem;">Free State DBE Top Performer</span>
            </div>
            <p class="mb-0 text-white-50" style="font-size: 0.8rem;">Rigorous academic discipline and dedicated educator mentorship in Phuthaditjhaba.</p>
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach tab click events
  tabsContainer.querySelectorAll(".academic-filter-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      activeStreamId = btn.getAttribute("data-stream-id") || "sciences";
      renderAcademicStreams();
    });
  });

  // Attach Apply trigger
  contentContainer.querySelectorAll(".trigger-apply-modal").forEach(btn => {
    btn.addEventListener("click", () => {
      openAdmissionsModal();
    });
  });
}

function renderExtramurals() {
  const container = document.getElementById("extramuralsContainer");
  if (!container) return;

  const filtered = EXTRAMURALS.filter(e => {
    return activeExtramuralCategory === 'all' || e.category === activeExtramuralCategory;
  });

  container.innerHTML = filtered.map(item => `
    <div class="col-12 col-sm-6 col-lg-3">
      <div class="feature-box">
        <div class="icon-badge ${item.category === 'sports' ? 'bg-royal text-white' : 'bg-gold-light text-royal-dark'}">
          <i class="bi ${item.category === 'sports' ? 'bi-trophy-fill' : 'bi-stars'}"></i>
        </div>
        <div class="text-uppercase fw-bold text-gold mb-1" style="font-size: 0.72rem; letter-spacing: 0.1em;">
          ${item.category === 'sports' ? 'Sports & Athletics' : 'Culture & Arts'}
        </div>
        <h4 class="text-royal fw-bold mb-2" style="font-size: 1.15rem;">${item.name}</h4>
        <p class="text-muted mb-3" style="font-size: 0.84rem; min-height: 42px;">${item.desc}</p>
        <div class="pt-2 border-top border-light text-muted" style="font-size: 0.78rem;">
          <i class="bi bi-people me-1 text-royal"></i> ${item.grades}
        </div>
      </div>
    </div>
  `).join('');
}

function renderEvents() {
  const container = document.getElementById("eventsContainer");
  if (!container) return;

  container.innerHTML = UPCOMING_EVENTS.map(ev => `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="p-4 bg-white border border-royal-subtle rounded-3 shadow-sm h-100 d-flex flex-column justify-content-between">
        <div>
          <div class="d-flex align-items-center gap-3 mb-3">
            <div class="event-badge-date">
              <span class="fw-bold fs-5">${ev.day}</span>
              <span style="font-size: 0.7rem; letter-spacing: 0.05em;">${ev.month}</span>
            </div>
            <div>
              <span class="badge bg-gold-light text-royal-dark mb-1" style="font-size: 0.7rem;">${ev.category}</span>
              <div class="text-muted" style="font-size: 0.78rem;">
                <i class="bi bi-clock me-1 text-royal"></i>${ev.time}
              </div>
            </div>
          </div>
          <h4 class="text-royal fw-bold mb-2" style="font-size: 1.05rem;">${ev.title}</h4>
          <p class="text-muted mb-3" style="font-size: 0.84rem;">
            <i class="bi bi-geo-alt-fill text-gold me-1"></i>${ev.venue}
          </p>
        </div>
        <button class="btn btn-outline-secondary btn-sm w-100 text-uppercase fw-semibold" onclick="window.openAdmissionsModal && window.openAdmissionsModal()" style="font-size: 0.75rem;">
          Enquire / Add Reminder
        </button>
      </div>
    </div>
  `).join('');
}

export function openAdmissionsModal(prefillGrade = "") {
  const modalEl = document.getElementById("admissionsModal");
  if (modalEl && window.bootstrap) {
    const modal = new window.bootstrap.Modal(modalEl);
    if (prefillGrade) {
      const select = document.getElementById("enquiryGrade");
      if (select) select.value = prefillGrade;
    }
    modal.show();
  }
}

function setupEventListeners() {
  // Extramural filter buttons
  document.querySelectorAll(".extramural-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".extramural-pill").forEach(b => b.classList.remove("active", "btn-tsebo-primary"));
      document.querySelectorAll(".extramural-pill").forEach(b => b.classList.add("btn-tsebo-outline"));
      btn.classList.remove("btn-tsebo-outline");
      btn.classList.add("active", "btn-tsebo-primary");
      activeExtramuralCategory = btn.getAttribute("data-category") || "all";
      renderExtramurals();
    });
  });

  // Triggers for Admissions Modal
  document.querySelectorAll(".trigger-apply-modal").forEach(btn => {
    btn.addEventListener("click", () => {
      openAdmissionsModal();
    });
  });

  // Admissions Form Submission
  const admissionsForm = document.getElementById("admissionsForm");
  if (admissionsForm) {
    admissionsForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const studentName = document.getElementById("studentName")?.value || "Learner";
      const parentName = document.getElementById("parentName")?.value || "Parent";
      const phone = document.getElementById("parentPhone")?.value || "058 713 0122";
      const grade = document.getElementById("enquiryGrade")?.value || "Grade 8";
      const year = document.getElementById("enquiryYear")?.value || "2026/2027";
      const refNumber = `TSS-${Math.floor(10000 + Math.random() * 90000)}`;

      // WhatsApp link preparation
      const msg = encodeURIComponent(
        `Dumela Tsebo Secondary School Admissions! 🎓\n\nI would like to submit an admission enquiry for:\n*Reference:* ${refNumber}\n*Learner:* ${studentName}\n*Parent/Guardian:* ${parentName}\n*Grade Applied:* ${grade} (${year})\n*Contact:* ${phone}\n\nHa-Rankopane Village, Phuthaditjhaba. Thank you!`
      );

      const successView = document.getElementById("admissionsSuccessView");
      const formView = document.getElementById("admissionsFormView");
      if (successView && formView) {
        formView.classList.add("d-none");
        successView.classList.remove("d-none");
        document.getElementById("refCodeDisplay").textContent = refNumber;
        document.getElementById("successStudentName").textContent = studentName;
        document.getElementById("successGradeApplied").textContent = `${grade} (${year})`;
        const waBtn = document.getElementById("admissionsWhatsAppBtn");
        if (waBtn) waBtn.href = `https://wa.me/27587130122?text=${msg}`;
      }
    });
  }

  // Contact Form Submission
  const contactForm = document.getElementById("schoolContactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formWrap = document.getElementById("schoolContactFormWrap");
      const successWrap = document.getElementById("schoolContactSuccessWrap");
      if (formWrap && successWrap) {
        formWrap.classList.add("d-none");
        successWrap.classList.remove("d-none");
      }
    });
  }
}

function setupNavbarScroll() {
  const navbar = document.querySelector(".navbar-tsebo");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// Global hook
window.openAdmissionsModal = openAdmissionsModal;

if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    initApp();
  });
}
