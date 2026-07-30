(function () {
  // Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile sidebar toggle
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  const navigationItems = [
    {
      label: "About",
      href: "#about",
      image: "images/aj-md-rs-talha-profile.png",
      variant: "photo",
      modifier: "about",
    },
    {
      label: "AI Expertise",
      href: "#expertise",
      image: "images/nav-ai-expertise.svg",
      modifier: "expertise",
    },
    {
      label: "Experience",
      href: "#experience",
      image: "images/nav-experience.svg",
      modifier: "experience",
    },
    {
      label: "Founder",
      href: "#founder",
      image: "images/nav-founder.svg",
      modifier: "founder",
    },
    {
      label: "Projects",
      href: "#projects",
      image: "images/nav-projects.svg",
      modifier: "projects",
    },
    {
      label: "Toolkit",
      href: "#toolkit",
      image: "images/nav-toolkit.svg",
      modifier: "toolkit",
    },
    {
      label: "Skills",
      href: "#skills",
      image: "images/nav-skills.svg",
      modifier: "skills",
    },
    {
      label: "Education",
      href: "#education",
      image: "images/nav-education.svg",
      modifier: "education",
    },
    {
      label: "Contact",
      href: "#contact",
      image: "images/nav-contact.svg",
      modifier: "contact",
    },
  ];

  const renderNavigation = () => {
    if (!nav) return;

    nav.textContent = "";
    navigationItems.forEach((item) => {
      const link = document.createElement("a");
      link.className = `nav__link nav__link--${item.modifier}`;
      link.href = item.href;

      const icon = document.createElement("span");
      icon.className = `nav__icon${item.variant === "photo" ? " nav__icon--photo" : ""}`;
      icon.setAttribute("aria-hidden", "true");

      const image = document.createElement("img");
      image.src = item.image;
      image.alt = "";
      image.loading = "eager";
      icon.append(image);

      const label = document.createElement("span");
      label.className = "nav__label";
      label.textContent = item.label;

      link.append(icon, label);
      nav.append(link);
    });
  };

  renderNavigation();

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

  const brandLogos = {
    apnic: "https://en.wikipedia.org/wiki/Special:Redirect/file/APNIC_logo.svg",
    azure: "images/logo-azure.svg",
    azureDevOps: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg",
    bash: "https://api.iconify.design/logos:bash-icon.svg",
    chatGPT: "images/logo-openai.svg",
    chatGPTAgent: "images/chatgpt-agent-icon.svg",
    cisco: "https://cdn.simpleicons.org/cisco/1ba0d7",
    claude: "images/logo-claude.svg",
    claudeCode: "https://api.iconify.design/logos:claude-icon.svg",
    codex: "images/logo-openai-codex.svg",
    cursor: "images/logo-cursor.svg",
    docker: "https://api.iconify.design/logos:docker-icon.svg",
    fastAPI: "images/logo-fastapi.svg",
    fortinet: "https://cdn.simpleicons.org/fortinet/EE3124",
    gemini: "images/logo-gemini.svg",
    geminiCLI: "https://api.iconify.design/logos:google-gemini.svg",
    git: "https://api.iconify.design/logos:git-icon.svg",
    github: "https://api.iconify.design/logos:github-icon.svg",
    githubActions: "https://api.iconify.design/logos:github-actions.svg",
    githubCopilot: "https://api.iconify.design/logos:github-copilot.svg",
    githubPages: "https://cdn.simpleicons.org/githubpages/222222",
    grok: "https://cdn.simpleicons.org/x/000000",
    html: "https://api.iconify.design/logos:html-5.svg",
    css: "https://api.iconify.design/logos:css-3.svg",
    javascript: "https://api.iconify.design/logos:javascript.svg",
    jenkins: "https://api.iconify.design/logos:jenkins.svg",
    kubernetes: "https://api.iconify.design/logos:kubernetes.svg",
    linux: "https://api.iconify.design/logos:linux-tux.svg",
    linuxCentOS: "https://api.iconify.design/logos:centos-icon.svg",
    linuxUbuntu: "https://api.iconify.design/logos:ubuntu.svg",
    manusAI: "https://framerusercontent.com/images/VzTG1DAJz9UjLcZ9hhFcHfhvnbc.png",
    mikrotik: "https://cdn.simpleicons.org/mikrotik/293239",
    notion: "https://api.iconify.design/logos:notion-icon.svg",
    openAI: "images/logo-openai.svg",
    openAICodex: "images/logo-openai-codex.svg",
    perplexity: "https://api.iconify.design/logos:perplexity-icon.svg",
    python: "images/logo-python.svg",
    redHat: "https://api.iconify.design/logos:redhat-icon.svg",
    starlink: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Starlink_Logo_2024_(cropped).svg",
    streamlit: "https://api.iconify.design/logos:streamlit.svg",
    techAIOps: "https://techaiops.online/favicon.svg",
    windowsServer: "https://api.iconify.design/logos:microsoft-windows.svg",
    yaml: "https://api.iconify.design/logos:yaml.svg",
  };

  const brandLogoAliases = new Map([
    ["APNIC Certification", brandLogos.apnic],
    ["Azure", brandLogos.azure],
    ["Microsoft Azure", brandLogos.azure],
    ["Azure DevOps", brandLogos.azureDevOps],
    ["Bash", brandLogos.bash],
    ["ChatGPT", brandLogos.chatGPT],
    ["ChatGPT Agent", brandLogos.chatGPTAgent],
    ["Cisco", brandLogos.cisco],
    ["Cisco Networking Academy", brandLogos.cisco],
    ["Claude", brandLogos.claude],
    ["Claude Code", brandLogos.claudeCode],
    ["Codex", brandLogos.codex],
    ["OpenAI Codex", brandLogos.openAICodex],
    ["Cursor", brandLogos.cursor],
    ["Docker", brandLogos.docker],
    ["FastAPI", brandLogos.fastAPI],
    ["Fortinet NSE", brandLogos.fortinet],
    ["Gemini", brandLogos.gemini],
    ["Gemini CLI", brandLogos.geminiCLI],
    ["Git", brandLogos.git],
    ["GitHub", brandLogos.github],
    ["GitHub Actions", brandLogos.githubActions],
    ["GitHub Copilot", brandLogos.githubCopilot],
    ["GitHub Pages", brandLogos.githubPages],
    ["Grok", brandLogos.grok],
    ["HTML", brandLogos.html],
    ["CSS", brandLogos.css],
    ["JavaScript", brandLogos.javascript],
    ["Jenkins", brandLogos.jenkins],
    ["Kubernetes", brandLogos.kubernetes],
    ["Linux", brandLogos.linux],
    ["Linux CentOS", brandLogos.linuxCentOS],
    ["Linux Ubuntu", brandLogos.linuxUbuntu],
    ["Ubuntu", brandLogos.linuxUbuntu],
    ["Manus", brandLogos.manusAI],
    ["Manus AI", brandLogos.manusAI],
    ["MikroTik", brandLogos.mikrotik],
    ["MTCNA", brandLogos.mikrotik],
    ["Notion", brandLogos.notion],
    ["OpenAI", brandLogos.openAI],
    ["Perplexity", brandLogos.perplexity],
    ["Python", brandLogos.python],
    ["RedHat", brandLogos.redHat],
    ["Starlink", brandLogos.starlink],
    ["Streamlit", brandLogos.streamlit],
    ["Windows Server", brandLogos.windowsServer],
    ["YAML", brandLogos.yaml],
  ]);

  const companyLogos = {
    tygrLabs: "https://tygrlabs.co/assets/icon/favicon/apple-touch-icon.png",
    dhakaFiberNet: "https://dfninternet.com/assets/images/logo/DFN_Internet.webp",
    asianetOnlineService: "https://asianetonlinebd.com/wp-content/uploads/2026/05/asianet_logo_250x100_transparent_exact_fill.png",
  };

  const expertiseIllustrations = {
    agenticSystems: "images/expertise-agentic-systems.svg",
    llmIntegration: "images/expertise-llm-integration.svg",
    aiAutomation: "images/expertise-ai-automation.svg",
    aiSystemEngineering: "images/expertise-system-engineering.svg",
  };

  const educationEntries = [
    {
      institution: "Uttara University",
      degree: "B.Sc. in Computer Science & Engineering (CSE)",
      period: "Aug 2025 – Present",
      logo: "images/uttara-university-logo.png",
      logoAlt: "Uttara University official logo",
    },
    {
      institution: "Institute of Science and Technology (IST)",
      degree: "Diploma in Engineering, Computer Engineering",
      period: "May 2022 – Dec 2024",
      logo: "images/institute-science-technology-logo.png",
      logoAlt: "Institute of Science and Technology official logo",
    },
  ];

  const experiences = [
    {
      company: "TygrLabs",
      role: "AI Operations & DevOps Engineer",
      startDate: "Aug 2025",
      endDate: "Present",
      location: "Dhaka, Bangladesh",
      current: true,
      logo: companyLogos.tygrLabs,
      summary: "Building and maintaining AI-enabled infrastructure, DevOps workflows, monitoring systems, office technology, and production support environments.",
      achievements: [
        "Orchestrated AI-optimized DevOps workflows in Microsoft Azure, reducing deployment latency by 25%.",
        "Maintained AI infrastructure using Docker and Kubernetes, achieving 99.9% service reliability.",
        "Built monitoring systems for hybrid networks and operational nodes, maintaining approximately 99% uptime.",
        "Accelerated development workflows by approximately 3x through AI-assisted software engineering and automated Infrastructure as Code templates.",
        "Developed agentic support systems that reduced manual IT intervention by approximately 40%.",
        "Used GitHub, Docker, Linux, and automation workflows to reduce deployment errors by approximately 25%.",
        "Managed Microsoft Azure virtual machines, cloud resources, deployment workflows, and infrastructure operations.",
        "Developed Jenkins CI/CD workflows for automated Windows IIS deployment.",
        "Configured, monitored, and troubleshot Starlink, MikroTik routers, switches, firewalls, Wi-Fi systems, Windows servers, network devices, and end-user systems.",
        "Supported technical operations, system administration, infrastructure reliability, and office IT services.",
      ],
      technologies: ["Microsoft Azure", "Docker", "Kubernetes", "Jenkins", "GitHub", "GitHub Actions", "Linux", "Python", "Infrastructure as Code", "MikroTik", "Cisco", "Starlink", "Windows Server", "OpenAI Codex", "Agentic AI"],
    },
    {
      company: "Dhaka Fiber Net Ltd.",
      role: "Network & System Engineer (NOC)",
      startDate: "Jan 2025",
      endDate: "Jul 2025",
      location: "Dhaka, Bangladesh",
      current: false,
      logo: companyLogos.dhakaFiberNet,
      summary: "Managed and automated ISP network infrastructure, OLT systems, Linux servers, and Cisco and MikroTik networking equipment in a Network Operations Center.",
      achievements: [
        "Maintained approximately 99.9% ISP core-network uptime through proactive monitoring and infrastructure support.",
        "Automated manual OLT commands using Python, improving provisioning and service-delivery speed by approximately 40%.",
        "Managed OLT systems, Cisco routers and switches, MikroTik equipment, and Ubuntu servers.",
        "Standardized network-automation scripts through GitHub.",
        "Reduced configuration-related outages by approximately 30% through automation and more consistent deployment processes.",
        "Monitored network health, availability, traffic, devices, and operational performance.",
        "Used AI platforms to analyze network performance and identify bottlenecks proactively.",
        "Troubleshot network, server, connectivity, routing, switching, and customer-service issues.",
        "Supported ISP infrastructure operations from the NOC environment.",
      ],
      technologies: ["Python", "GitHub", "Cisco", "MikroTik", "Ubuntu", "Linux", "OLT", "NOC Monitoring", "Network Automation", "Routing", "Switching", "VLAN", "Network Security"],
    },
    {
      company: "Asianet Online Service",
      role: "Network Support Engineer",
      startDate: "Jan 2024",
      endDate: "Dec 2024",
      location: "Dhaka, Bangladesh",
      current: false,
      logo: companyLogos.asianetOnlineService,
      summary: "Provided network support, device configuration, troubleshooting, and infrastructure management for business and customer connectivity environments.",
      achievements: [
        "Improved network-support and management efficiency by approximately 25%.",
        "Configured and managed MikroTik routers.",
        "Configured VLAN, PPPoE, DHCP, NAT, routing, and firewall rules.",
        "Diagnosed network availability, connectivity, performance, and configuration problems.",
        "Assisted with customer and internal network-support requests.",
        "Used Python and MikroTik tools to improve repetitive network-management processes.",
        "Maintained documentation for network configurations and troubleshooting.",
        "Supported secure and stable network operations.",
      ],
      technologies: ["MikroTik", "Python", "VLAN", "PPPoE", "DHCP", "NAT", "Firewalls", "Routing", "Switching", "Network Troubleshooting", "Network Support"],
    },
  ];

  const toolkitIcons = {
    kubernetes: "https://api.iconify.design/logos:kubernetes.svg",
    chatGPT: "https://api.iconify.design/logos:openai-icon.svg",
    chatGPTAgent: "images/chatgpt-agent-icon.svg",
    microsoftAzure: "https://api.iconify.design/logos:microsoft-azure.svg",
    cursor: "https://cdn.simpleicons.org/cursor",
    githubCopilot: "https://api.iconify.design/logos:github-copilot.svg",
    claude: "https://api.iconify.design/logos:claude-icon.svg",
    azureDevOps: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg",
    docker: "https://api.iconify.design/logos:docker-icon.svg",
    githubActions: "https://api.iconify.design/logos:github-actions.svg",
    jenkins: "https://api.iconify.design/logos:jenkins.svg",
    linux: "https://api.iconify.design/logos:linux-tux.svg",
    mikrotik: "https://cdn.simpleicons.org/mikrotik/293239",
    cisco: "https://cdn.simpleicons.org/cisco/1ba0d7",
    notion: "https://api.iconify.design/logos:notion-icon.svg",
    perplexity: "https://api.iconify.design/logos:perplexity-icon.svg",
    manusAI: "https://framerusercontent.com/images/VzTG1DAJz9UjLcZ9hhFcHfhvnbc.png",
  };

  const toolkitTools = [
    { name: "Kubernetes", icon: toolkitIcons.kubernetes, brand: "#326ce5" },
    { name: "ChatGPT", icon: toolkitIcons.chatGPT, brand: "#10a37f" },
    { name: "ChatGPT Agent", icon: toolkitIcons.chatGPTAgent, brand: "#10a37f" },
    { name: "Azure", icon: toolkitIcons.microsoftAzure, brand: "#0078d4" },
    { name: "GitHub Copilot", icon: toolkitIcons.githubCopilot, brand: "#6e5494" },
    { name: "Claude", icon: toolkitIcons.claude, brand: "#d97757" },
    { name: "Azure DevOps", icon: toolkitIcons.azureDevOps, brand: "#0078d7" },
    { name: "Docker", icon: toolkitIcons.docker, brand: "#2496ed" },
    { name: "GitHub Actions", icon: toolkitIcons.githubActions, brand: "#2088ff" },
    { name: "Jenkins", icon: toolkitIcons.jenkins, brand: "#d33833" },
    { name: "Linux", icon: toolkitIcons.linux, brand: "#fcc624" },
    { name: "MikroTik", icon: toolkitIcons.mikrotik, brand: "#293239" },
    { name: "Cisco", icon: toolkitIcons.cisco, brand: "#1ba0d7" },
    { name: "Notion", icon: toolkitIcons.notion, brand: "#000000" },
    { name: "Perplexity", icon: toolkitIcons.perplexity, brand: "#1fb8cd" },
    { name: "Manus AI", icon: toolkitIcons.manusAI, brand: "#111827" },
  ];

  const renderToolkit = () => {
    const outer = document.getElementById("toolkitOuter");
    const inner = document.getElementById("toolkitInner");
    const countCenter = document.getElementById("toolkitCountCenter");
    const countLabel = document.getElementById("toolkitCountLabel");

    if (!outer || !inner) return;

    const total = toolkitTools.length;
    const outerCount = Math.min(10, total);
    const groups = [
      { element: outer, tools: toolkitTools.slice(0, outerCount), radius: "var(--outer-radius)", ring: "outer", startAngle: -90 },
      { element: inner, tools: toolkitTools.slice(outerCount), radius: "var(--inner-radius)", ring: "inner", startAngle: -60 },
    ];

    if (countCenter) countCenter.textContent = String(total);
    if (countLabel) countLabel.textContent = String(total);

    groups.forEach((group) => {
      group.element.textContent = "";
      group.tools.forEach((tool, index) => {
        const angle = group.startAngle + (360 / group.tools.length) * index;
        const slot = document.createElement("div");
        slot.className = "toolkit-slot";
        slot.style.setProperty("--angle", `${angle}deg`);
        slot.style.setProperty("--radius", group.radius);

        const upright = document.createElement("div");
        upright.className = `toolkit-upright toolkit-upright--${group.ring}`;
        upright.style.setProperty("--angle", `${angle}deg`);

        const button = document.createElement("button");
        button.className = `toolkit-tool toolkit-tool--${group.ring}`;
        button.type = "button";
        button.setAttribute("aria-label", tool.name);
        button.style.setProperty("--brand", tool.brand);

        const image = document.createElement("img");
        image.className = "toolkit-tool__logo";
        image.src = tool.icon;
        image.alt = "";
        image.setAttribute("aria-hidden", "true");

        const tooltip = document.createElement("span");
        tooltip.className = "toolkit-tooltip";
        tooltip.textContent = tool.name;
        tooltip.setAttribute("role", "tooltip");

        button.append(image, tooltip);
        upright.append(button);
        slot.append(upright);
        group.element.append(slot);
      });
    });

    document.addEventListener("click", (event) => {
      const activeTool = event.target.closest(".toolkit-tool");
      document.querySelectorAll(".toolkit-tool.is-active").forEach((tool) => {
        if (tool !== activeTool) tool.classList.remove("is-active");
      });
      if (activeTool) activeTool.classList.toggle("is-active");
    });
  };

  renderToolkit();

  const createBrandLogo = (label, src) => {
    const image = document.createElement("img");
    image.className = "brand-logo";
    image.src = src;
    image.alt = "";
    image.setAttribute("aria-hidden", "true");
    image.loading = "lazy";
    return image;
  };

  const createTechChip = (label) => {
    const chip = document.createElement("span");
    chip.className = "project-tool";
    const icon = brandLogoAliases.get(label);

    if (icon) {
      chip.classList.add("brand-chip");
      chip.append(createBrandLogo(label, icon));
    }

    chip.append(document.createTextNode(label));
    return chip;
  };

  const enrichBrandLabel = (element) => {
    const label = element.textContent.trim();
    const icon = brandLogoAliases.get(label);
    if (!icon || element.querySelector(".brand-logo")) return;

    element.textContent = "";
    element.classList.add("brand-chip");
    element.append(createBrandLogo(label, icon), document.createTextNode(label));

    const certCard = element.closest(".cert-card");
    if (certCard) certCard.querySelector("i")?.remove();
  };

  document.querySelectorAll(".tool-strip span, .chips span, .cert-card span").forEach(enrichBrandLabel);

  document.querySelectorAll(".case-study dt").forEach((term) => {
    if (term.textContent.trim() !== "Tools") return;

    const detail = term.nextElementSibling;
    if (!detail || detail.querySelector(".project-tool-list")) return;

    const tools = detail.textContent
      .split(",")
      .map((tool) => tool.trim())
      .filter(Boolean);

    detail.textContent = "";
    const list = document.createElement("span");
    list.className = "project-tool-list";

    tools.forEach((tool) => {
      list.append(createTechChip(tool));
    });

    detail.append(list);
  });

  document.querySelectorAll("[data-expertise-icon]").forEach((card) => {
    const key = card.getAttribute("data-expertise-icon");
    const image = card.querySelector(".expertise-card-icon img");
    const icon = expertiseIllustrations[key];
    if (image && icon) image.src = icon;
  });

  const renderEducation = () => {
    const educationList = document.getElementById("educationList");
    if (!educationList) return;

    educationList.textContent = "";

    educationEntries.forEach((education) => {
      const card = document.createElement("article");
      card.className = "card education-entry";

      const logoWrap = document.createElement("div");
      logoWrap.className = "education-logo";
      const logo = document.createElement("img");
      logo.src = education.logo;
      logo.alt = education.logoAlt;
      logo.loading = "lazy";
      logoWrap.append(logo);

      const content = document.createElement("div");
      content.className = "education-content";
      const institution = document.createElement("h3");
      institution.textContent = education.institution;
      const degree = document.createElement("p");
      degree.className = "education-degree";
      degree.textContent = education.degree;
      const period = document.createElement("span");
      period.className = "tag education-period";
      period.textContent = education.period;

      content.append(institution, degree, period);
      card.append(logoWrap, content);
      educationList.append(card);
    });
  };

  const renderExperience = () => {
    const timeline = document.getElementById("experienceTimeline");
    if (!timeline) return;

    timeline.textContent = "";

    experiences.forEach((experience, index) => {
      const item = document.createElement("article");
      item.className = `experience-card experience-card--premium${experience.current ? " experience-card--current" : ""}`;
      item.style.setProperty("--stagger", `${index * 90}ms`);

      const marker = document.createElement("div");
      marker.className = "experience-marker";
      const markerLogo = document.createElement("img");
      markerLogo.src = experience.logo;
      markerLogo.alt = "";
      markerLogo.setAttribute("aria-hidden", "true");
      marker.append(markerLogo);

      const header = document.createElement("div");
      header.className = "experience-card__header";

      const logoWrap = document.createElement("div");
      logoWrap.className = "experience-company-logo";
      const logo = document.createElement("img");
      logo.src = experience.logo;
      logo.alt = `${experience.company} logo`;
      logo.loading = "lazy";
      logoWrap.append(logo);

      const heading = document.createElement("div");
      heading.className = "experience-card__heading";
      const eyebrow = document.createElement("p");
      eyebrow.className = "experience-company";
      eyebrow.textContent = experience.company;
      const title = document.createElement("h3");
      title.textContent = experience.role;
      heading.append(eyebrow, title);

      const badges = document.createElement("div");
      badges.className = "experience-badges";
      const dateBadge = document.createElement("span");
      dateBadge.className = "tag";
      dateBadge.textContent = `${experience.startDate} - ${experience.endDate}`;
      badges.append(dateBadge);

      if (experience.current) {
        const currentBadge = document.createElement("span");
        currentBadge.className = "tag tag--current";
        currentBadge.textContent = "Current";
        badges.append(currentBadge);
      }

      header.append(logoWrap, heading, badges);

      const meta = document.createElement("p");
      meta.className = "experience-meta";
      meta.textContent = experience.duration
        ? `${experience.location} | ${experience.duration}`
        : experience.location;

      const summary = document.createElement("p");
      summary.className = "experience-summary";
      summary.textContent = experience.summary;

      const achievements = document.createElement("ul");
      achievements.className = "list experience-achievements";
      achievements.id = `experience-achievements-${index}`;

      experience.achievements.forEach((achievement, achievementIndex) => {
        const item = document.createElement("li");
        item.textContent = achievement;
        if (achievementIndex >= 3) item.className = "achievement-extra";
        achievements.append(item);
      });

      const toggle = document.createElement("button");
      toggle.className = "experience-toggle";
      toggle.type = "button";
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-controls", achievements.id);
      toggle.textContent = "View more";
      toggle.addEventListener("click", () => {
        const isOpen = item.classList.toggle("experience-card--expanded");
        toggle.setAttribute("aria-expanded", String(isOpen));
        toggle.textContent = isOpen ? "View less" : "View more";
      });

      const techTitle = document.createElement("h4");
      techTitle.className = "experience-tech-title";
      techTitle.textContent = "Primary technologies";

      const techList = document.createElement("div");
      techList.className = "project-tool-list experience-tech-list";
      experience.technologies.slice(0, 10).forEach((technology) => {
        techList.append(createTechChip(technology));
      });

      const content = document.createElement("div");
      content.className = "experience-card__content";
      content.append(header, meta, summary, achievements, toggle, techTitle, techList);

      item.append(marker, content);
      timeline.append(item);
    });
  };

  renderEducation();
  renderExperience();

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
