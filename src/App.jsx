import AfricaMap3D from './AfricaMap3D.jsx';
import BackToTop from './BackToTop.jsx';

const capabilities = [
  {
    title: 'Software Development',
    body: 'We design and ship purposeful software for real institutions, from customer-facing experiences to internal systems that keep operations moving.',
  },
  {
    title: 'Systems Integration',
    body: 'Pearlbyte connects tools, data, payments, devices, and workflows so organisations stop operating in fragments and start working as a system.',
  },
  {
    title: 'Hardware Deployment',
    body: 'We deploy digital touchpoints on the ground: kiosks, branded terminals, peripherals, and configured environments that work in context.',
  },
  {
    title: 'Digital Transformation',
    body: 'Beyond implementation, we help institutions rethink service delivery, automate manual processes, and build digital capacity that lasts.',
  },
];

const pillars = [
  'Built in Uganda with a continental outlook',
  'Offline-aware systems for African operating conditions',
  'Elegant interfaces paired with operational rigor',
  'Infrastructure thinking, not one-off project delivery',
];

const ecosystem = [
  {
    name: 'KaribuOS',
    summary: 'Guest check-in, visitor management, queue handling, and reception infrastructure built for public-facing institutions.',
    href: 'https://karibuos.com/',
  },
  {
    name: 'AI Knowledge Systems',
    summary: 'Retrieval, local AI workflows, and knowledge tooling for teams that need grounded answers and better internal access to information.',
  },
  {
    name: 'Custom Enterprise Delivery',
    summary: 'Bespoke platforms, integrations, and deployments tailored to service businesses, institutions, and growth-stage operators.',
  },
];

const directors = [
  {
    name: 'Emmanuel Columbus Mugenyi',
    role: 'Managing Director / Founder',
    detail: 'Software Engineer | Technology Entrepreneur',
  },
  {
    name: 'Collin Tugume',
    role: 'Director',
    detail: 'Industrial Engineering and Management Professional',
  },
  {
    name: 'Catherine Murungi',
    role: 'Director & Company Secretary',
    detail: 'Data Analyst',
  },
];

export default function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Pearlbyte Technologies">
          <img className="brand-logo" src="/pearlbyte-icon.svg" alt="" />
          <span className="brand-copy">
            <strong>Pearlbyte</strong>
            <small>Pearlbyte Technologies Limited</small>
          </span>
        </a>

        <nav className="topnav" aria-label="Primary">
          <a href="#capabilities">Capabilities</a>
          <a href="#story">Story</a>
          <a href="#ecosystem">Ecosystem</a>
          <a href="#leadership">Leadership</a>
        </nav>

        <a className="button button-ghost" href="#contact">
          Start a Conversation
        </a>
      </header>

      <main className="site-main">
        <section className="hero" id="home">
          <div className="hero-map-background">
            <AfricaMap3D />
          </div>

          <div className="hero-copy">
            <div className="eyebrow">Building intelligent systems for Africa</div>
            <h1>
              Building the systems, software, and digital touchpoints shaping
              Africa&apos;s next institutions.
            </h1>
            <p className="hero-text">
              Pearlbyte Technologies is a technology services company engaged in
              software development, systems integration, hardware deployment,
              and digital transformation solutions for businesses and
              institutions.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#capabilities">
                Explore Our Work
              </a>
              <a className="button button-secondary" href="#story">
                Why Pearlbyte
              </a>
            </div>
            <div className="hero-meta">
              <span>Incorporated in the Republic of Uganda since 2026</span>
              <span>PEARLBYTE TECHNOLOGIES LIMITED</span>
            </div>
          </div>

        </section>

        <section className="section section-intro">
          <div className="glass-panel intro-panel">
            <p className="section-kicker">From the Pearl of Africa to the digital future</p>
            <p className="intro-text">
              The name <strong>Pearlbyte</strong> is rooted in Uganda, long
              known as the Pearl of Africa. <strong>Pearl</strong> carries the
              place where the company was built. <strong>Byte</strong> signals
              the digital systems, code, data, and infrastructure that now move
              institutions forward. Together, the name expresses a simple idea:
              African identity with technical depth.
            </p>
          </div>
        </section>

        <section className="section" id="capabilities">
          <div className="section-heading">
            <span className="section-kicker">What We Do</span>
            <h2>Practical digital transformation, designed for African realities.</h2>
            <p>
              Our work sits at the intersection of product thinking, service
              design, deployment discipline, and long-term operational value.
            </p>
          </div>

          <div className="card-grid">
            {capabilities.map((item) => (
              <article className="glass-panel capability-card" key={item.title}>
                <div className="card-index" aria-hidden="true">
                  {item.title.slice(0, 2).toUpperCase()}
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section" id="story">
          <div className="section-heading split-copy">
            <span className="section-kicker">Product Objective</span>
            <h2>Technology should feel grounded, beautiful, and operationally useful.</h2>
            <p>
              That principle already runs through the ecosystem around
              Pearlbyte: visitor infrastructure, AI-enabled knowledge tools,
              and service systems built to work in demanding environments. We
              care about more than software delivery. We care about how a
              digital system lands in the real world.
            </p>
          </div>

          <div className="glass-panel pillars-panel">
            {pillars.map((pillar) => (
              <div className="pillar-row" key={pillar}>
                <span className="pillar-dot" aria-hidden="true" />
                <p>{pillar}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="ecosystem">
          <div className="section-heading">
            <span className="section-kicker">Ecosystem</span>
            <h2>A parent company site with room for products, platforms, and delivery.</h2>
            <p>
              Pearlbyte is not positioned as a single-product brand. It is the
              company layer above products and deployments, giving a coherent
              home to the infrastructure we build.
            </p>
          </div>

          <div className="ecosystem-list">
            {ecosystem.map((item) => (
              <article className="ecosystem-row" key={item.name}>
                <h3>{item.name}</h3>
                <div className="ecosystem-copy">
                  <p>{item.summary}</p>
                  {item.href ? (
                    <a
                      className="ecosystem-link"
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit website
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="leadership">
          <div className="section-heading">
            <span className="section-kicker">Leadership</span>
            <h2>The company directors.</h2>
          </div>

          <div className="card-grid leadership-grid">
            {directors.map((director) => (
              <article className="glass-panel leader-card" key={director.name}>
                <div className="leader-accent" />
                <h3>{director.name}</h3>
                <p className="leader-role">{director.role}</p>
                <p>{director.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="glass-panel cta-panel">
            <span className="section-kicker">Pearlbyte Technologies</span>
            <h2>Built in Uganda. Focused on Africa. Ready for serious digital work.</h2>
            <p>
              Pearlbyte Technologies, incorporated as
              {' '}
              <strong>PEARLBYTE TECHNOLOGIES LIMITED</strong>
              {' '}
              in the Republic of Uganda since 2026, exists to help businesses
              and institutions deploy digital systems with clarity and depth.
            </p>
            <a className="button button-primary" href="mailto:hello@pearlbyte.africa">
              hello@pearlbyte.africa
            </a>
          </div>
        </section>
      </main>
      <BackToTop />
    </div>
  );
}
