(function () {
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const mobileNav = document.querySelector("[data-mobile-nav]");
  const year = document.querySelector("[data-year]");
  const sectionLinks = document.querySelectorAll('.nav a[href^="#"]');
  const sections = [...sectionLinks]
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  const closeMenu = () => {
    if (!toggle || !mobileNav) return;
    mobileNav.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  };

  if (toggle && mobileNav) {
    toggle.addEventListener("click", () => {
      const open = mobileNav.hidden;
      mobileNav.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  const onScroll = () => {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    }

    const marker = window.scrollY + 120;
    let current = sections[0];
    sections.forEach((section) => {
      if (section.offsetTop <= marker) current = section;
    });

    sectionLinks.forEach((link) => {
      const active = current && link.getAttribute("href") === `#${current.id}`;
      link.toggleAttribute("aria-current", Boolean(active));
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
