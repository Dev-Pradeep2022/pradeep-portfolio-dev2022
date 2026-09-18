import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Download,
  Mail,
  Menu,
  X,
  GitBranch,
  Terminal,
  Code2,
  Database,
  Layers3,
  Server,
  Workflow,
  Send,
  ExternalLink,
  Moon,
  Sun,
  Copy,
  Check
} from 'lucide-react';
import './styles.css';
import './theme.css';

// LinkedIn icon - kept independent from lucide-react
const LinkedInIcon = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.3ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

const profile = {
  name: 'Pradeep Kumar Bal',
  role: 'Software Engineer',
  email: 'pradeep.dev.java2022@gmail.com',
  location: 'India',
  photo: '/profile.png',
  summary:
    'Building enterprise web applications, REST APIs and microservices with Java, Spring Boot, React and PostgreSQL.',
};

const skillGroups = [
  {
    icon: Code2,
    title: 'Backend // build the core',
    items: [
      'Java 21',
      'Spring Boot',
      'Spring Security',
      'Hibernate / JPA',
      'REST APIs',
      'Feign Client'
    ]
  },
  {
    icon: Layers3,
    title: 'Frontend // craft the UI',
    items: [
      'React.js',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Material UI',
      'Responsive UI'
    ]
  },
  {
    icon: Database,
    title: 'Data // model & report',
    items: [
      'PostgreSQL',
      'SQL',
      'Database Functions',
      'JSON / JSONB',
      'JPA / Hibernate'
    ]
  },
  {
    icon: Server,
    title: 'Platform // integrate & ship',
    items: [
      'Microservices',
      'API Gateway',
      'Eureka',
      'Redis',
      'Swagger / OpenAPI',
      'Linux / systemd'
    ]
  }
];

const technologyImages = [
  ['Java', 'https://cdn.simpleicons.org/openjdk/ED8B00'],
  ['React', 'https://cdn.simpleicons.org/react/61DAFB'],
  ['Spring Boot', 'https://cdn.simpleicons.org/springboot/6DB33F'],
  ['Microservices', 'https://cdn.simpleicons.org/istio/466BB0'],
  ['PostgreSQL', 'https://cdn.simpleicons.org/postgresql/4169E1'],
  ['Docker', 'https://cdn.simpleicons.org/docker/2496ED'],
  ['Redis', 'https://cdn.simpleicons.org/redis/DC382D'],
  ['Linux', 'https://cdn.simpleicons.org/linux/FCC624']
];

const projects = [
  {
    cat: 'Enterprise',
    icon: '🏛️',
    title: 'CMDC Platform',
    client: 'Enterprise / Government Application',
    desc:
      'Independently delivered an end-to-end enterprise application covering beneficiary, fund, transport and stock workflows, MIS reporting and secure online payment processing.',
    tags: ['Spring Boot', 'React', 'PostgreSQL', 'REST API'],
    bullets: [
      'Owned requirement analysis, design, development, testing and deployment support',
      'Implemented IOB Payment API integration across Staging and Production',
      'Handled secure communication, response validation and payment issue resolution'
    ]
  },
  {
    cat: 'Microservices',
    icon: '🧩',
    title: 'TDCCOL Unified ERP',
    client: 'ERP / Microservices Ecosystem',
    desc:
      'Microservice-based ERP ecosystem covering inventory, master data, demography, UMT and fuel management with gateway routing, SSO and service-to-service communication.',
    tags: ['Microservices', 'Gateway', 'Eureka', 'Feign'],
    bullets: [
      'Inventory and stock APIs',
      'Microservice communication, SSO implementation and troubleshooting',
      'Role and workflow-driven enterprise operations'
    ]
  },
  {
    cat: 'Enterprise',
    icon: '🏢',
    title: 'TDCCOL',
    client: 'Tribal Development Corporation Application',
    desc:
      'Enterprise workflows supporting inventory, stock, master data and operational processes across a large business application ecosystem.',
    tags: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
    bullets: [
      'Developed business APIs and workflow-driven modules',
      'Supported service integrations and production troubleshooting',
      'Maintained reusable, modular application components'
    ]
  },
  {
    cat: 'Portal',
    icon: '🖥️',
    title: 'TDCCOL Unified Portal',
    client: 'Unified Enterprise Portal',
    desc:
      'A unified portal experience connecting enterprise services, role-based workflows, authentication and operational dashboards for different users and teams.',
    tags: ['React', 'REST API', 'SSO', 'Dashboard'],
    bullets: [
      'Implemented role-based portal workflows and integrations',
      'Supported SSO and service-to-service communication',
      'Improved issue resolution across portal and backend layers'
    ]
  },
  {
    cat: 'Integration',
    icon: '☕',
    title: 'TDCCOL Scheme Management System',
    client: 'Scheme Management / ERP Integration',
    desc:
      'Scheme and operational workflows connected with ERP services, Smart Card devices and POS messaging for reliable field-level processing.',
    tags: ['Java', 'ERP', 'POS', 'REST API'],
    bullets: [
      'Implemented Smart Card and POS device communication',
      'Supported scheme workflows and real-time messaging',
      'Owned integration testing and issue resolution'
    ]
  },
  {
    cat: 'Government',
    icon: '🏛️',
    title: 'SSEPD',
    client: 'Government Application / Welfare Workflows',
    desc:
      'Government-focused application work supporting structured workflows, reporting, stakeholder coordination and reliable production delivery.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'MIS Reports'],
    bullets: [
      'Implemented business workflows and database-backed features',
      'Supported reporting, validation and production issue resolution',
      'Collaborated with cross-functional teams for timely delivery'
    ]
  },
  {
    cat: 'Payments',
    icon: '💳',
    title: 'Payment & POS Integration',
    client: 'Payment / Billing Services',
    desc:
      'Transaction and billing workflows connecting web applications with payment and POS services, including transaction validation and persistence.',
    tags: ['Spring Boot', 'POS', 'UPI / Card', 'PostgreSQL'],
    bullets: [
      'Transaction APIs and raw transaction logging',
      'Client transaction validation',
      'POS and payment status handling'
    ]
  },
  {
    cat: 'Application',
    icon: '🏥',
    title: 'HIMS Modules',
    client: 'Enterprise Application Modules',
    desc:
      'Delivered business-critical HIMS modules including Academic Audit, Grant-in-Aid, Grievance Management, Facility Management and Quality Education.',
    tags: ['Java', 'Spring Boot', 'JSP', 'PostgreSQL'],
    bullets: [
      'Implemented workflows, dashboards and SSO integration',
      'Delivered database, reporting and Tableau dashboard support',
      'Resolved production issues and supported business-critical operations'
    ]
  }
];

const experience = [
  {
    period: '2022 — Present',
    role: 'Software Engineer',
    company: 'Aashdit',
    bullets: [
      'Develop enterprise applications using Java, Spring Boot, React and PostgreSQL.',
      'Build REST APIs, microservices and database-driven business workflows.',
      'Integrate payment, POS, ERP and external services and support production releases.',
      'Develop PostgreSQL functions and MIS reports for operational and management reporting.',
      'Troubleshoot staging and production issues across application, database and integration layers.',
      'Completed over 95% of assigned work within agreed timelines while maintaining delivery quality.',
      'Mentor junior developers through onboarding, troubleshooting and knowledge-sharing sessions.',
      'Reduced code smells in core modules by over 20% through technical-debt cleanup.',
      'Improved high-traffic API performance through database indexing and Hibernate query tuning.',
      'Collaborated on event-driven architecture and led triage of a high-priority production outage.'
    ],
    tags: [
      'Java',
      'Spring Boot',
      'React',
      'PostgreSQL',
      'Microservices'
    ]
  }
];

const process = [
  [
    '01',
    'Discover',
    'Understand requirements, business rules, existing flows and integration points.'
  ],
  [
    '02',
    'Design',
    'Shape APIs, database functions, service boundaries and user workflows.'
  ],
  [
    '03',
    'Develop',
    'Implement backend services, frontend modules, validations and reporting.'
  ],
  [
    '04',
    'Deliver',
    'Test, integrate, troubleshoot and support staging and production releases.'
  ]
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 22
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

function App() {
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState('All');
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [theme, setTheme] = useState(
    () => localStorage.getItem('portfolio-theme') || 'dark'
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'skills',
      'projects',
      'process',
      'experience',
      'education',
      'contact'
    ];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: '-20% 0px -20% 0px', threshold: [0, .2, .5] }
    );

    sections.forEach((section) => observer.observe(section));

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const submitContactForm = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name')?.toString().trim() || '';
    const email = formData.get('email')?.toString().trim() || '';
    const message = formData.get('message')?.toString().trim() || '';
    const subject = `Portfolio enquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    formData.append('_subject', subject);
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');

    setFormStatus('Sending...');

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${profile.email}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json'
          },
          body: formData
        }
      );

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      form.reset();
      setFormStatus('Message sent successfully.');
    } catch {
      setFormStatus('Opening your email app...');
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  };

  const categories = [
    'All',
    ...new Set(projects.map((p) => p.cat))
  ];

  const filtered = useMemo(
    () =>
      filter === 'All' || filter === 'Government'
        ? projects
        : projects.filter((p) => p.cat === filter),
    [filter]
  );

  const go = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: 'smooth'
      });

    setMenu(false);
  };

  return (
    <div className="site" data-theme={theme}>

      <div
        className="scrollProgress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <div className="developerScene" aria-hidden="true">
        <div className="sceneGlow" />
        <div className="sceneMonitor">
          <div className="sceneScreen" />
          <div className="sceneStand" />
        </div>
        <div className="scenePerson">
          <div className="sceneHead" />
          <div className="sceneBody" />
        </div>
        <div className="sceneCard sceneCardOne" />
        <div className="sceneCard sceneCardTwo" />
        <div className="sceneCard sceneCardThree" />
      </div>

      {/* NAVIGATION */}
      <header className="nav">
        <div className="wrap navInner">

          <button
            className="logo"
            onClick={() => go('home')}
          >
            Pradeep<span>.dev</span>
          </button>

          <nav
            className={
              menu
                ? 'navLinks open'
                : 'navLinks'
            }
          >
            {[
              'about',
              'skills',
              'projects',
              'process',
              'experience',
              'education',
              'contact'
            ].map((x) => (
              <button
                key={x}
                className={activeSection === x ? 'active' : ''}
                onClick={() => go(x)}
              >
                {x}
              </button>
            ))}
          </nav>

          <div className="navActions">
            <span className="navStatus">
              <i /> Available
            </span>

            <button
              className="themeToggle"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <button
              className="themeDot"
              aria-label={menu ? 'Close menu' : 'Open menu'}
              onClick={() => setMenu(!menu)}
            >
            {menu ? (
              <X size={19} />
            ) : (
              <Menu size={19} />
            )}
            </button>
          </div>

        </div>
      </header>

      <main>

        {/* HERO */}
        <section
          id="home"
          className="hero"
        >
          <div className="wrap heroGrid">

            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
            >

              <div className="availability">
                <span />
                AVAILABLE FOR NEW OPPORTUNITIES
              </div>

              <div className="whoami">
                <Terminal size={15} />
                $ whoami
              </div>

              <h1>
                {profile.name} <span>👋</span>
              </h1>

              <div className="typing">
                {profile.role} <i>▊</i>
              </div>

              <p className="heroCopy">
                {profile.summary} I work across backend
                services, frontend interfaces, database
                reporting and real-world system integrations.
              </p>

              <div className="heroActions">

                <button
                  className="btn primary"
                  onClick={() => go('projects')}
                >
                  🚀 View Projects
                  <ArrowUpRight size={17} />
                </button>

                <a
                  className="btn ghost"
                  href="/Pradeep_Kumar_Bal_Resume.docx"
                  download
                >
                  📄 Download Resume
                  <Download size={16} />
                </a>

              </div>

              <div className="socials">

                <a href={`mailto:${profile.email}`}>
                  <Mail size={15} />
                  Email
                </a>

                <a
                  href="https://github.com/Dev-Pradeep2022"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitBranch size={15} />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon size={15} />
                  LinkedIn
                </a>

              </div>

            </motion.div>

            <motion.div
              className="heroAside"
              initial={{
                opacity: 0,
                x: 25
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.7
              }}
            >

              <div className="profilePortrait">
                <img
                  src={profile.photo}
                  alt={`${profile.name} portrait`}
                  onError={(event) => {
                    event.currentTarget.hidden = true;
                    event.currentTarget.nextElementSibling.hidden = false;
                  }}
                />
                <div className="photoFallback" hidden>
                  PKB
                </div>
                <span>JAVA / REACT / SYSTEMS</span>
              </div>

              <div className="terminalCard">

              <div className="terminalHead">
                <span>
                  pradeep@software-engineer:~
                </span>

                <div>
                  <i />
                  <i />
                  <i />
                </div>
              </div>

              <div className="terminalBody">

                <div>
                  <b>$</b> java --version
                </div>

                <p>
                  Java 21 · Spring Boot · REST APIs
                </p>

                <div>
                  <b>$</b> stack --show
                </div>

                <p>
                  React · PostgreSQL · Microservices
                </p>

                <div>
                  <b>$</b> focus --today
                </div>

                <p className="accent">
                  Enterprise systems · integrations · clean delivery
                </p>

                <div className="cursor">
                  $ <span>_</span>
                </div>

              </div>

              </div>

            </motion.div>

          </div>
        </section>

        {/* STATS */}
        <section className="stats">
          <div className="wrap statsGrid">

            <div>
              <strong>4+</strong>
              <span>Years Experience</span>
            </div>

            <div>
              <strong>Java</strong>
              <span>Primary Backend</span>
            </div>

            <div>
              <strong>REST</strong>
              <span>API Development</span>
            </div>

            <div>
              <strong>ERP</strong>
              <span>Integration Experience</span>
            </div>

          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="section"
        >
          <div className="wrap split">

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="sectionCode">
                // 01. about
              </div>

              <h2>
                About <em>Me</em>
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="aboutCopy"
            >

              <p>
                Software Engineer with 4+ years of professional
                experience building and maintaining enterprise
                applications. My work spans backend development,
                modern frontend interfaces, PostgreSQL reporting,
                microservices and third-party integrations.
              </p>

              <p>
                I enjoy translating business requirements into
                maintainable APIs, practical UI workflows and
                reliable database solutions — while staying
                involved through testing, deployment and
                production support.
              </p>

              <div className="miniStats">

                <div>
                  <b>End-to-end</b>
                  <span>Module ownership</span>
                </div>

                <div>
                  <b>API-first</b>
                  <span>Integration mindset</span>
                </div>

                <div>
                  <b>Production</b>
                  <span>Support experience</span>
                </div>

              </div>

            </motion.div>

          </div>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          className="section dark"
        >
          <div className="wrap">

            <div className="sectionCode">
              // 02. skills
            </div>

            <h2>
              Technical <em>Arsenal</em>
            </h2>

            <div className="skillGrid">

              {skillGroups.map(
                ({
                  icon: Icon,
                  title,
                  items
                }) => (
                  <motion.article
                    className="skillBox"
                    key={title}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                  >

                    <Icon size={22} />

                    <h3>{title}</h3>

                    <div className="chips">
                      {items.map((x) => (
                        <span key={x}>
                          {x}
                        </span>
                      ))}
                    </div>

                  </motion.article>
                )
              )}

            </div>

            <div className="technologyShowcase">
              <div className="technologyHeading">
                <span className="sectionCode">// technologies_i_use</span>
                <span>Built for real-world delivery</span>
              </div>

              <div className="technologyGrid">
                {technologyImages.map(([name, image]) => (
                  <div className="technologyItem" key={name}>
                    <img src={image} alt={`${name} logo`} />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* STACK */}
        <section className="section shell">
          <div className="wrap">

            <div className="sectionCode">
              // live_demo
            </div>

            <h2>
              Inside My <em>Stack</em>
            </h2>

            <div className="bigTerminal">

              <div className="terminalHead">
                <span>
                  pradeep@dev:~
                </span>

                <span>
                  bash
                </span>
              </div>

              <div className="shellLines">

                <div>
                  <b>pradeep@dev</b>
                  :~$ cat engineering-principles.txt
                </div>

                <p>
                  Readable code · clear APIs · reusable services · test before delivery
                </p>

                <div>
                  <b>pradeep@dev</b>
                  :~$ ls ./core-skills
                </div>

                <p>
                  java/ spring-boot/ react/ postgresql/ microservices/ integrations/
                </p>

                <div>
                  <b>pradeep@dev</b>
                  :~$ status
                </div>

                <p className="green">
                  ● Building enterprise software that solves real business problems.
                </p>

              </div>

            </div>

          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="section"
        >
          <div className="wrap">

            <div className="sectionCode">
              // 03. projects
            </div>

            <div className="sectionTitleRow">

              <h2>
                Featured <em>Projects</em>
              </h2>

              <p>
                Selected work across enterprise applications,
                ERP, payments and integrations.
              </p>

            </div>

            <article className="featuredProject">
              <div className="featuredProjectVisual">
                <span className="featuredEyebrow">CASE STUDY / 01</span>
                <div className="featuredOrb">
                  <span>{projects[0].icon}</span>
                </div>
                <span className="featuredStatus">
                  <i /> Delivered in production
                </span>
              </div>

              <div className="featuredProjectContent">
                <span className="featuredEyebrow">LIVE GOVERNMENT PLATFORM</span>
                <h3>{projects[0].title}</h3>
                <p>
                  A business-critical platform bringing complex workflows,
                  payment integrations and operational reporting into one
                  dependable experience.
                </p>

                <div className="featuredMetrics">
                  <div>
                    <strong>03</strong>
                    <span>delivery layers</span>
                  </div>
                  <div>
                    <strong>24/7</strong>
                    <span>production mindset</span>
                  </div>
                  <div>
                    <strong>API</strong>
                    <span>integration ready</span>
                  </div>
                </div>

                <div className="tags">
                  {projects[0].tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>

            <div className="filters">

              {categories.map((c) => (
                <button
                  key={c}
                  className={
                    filter === c
                      ? 'active'
                      : ''
                  }
                  onClick={() =>
                    setFilter(c)
                  }
                >
                  {c}
                </button>
              ))}

            </div>

            <div className="projectGrid">

              {filtered.map((p, i) => (
                <motion.article
                  className="projectCard"
                  layout
                  initial={{
                    opacity: 0,
                    y: 18
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  key={p.title}
                >

                  <div className="projectIcon">
                    {p.icon}
                  </div>

                  <div className="projectNumber">
                    {String(i + 1).padStart(2, '0')}
                    <ExternalLink size={15} />
                  </div>

                  <small>
                    {p.client}
                  </small>

                  <span className="projectStatus">
                    <i /> Live government application
                  </span>

                  <div className="projectHighlights">
                    <span>Production</span>
                    <span>{p.cat}</span>
                    <span>End-to-end</span>
                  </div>

                  <h3>
                    {p.title}
                  </h3>

                  <p>
                    {p.desc}
                  </p>

                  <ul>
                    {p.bullets.map((x) => (
                      <li key={x}>
                        {x}
                      </li>
                    ))}
                  </ul>

                  <div className="tags">

                    {p.tags.map((x) => (
                      <span key={x}>
                        {x}
                      </span>
                    ))}

                  </div>

                </motion.article>
              ))}

            </div>

          </div>
        </section>

        {/* PROCESS */}
        <section
          id="process"
          className="section dark"
        >
          <div className="wrap">

            <div className="sectionCode">
              // 04. process
            </div>

            <h2>
              How I <em>Work</em>
            </h2>

            <p className="sectionIntro">
              A practical delivery flow from business
              requirement to production support.
            </p>

            <div className="processGrid">

              {process.map(
                ([n, t, d]) => (
                  <motion.div
                    className="processBox"
                    key={n}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                  >

                    <span>{n}</span>

                    <Workflow size={21} />

                    <h3>{t}</h3>

                    <p>{d}</p>

                  </motion.div>
                )
              )}

            </div>

          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          id="experience"
          className="section"
        >
          <div className="wrap">

            <div className="sectionCode">
              // 05. experience
            </div>

            <h2>
              Career <em>Journey</em>
            </h2>

            <div className="experienceCard">

              <div className="expDate">
                {experience[0].period}
              </div>

              <div className="expMain">

                <h3>
                  {experience[0].role}
                </h3>

                <strong>
                  {experience[0].company}
                </strong>

                <ul>

                  {experience[0].bullets.map(
                    (x) => (
                      <li key={x}>
                        {x}
                      </li>
                    )
                  )}

                </ul>

                <div className="tags">

                  {experience[0].tags.map(
                    (x) => (
                      <span key={x}>
                        {x}
                      </span>
                    )
                  )}

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* EDUCATION */}
        <section
          id="education"
          className="section dark educationSection"
        >
          <div className="wrap">

            <div className="sectionCode">
              // 06. education
            </div>

            <h2>
              Education <em>&amp; Learning</em>
            </h2>

            <p className="sectionIntro">
              A practical learning path shaped by software engineering,
              enterprise delivery and continuous technical growth.
            </p>

            <div className="educationGrid">

              <motion.article
                className="educationCard"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <span className="educationNumber">01</span>
                <div>
                  <span className="educationLabel">FOUNDATION</span>
                  <h3>Software Engineering</h3>
                  <p>
                    Building strong foundations in application architecture,
                    APIs, databases and maintainable production code.
                  </p>
                </div>
              </motion.article>

              <motion.article
                className="educationCard"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <span className="educationNumber">02</span>
                <div>
                  <span className="educationLabel">CORE STACK</span>
                  <h3>Java, Spring &amp; React</h3>
                  <p>
                    Growing through hands-on work with Java, Spring Boot,
                    React, PostgreSQL and service integrations.
                  </p>
                </div>
              </motion.article>

              <motion.article
                className="educationCard"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <span className="educationNumber">03</span>
                <div>
                  <span className="educationLabel">CONTINUOUS GROWTH</span>
                  <h3>Systems That Scale</h3>
                  <p>
                    Learning through real-world delivery, troubleshooting,
                    integrations and reliable production support.
                  </p>
                </div>
              </motion.article>

            </div>

          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="contact"
        >
          <div className="wrap contactGrid">

            <div>

              <div className="sectionCode">
                // 07. contact
              </div>

              <h2>
                Let's <em>Connect</em>
              </h2>

              <p>
                Have a software project, integration
                challenge or technical opportunity?
                Send me a message.
              </p>

              <div className="contactLinks">

                <a
                  href={`mailto:${profile.email}`}
                >
                  <Mail size={17} />
                  {profile.email}
                </a>

                <button
                  className="contactCopy"
                  type="button"
                  onClick={copyEmail}
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? 'Email copied' : 'Copy email'}
                </button>

                <a
                  href="https://github.com/Dev-Pradeep2022"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitBranch size={17} />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon size={17} />
                  LinkedIn
                </a>

              </div>

            </div>

            <form
              className="contactForm"
              onSubmit={submitContactForm}
            >

              <label>
                Name
                <input
                  name="name"
                  placeholder="Your name"
                  required
                />
              </label>

              <label>
                Email
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell me about your project or opportunity"
                  required
                />
              </label>

              <button
                className="btn darkBtn"
                type="submit"
              >
                Send Message
                <Send size={16} />
              </button>

              {formStatus && (
                <p
                  className={`formStatus ${formStatus.startsWith('Message') ? 'success' : ''}`}
                  role="status"
                >
                  {formStatus}
                </p>
              )}

            </form>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="siteFooter">

        <div className="wrap footerIn">

          <div className="footerBrand">
            <strong>Pradeep<span>.dev</span></strong>
            <small>Software Engineer / Portfolio</small>
          </div>

          <div className="footerMeta">
            <span>© {new Date().getFullYear()} {profile.name}</span>
            <span>Built for thoughtful digital delivery</span>
          </div>

          <button
            className="backToTop"
            aria-label="Back to top"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })
            }
          >
            <span>↑</span>
            <small>Top</small>
          </button>

        </div>

      </footer>

    </div>
  );
}

createRoot(
  document.getElementById('root')
).render(
  <App />
);
