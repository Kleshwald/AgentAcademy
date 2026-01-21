document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelectorAll(".nav__list a");
  const scrollButtons = document.querySelectorAll("[data-scroll-to]");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("nav--open");
    });
  }

  function smoothScrollTo(selector) {
    const target = document.querySelector(selector);
    if (!target) return;
    const headerOffset = 64;
    const rect = target.getBoundingClientRect();
    const offsetTop = rect.top + window.scrollY - headerOffset;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        e.preventDefault();
        smoothScrollTo(href);
        if (nav.classList.contains("nav--open")) {
          nav.classList.remove("nav--open");
        }
      }
    });
  });

  scrollButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selector = btn.getAttribute("data-scroll-to");
      if (selector) {
        smoothScrollTo(selector);
      }
    });
  });

  // Заглушка отправки форм — пока просто показываем alert и сбрасываем форму.
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Спасибо! Ваша заявка отправлена. Куратор свяжется с вами в ближайшее время.");
      form.reset();
    });
  });
});

