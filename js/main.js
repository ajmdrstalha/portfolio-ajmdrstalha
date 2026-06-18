(function () {
  // Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile sidebar toggle
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  const navLinks = nav ? Array.from(nav.querySelectorAll("a")) : [];

  const closeSidebar = () => {
    document.body.classList.remove("sidebar-open");
    if (navToggle) navToggle.setAttribute("aria-expanded", "false");
  };

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = document.body.classList.toggle("sidebar-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach((a) => {
      a.addEventListener("click", () => {
        closeSidebar();
      });
    });
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", closeSidebar);
  }

  // Active nav state while scrolling
  const sectionLinks = navLinks
    .map((link) => {
      const id = link.getAttribute("href");
      return id && id.startsWith("#")
        ? { link, section: document.querySelector(id) }
        : null;
    })
    .filter((item) => item && item.section);

  const setActiveLink = () => {
    const offset = window.innerHeight * 0.28;
    let active = sectionLinks[0];

    sectionLinks.forEach((item) => {
      const rect = item.section.getBoundingClientRect();
      if (rect.top <= offset) active = item;
    });

    sectionLinks.forEach((item) => {
      item.link.classList.toggle("nav__link--active", item === active);
    });
  };

  if (sectionLinks.length) {
    setActiveLink();
    window.addEventListener("scroll", setActiveLink, { passive: true });
  }
})();
