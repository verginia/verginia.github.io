const langToggle = document.getElementById("language-toggle");
    const themeToggle = document.getElementById("theme-toggle");
    const aboutText = document.getElementById("about-text");
    const datetime = document.getElementById("datetime");
    const yearSpan = document.getElementById("year");

    const data = {
      ro: {
        about: "Un Front-End Developer este persoana care implementează designul web folosind HTML, CSS și JavaScript.",
      },
      en: {
        about: "A Front-End Developer is a person who implements web design using HTML, CSS, and JavaScript.",
      },
    };

    let currentLang = langToggle.value;

    langToggle.addEventListener("change", () => {
      currentLang = langToggle.value;
      renderLanguage();
    });

    themeToggle.addEventListener("change", () => {
      document.body.classList.toggle("dark", themeToggle.value === "dark");
    });

    function renderLanguage() {
      aboutText.textContent = data[currentLang].about;
      document.querySelectorAll('[data-ro]').forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLang}`);
      });
    }

    function updateDateTime() {
      const now = new Date();
      datetime.textContent = now.toLocaleString(currentLang === "ro" ? "ro-RO" : "en-US");
    }

    function updateYear() {
      const year = new Date().getFullYear();
      yearSpan.textContent = year;
    }

    renderLanguage();
    updateDateTime();
    updateYear();
    setInterval(updateDateTime, 1000);