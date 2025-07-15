document.addEventListener("DOMContentLoaded", () => {
  const langToggle = document.getElementById("language-toggle");
  const themeToggle = document.getElementById("theme-toggle");
  const aboutText = document.getElementById("about-text");
  const datetime = document.getElementById("datetime");
  const yearSpan = document.getElementById("year");
  const siteHeader = document.querySelector(".site-header h1");
  const navLinks = document.querySelectorAll(".nav-links a");

  const scrollTopBtn = document.createElement("button");
  scrollTopBtn.id = "scrollTopBtn";
  scrollTopBtn.innerHTML = "⬆ <span class='scroll-label'>Back to top</span>";
  scrollTopBtn.style.position = "fixed";
  scrollTopBtn.style.bottom = "30px";
  scrollTopBtn.style.right = "30px";
  scrollTopBtn.style.padding = "10px 15px";
  scrollTopBtn.style.fontSize = "16px";
  scrollTopBtn.style.border = "none";
  scrollTopBtn.style.borderRadius = "25px";
  scrollTopBtn.style.backgroundColor = "#2677ac";
  scrollTopBtn.style.color = "white";
  scrollTopBtn.style.cursor = "pointer";
  scrollTopBtn.style.display = "none";
  scrollTopBtn.style.zIndex = "999";

  document.body.appendChild(scrollTopBtn);

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const data = {
  ro: {
    header: "Portofoliul Meu",
    nav: [
      "Despre mine",
      "Proiecte HTML & CSS",
      "Proiecte în JS",
      "Proiecte",
      "Contacte",
      "Certificate",
      "Recomandări"
    ],
    scroll: "Sus"
  },
  en: {
    header: "My Portfolio",
    nav: [
      "About me",
      "HTML & CSS Projects",
      "JS Projects",
      "Projects",
      "Contact",
      "Certificates",
      "Recommendations"
    ],
    scroll: "Back to top"
  },
};

  function renderLanguage() {
    const currentLang = langToggle.value;
    siteHeader.textContent = data[currentLang].header;
    navLinks.forEach((link, i) => {
      link.textContent = data[currentLang].nav[i];
    });
    document.querySelectorAll('[data-ro]').forEach((el) => {
      el.textContent = el.getAttribute(`data-${currentLang}`);
    });

    // Actualizează textul butonului scroll top
    const scrollLabel = scrollTopBtn.querySelector(".scroll-label");
    if (scrollLabel) scrollLabel.textContent = data[currentLang].scroll;
  }

  function updateDateTime() {
    const now = new Date();
    const currentLang = langToggle.value;
    datetime.textContent = now.toLocaleString(currentLang === "ro" ? "ro-RO" : "en-US");
  }

  function updateYear() {
    const year = new Date().getFullYear();
    yearSpan.textContent = year;
  }

  langToggle.addEventListener("change", () => {
    renderLanguage();
    updateDateTime();
  });

  themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark", themeToggle.value === "dark");
  });

  renderLanguage();
  updateDateTime();
  updateYear();
  setInterval(updateDateTime, 1000);
});
